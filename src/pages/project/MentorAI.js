import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import "./../../style/project/steven-ai.css"

function MentorAI() {
    // States for managing WebSocket connection and chat messages
    const [chatSocket, setChatSocket] = useState(null);
    const [connectionStatus, setConnectionStatus] = useState("Not Connected");
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState("");
    const [isConnected, setIsConnected] = useState(false);
    const [isModelLoaded, setIsModelLoaded] = useState(false);

    // WebSocket URL (adjust this URL based on your setup)
    const wsUrl = `wss://webserver.liustev6.ca/ws/socket-server-mentor-ai/`;

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
                            Mentorship Chatbot - <span className='primary-color'> Mentor AI </span>
                        </h3>
                        <p className="fade-in" style={{ textAlign: "justify", paddingTop: 20 }}>
                            MentorAI is a research project that <span className="primary-color">automates the creation
                                of an LLM pipeline</span> using only <span className="primary-color">YouTube links</span> to
                            generate personalized mentorship advice. It leverages NLP mentorship
                            videos, transcripts, and user-specific data to guide aspiring researchers in finding
                            mentors, conducting literature reviews, and preparing for PhD applications with tailored,
                            actionable suggestions.
                        </p>
                        <p className="fade-in" style={{ textAlign: "justify", paddingTop: 20 }}>
                            <span className="primary-color">Note: </span> MentorAI is an <span
                                className="primary-color">ongoing research project</span> aimed
                            at automating the creation of an LLM pipeline using YouTube links to generate personalized
                            mentorship advice. We are experimenting with advanced models and techniques, such as
                            Retrieval-Augmented Generation (RAG), to enhance the automation process. On this page, we
                            include a demo of the <span className="primary-color">fine-tuned Llama 3.2 version</span>,
                            automatically trained from 29 YouTube link at the
                            <span className="primary-color"> ACL Year-Round Mentorship Channel</span>. Feel free to ask
                            some questions!
                        </p>
                    </Col>
                    <Col lg={12} xl={5} style={{ paddingBottom: 20, textAlign: "center" }}>
                        <img
                            src="/project-demo/mentor-ai-qa.png"
                            alt="Mentor AI QA"
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
                    Start a Chat - <strong className="primary-color">
                        {!isConnected ? (
                            <span onClick={requestConnection} style={{ cursor: "pointer" }}> Click to Connect</span>
                        ) : (
                            <span onClick={requestConnection}> Connected</span>
                        )}
                    </strong>
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
            <div className="bottom-space" />
        </Container>
    );
}

export default MentorAI;
