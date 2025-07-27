import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import "./../../style/project/steven-ai.css"

function StevenAI() {
    // States for managing WebSocket connection and chat messages
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState("");
    const [isModelLoaded, setIsModelLoaded] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userMessage = messageInput.trim();
        if (!userMessage) return;

        setMessages((prev) => [...prev, { sender: "You", text: userMessage }]);
        setMessageInput("");

        try {
            const response = await fetch(
                `https://server-lite.liustev6.ca/stevenai/openai-rag/query?q=${encodeURIComponent(userMessage)}`
            );
            const data = await response.json();

            if (data.answer) {
                setMessages((prev) => [...prev, { sender: "AI", text: data.answer }]);
            } else if (data.error) {
                setMessages((prev) => [...prev, { sender: "AI", text: `Error: ${data.error}` }]);
            } else {
                setMessages((prev) => [...prev, { sender: "AI", text: "No response received." }]);
            }
        } catch (error) {
            setMessages((prev) => [...prev, { sender: "AI", text: `Error: ${error.message}` }]);
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
                    Please allow up to 20 seconds for it to load
                    initially. Since text streaming isn't implemented, longer messages may take up to 10 seconds to
                    generate. The chat will timeout if no new requests are received within 60 seconds.
                </p>
            </Container>



            <Container className="section-margin">
                <h3 className="fade-in">
                    Start a Chat - <span className="primary-color"> Now
                    </span>
                </h3>
                
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
