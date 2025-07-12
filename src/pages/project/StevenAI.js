import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import "./../../style/project/steven-ai.css"

function StevenAI() {
    // States for managing WebSocket connection and chat messages
    const [chatSocket, setChatSocket] = useState(null);
    const [connectionStatus, setConnectionStatus] = useState("Not Connected");
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState("");
    const [isConnected, setIsConnected] = useState(false);
    const [isModelLoaded, setIsModelLoaded] = useState(false);

    // WebSocket URL (adjust this URL based on your setup)
    const wsUrl = `wss://webserver.liustev6.ca/ws/socket-server/`;

    // Function to initiate WebSocket connection when button is clicked
    const requestConnection = () => {
        try {
            const socket = new WebSocket(wsUrl);
            setChatSocket(socket);

            // WebSocket opened
            socket.onopen = () => {
                setConnectionStatus("Connected!");
                setIsConnected(true);  // Mark connection as established
            };

            // WebSocket message received
            socket.onmessage = (e) => {
                const data = JSON.parse(e.data);
                if (data.code === "MR") {  // Model Response
                    setMessages((prevMessages) => [...prevMessages, { sender: "AI", text: data.message }]);
                } else if (data.code === "CA") {// Connection accepted
                    setConnectionStatus(data.message);
                } else if (data.code === "ML") {  // Model loaded
                    setIsModelLoaded(true);
                    setConnectionStatus(data.message);
                } else if (data.code === "TO") {  // Timeout
                    setConnectionStatus(data.message);
                }
            };

            // WebSocket closed
            socket.onclose = () => {
                setConnectionStatus("Connection Closed – This may be due to session timeout or reaching the maximum connection limit (1).");
                setChatSocket(null);
                setIsModelLoaded(false);
                setIsConnected(false); // Mark connection as disconnected
            };
        } catch (e) {
            setConnectionStatus("Failed to connect – The service might not have started.");
        }
    };

    // Handle form submission to send messages
    const handleSubmit = (e) => {
        e.preventDefault();
        if (chatSocket && chatSocket.readyState === WebSocket.OPEN) {
            chatSocket.send(JSON.stringify({ message: messageInput }));
            setMessages((prevMessages) => [...prevMessages, { sender: "You", text: messageInput }]);
            setMessageInput("");  // Clear input
        }
    };

    return (
        <Container fluid className="project-demo-section">
            <Container fluid className="two-column-content-padding">
                <Row>
                    <Col lg={12} xl={7}>
                        <h3 className="fade-in">
                            Ask me everything - <span className='primary-color'> Steven AI </span>
                        </h3>
                        <p className="fade-in" style={{ textAlign: "justify", paddingTop: 20 }}>
                            This personal project focuses on creating an AI chatbot capable of answering any questions
                            about me. The chatbot is built by fine-tuning the <span className="primary-color">LLaMA 3.2
                                model </span> (3 billion parameters) using around 1,000 Q&A pairs related to <span
                                    className="primary-color"> my personal background and experience.</span>
                        </p>
                        <p className="fade-in" style={{ textAlign: "justify", paddingTop: 20 }}>
                            To optimize resources, I leveraged <span className="primary-color">Unsloth</span>, which
                            delivers 2x faster speeds and reduces VRAM usage by 50%. I also used a <span
                                className="primary-color">LoRA adapter</span> for parameter-efficient fine-tuning, enabling
                            efficient training within my home lab setup, which includes a 16GB 4060Ti GPU.
                            The model was trained with several LoRA ranks (8, 16, 32, 64, 128) and used a LoRA alpha set
                            at 2x the LoRA rank over 10 epochs. The best-performing configuration had a <span
                                className="primary-color">LoRA rank of 16 and LoRA alpha of 32</span>, achieving a
                            performance range of <span className="primary-color">70%-85%</span> across different
                            answers. Due to the model’s size (3 billion parameters) and resource constraints, <span
                                className="primary-color">it may occasionally make mistakes</span>. Feel free to ask me some
                            questions!
                        </p>
                    </Col>
                    <Col lg={12} xl={5} style={{ paddingBottom: 20, textAlign: "center" }}>
                        <img
                            src="/project-demo/steven-ai-qa.png"
                            alt="Steven AI QA"
                            className="img-fluid fade-in food-classify-image"
                        />
                    </Col>
                </Row>
            </Container>

            <Container className="section-margin">
                <h3 className="fade-in ">
                    READ <span className="primary-color"> ME </span> Before Start
                </h3>
                <p className="sm fade-in sub-title" >
                    Due to limited resources, only one connection is
                    allowed at a time. The model is lazy-loaded, so please allow up to 20 seconds for it to load
                    initially. Since text streaming isn't implemented, longer messages may take up to 10 seconds to
                    generate. The chat will timeout if no new requests are received within 60 seconds.
                </p>
            </Container>



            <Container className="section-margin">
                <h3 className="fade-in">
                    Start a Chat - <span className="primary-color">
                        {!isConnected ? (
                            <span onClick={requestConnection} style={{ cursor: "pointer" }}> Click to Connect</span>
                        ) : (
                            <span onClick={requestConnection}> Connected</span>
                        )}
                    </span>
                </h3>
                <p className="sub-title fade-in">
                    {connectionStatus}
                </p>

                {(messages.length > 0 || isModelLoaded) &&
                    <div id="chatLog" className="chat-log">
                        {messages.map((msg, index) => (
                            <div key={index}
                                className={`chat-message ${msg.sender === 'You' ? 'chat-message-sender' : 'chat-message-receiver'}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                }

                {/* Chat Section */}
                {isModelLoaded && (
                    <form id="chatForm" onSubmit={handleSubmit} className="chat-form">
                        <input
                            type="text"
                            id="messageInput"
                            value={messageInput}
                            onChange={(e) => setMessageInput(e.target.value)}
                            placeholder="Type a message..."
                            required
                            className="chat-input"
                        />
                        <button type="submit" className="send-button">Send</button>
                    </form>
                )}
            </Container>
        </Container>
    );
}

export default StevenAI;
