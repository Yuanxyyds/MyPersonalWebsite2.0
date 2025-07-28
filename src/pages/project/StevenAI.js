import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";

import "./../../style/project/steven-ai.css"

function StevenAI() {
    // States for managing WebSocket connection and chat messages
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [selectedModel, setSelectedModel] = useState("ChatGPT-4o");
    const [selectedRAG, setSelectedRAG] = useState(["QA Pairs", "Docs of Facts"]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userMessage = messageInput.trim();
        if (!userMessage) return;

        setMessages((prev) => [...prev, { sender: "You", text: userMessage }]);
        setMessageInput("");

        // === STEP 1: Determine model slug
        const modelSlug = selectedModel === "ChatGPT-4o" ? "gpt4o" : "llama";

        // === STEP 2: Determine RAG suffix
        let ragSlug = "";
        const hasQA = selectedRAG.includes("QA Pairs");
        const hasDocs = selectedRAG.includes("Docs of Facts");

        if (hasQA && hasDocs) ragSlug = "qa-docs";
        else if (hasQA) ragSlug = "qa";
        else if (hasDocs) ragSlug = "docs";
        else ragSlug = ""; // fallback to base path

        // === STEP 3: Construct path
        const fullPath = ragSlug
            ? `${modelSlug}-${ragSlug}`
            : `${modelSlug}`;

        const fullUrl = `https://server-lite.liustev6.ca/stevenai/${fullPath}/query?q=${encodeURIComponent(userMessage)}`;


        try {
            const response = await fetch(fullUrl);
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
        <section>
            {showPopup && (
                <div className="popup-overlay" onClick={() => setShowPopup(false)}>
                    <div className="popup-modal" onClick={(e) => e.stopPropagation()}>
                        <label>
                            Base Model:
                            <select
                                value={selectedModel}
                                onChange={(e) => setSelectedModel(e.target.value)}
                            >
                                <option value="ChatGPT-4o">ChatGPT-4o</option>
                                <option value="LLaMA">FT LLaMA-3.2-3B</option>
                            </select>
                        </label>

                        <label className="mt-3">RAG Info:</label>
                        <div className="checkbox-group">
                            {["QA Pairs", "Docs of Facts"].map((option) => (
                                <label key={option}>
                                    <input
                                        type="checkbox"
                                        checked={selectedRAG.includes(option)}
                                        onChange={() =>
                                            setSelectedRAG((prev) =>
                                                prev.includes(option)
                                                    ? prev.filter((item) => item !== option)
                                                    : [...prev, option]
                                            )
                                        }
                                    />
                                    {option}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <Container fluid className="steven-ai-section">
                <img className="steven-ai-bg-desktop" src="/project-demo/stevenai.jpeg" alt="campus-eats-bg" />
                <Container fluid id="landing" className="steven-ai-content-padding">
                    <Row>
                        <Col xs={12} sm={10} md={8} lg={7} xl={6} xxl={6} className="steven-ai-fixed-height-col">
                            <div className="steven-ai-text-card text-center">
                                <h2 className="mb-2" style={{ fontWeight: '800' }}>
                                    STEVEN AI
                                </h2>
                                <p className="small delay-in delay-1" style={{ textAlign: "start" }}>
                                    StevenAI is <span className="neon-text">a personalized AI chatbot</span> built to answer any questions me. It was originally developed by <span className="neon-text">fine-tuning LLaMA 3.2 with LoRA</span> on a custom dataset of 1,000+ Q&A pairs. However, while this method provided deep personalization, it also surfaced limitations in accuracy, especially when handling rare or nuanced queries.
                                </p>
                                <p className="small delay-in delay-2" style={{ textAlign: "start" }}>
                                    To address these challenges, StevenAI was upgraded with a <span className="neon-text">retrieval-augmented generation (RAG)</span> layer, which supplements the model’s responses with relevant facts from a structured knowledge base. This <span className="neon-text">hybrid architecture</span> blends the strengths of fine-tuning with real-time semantic retrieval, resulting in more accurate, flexible, and context-aware answers.
                                </p>
                                <p className="small delay-in delay-3" style={{ textAlign: "start" }}>
                                    The system supports multiple <span className="neon-text">base models</span> and <span className="neon-text">retrieval strategies</span>. You can select your preferred combination and <span className="neon-text">ASK A QUESTION NOW</span>!
                                </p>

                            </div>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="steven-ai-chat-section" >
                <Container fluid id="landing" className="chat-container">
                    <div className="chat-padding" />
                    <h2 id="about" className="fade-in mt-2 mb-4 text-center">Start a <span className="neon-text">Chat</span> now</h2>
                    <div id="chatLog" className="chat-log">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`chat-message ${msg.sender === 'You' ? 'chat-message-sender' : 'chat-message-receiver'}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>

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
                        <button
                            type="button"
                            className="send-button"
                            onClick={() => setShowPopup((prev) => !prev)}
                        >
                            Config
                        </button>

                        <button type="submit" className="send-button">Send</button>
                    </form>
                    <div className="chat-padding" />
                </Container>
            </Container>
        </section>
    );
}

export default StevenAI;
