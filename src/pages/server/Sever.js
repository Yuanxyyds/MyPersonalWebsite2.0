import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../components/common/Particle";
import hardware from "../../assets/hardware.png";
import axios from "axios";
import ModelCanvas from "../../components/server/ModelCanvas";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";



function Server() {
    const [responseData, setResponseData] = useState(null);
    const [atTop, setAtTop] = useState(true);

    const handleClick = () => {
        if (atTop) {
            // Scroll to bottom
            window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth"
            });
        } else {
            // Scroll to top
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    };

    useEffect(() => {
        // Prevent wheel and touchmove
        const preventScroll = (e) => {
            e.preventDefault();
        };

        window.addEventListener("wheel", preventScroll, { passive: false });
        window.addEventListener("touchmove", preventScroll, { passive: false });

        // Prevent arrow keys and spacebar
        const preventKeys = (e) => {
            const keys = [32, 33, 34, 35, 36, 37, 38, 39, 40]; // space, pgup/pgdn, end/home, arrows
            if (keys.includes(e.keyCode)) {
                e.preventDefault();
            }
        };
        window.addEventListener("keydown", preventKeys);

        return () => {
            window.removeEventListener("wheel", preventScroll);
            window.removeEventListener("touchmove", preventScroll);
            window.removeEventListener("keydown", preventKeys);
        };
    }, []);

    useEffect(() => {
        const preventScroll = (e) => {
            e.preventDefault();
        };

        const preventKeys = (e) => {
            const keys = [32, 33, 34, 35, 36, 37, 38, 39, 40]; // space, pgup/pgdn, end/home, arrows
            if (keys.includes(e.keyCode)) {
                e.preventDefault();
            }
        };

        const handleScroll = () => {
            if (window.scrollY < window.innerHeight) {
                setAtTop(true);
            } else {
                setAtTop(false);
            }
        };

        window.addEventListener("keydown", preventKeys);
        window.addEventListener("wheel", preventScroll, { passive: false });
        window.addEventListener("touchmove", preventScroll, { passive: false });
        window.addEventListener("scroll", handleScroll);

        const fetchStats = async () => {
            try {
                const response = await axios.get('https://webserver.liustev6.ca/serverstats/getServerStats');
                if (response.status === 200) {
                    setResponseData(response.data);
                }
            } catch (error) {
                console.error("Error fetching system stats:", error);
            }
        };

        const interval = setInterval(fetchStats, 3000);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("wheel", preventScroll);
            window.removeEventListener("touchmove", preventScroll);
            window.removeEventListener("keydown", preventKeys);
            clearInterval(interval);
        }
    }, []);

    return (
        <section>
            <Particle />
            <button
                className="scroll-to-bottom"
                onClick={handleClick}>
                {atTop ? <FiArrowDown /> : <FiArrowUp />}
            </button>
            <Container fluid className="server-top-section">
                <Container fluid id="home" className="server-content">
                    <Row fluid id="home">
                        <Col lg={10} xl={8}>
                            <h1 className="server-primary-header fade-in">
                                Explore My Home Server!
                            </h1>
                            <h2 className="server-sub-header fade-in">
                                Hosting, and Innovating
                            </h2>

                            <h2 className="server-header-description fade-in">
                                Discover how I manage, automate, and deploy
                                projects from my custom-built home server.

                            </h2>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <div className="canvas-container">
                <ModelCanvas />
            </div>
            {/* <Container fluid className="server-hardware-section">
                <Row fluid id="home">
                    <Col sm={12} md={10} lg={6}>
                        <img src={hardware} className="fade-in img-fluid" style={{ width: '100%' }}
                            alt="hardware" />
                    </Col>
                    <Col sm={12} md={10} lg={6}>
                        <h1 className="server-info-header fade-in">
                            <span className="primary-color">Hardware </span> Info
                        </h1>
                        <h2 className="server-info-text fade-in">
                            CPU/GPU: AMD Ryzen 7 5800X, NVIDIA GeForce RTX 4060 Ti
                        </h2>
                        <h2 className="server-info-text fade-in">
                            RAM/DISK: Corsair Vengeance 32G DDR4, SAMSUNG 990 EVO SSD 1TB, Seagate IronWolf Pro 4T HDD
                        </h2>
                        <h2 className="server-info-text fade-in">
                            CASE/MOTHERBOARD: Corsair iCUE 4000D RGB Airflow, ASUS TUF Gaming B550-PLUS
                        </h2>

                        <h2 className="server-info-text fade-in">
                            CPU Info:
                            {responseData != null ? (
                                `${responseData["cpu"]["cpu_usage_percent"]}% out of ${responseData["cpu"]["cpus"]} CPUS - ${responseData["cpu"]["cpu_temp"]}°C`
                            ) : (
                                'Calculating...'
                            )}
                        </h2>
                        <h2 className="server-info-text fade-in">
                            RAM Info:
                            {responseData != null ? (
                                `${responseData["memory"]["memory_usage_percent"]}% (${responseData["memory"]["used"]}GB) out of ${responseData["memory"]["total"]}GB`
                            ) : (
                                'Calculating...'
                            )}
                        </h2>


                    </Col>
                </Row>

            </Container> */}
        </section>
    );
}

export default Server;
