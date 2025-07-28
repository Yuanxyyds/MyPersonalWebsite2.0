import { useState, useRef, useEffect } from "react";
import { FiSend } from "react-icons/fi";
import "./../../style/common/chatbot.css";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const chatbotRef = useRef(null);

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!messageInput.trim() || isLoading) return;

        const userMessage = messageInput.trim();
        setMessageInput("");
        setMessages((prev) => [...prev, { sender: "You", text: userMessage }]);
        setIsLoading(true);

        // STEP 1: Determine lastQ and lastA
        let lastQ = null;
        let lastA = null;
        for (let i = messages.length - 1; i >= 0; i--) {
            if (messages[i].sender === "You" && !lastQ) lastQ = messages[i].text;
            if (messages[i].sender === "AI" && !lastA) lastA = messages[i].text;
            if (lastQ && lastA) break;
        }

        const baseUrl = `https://server-lite.liustev6.ca/stevenai/gpt4o-qa-docs/query`;

        const urlParams = new URLSearchParams({ q: userMessage });
        if (lastQ && lastA) {
            urlParams.append("last_q", lastQ);
            urlParams.append("last_a", lastA);
        }

        const fullUrl = `${baseUrl}?${urlParams.toString()}`;

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
        } finally {
            setIsLoading(false); // <-- stop loading
        }
    };


    // Click outside to close
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    return (
        <div className="chatbot-container" ref={chatbotRef}>
            {!isOpen && (
                <img
                    src="/project/stevenai.webp"
                    alt="Chatbot"
                    className="chatbot-icon"
                    onClick={toggleChat}
                />
            )}
            {isOpen && (
                <div className="chatbot-pannel">
                    <div className="chatbot-window">
                        <p className="chatbot-header" onClick={toggleChat}>
                            Ask Steven AI 🤖
                        </p>
                        <div className="chatbot-messages">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`chat-message ${msg.sender}`}>
                                    {msg.text}
                                </div>
                            ))}
                        </div>
                        <form className="chatbot-input" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={messageInput}
                                onChange={(e) => setMessageInput(e.target.value)}
                                placeholder="Type your message..."
                            />
                            <button type="submit" className="chatbot-send-button" aria-label="Send" disabled={isLoading}>
                                <FiSend size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
