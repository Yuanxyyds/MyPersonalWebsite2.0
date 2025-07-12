import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import ModelCanvas from "../../components/server/ModelCanvas";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";


function useIsVerticalLayout() {
    const getIsVertical = () => window.innerHeight / window.innerWidth > 1.3;
    const [isVertical, setIsVertical] = useState(getIsVertical());

    useEffect(() => {
        const handleResize = () => {
            setIsVertical(getIsVertical());
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isVertical;
}


function Server() {
    const [responseData, setResponseData] = useState(null);
    const [atTop, setAtTop] = useState(true);
    const isVertical = useIsVerticalLayout();

    const handleClick = () => {
        if (atTop) {
            window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth"
            });
        } else {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    };

    useEffect(() => {
        const preventScroll = (e) => {
            e.preventDefault();
        };

        const preventKeys = (e) => {
            const keys = [32, 33, 34, 35, 36, 37, 38, 39, 40];
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
            <button className="scroll-to-bottom" onClick={handleClick}>
                {atTop ? <FiArrowDown /> : <FiArrowUp />}
            </button>
            {isVertical ?
                <Container fluid className="server-vertical-section">
                    <Container fluid id="landing" style={{ paddingTop: '20vh', paddingLeft: '5vw', paddingRight: '5vw' }}>
                        <Row>
                            <Col lg={11} xl={8}>
                                <h1 className="thin with-line fade-in mb-0 delay-in delay-0">
                                    EXPLORE MY
                                </h1>
                                <h1 className="fade-in mb-2 delay-in delay-1 primary-color">
                                    3D SERVER ROOM
                                </h1>
                                <p className="fade-in mb-4 delay-in delay-2 bold">
                                    Discover how I manage, automate, and deploy projects from my custom-built home server.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid className="server-video-wrapper delay-in delay-3">
                        <video src="/server/server.mp4" style={{ width: '100%' }} autoPlay muted loop playsInline />
                    </Container>
                    <Container fluid id="landing" style={{ paddingTop: '16px', paddingLeft: '5vw', paddingRight: '5vw' }}>
                        <Row>
                            <h4 className="fade-in delay-in delay-3" style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={handleClick}>
                                Let's Go
                            </h4>
                        </Row>
                    </Container>
                </Container>
                :
                <Container fluid className="server-horizontal-section" >
                    <video className="server-bg-desktop" src="/server/server.mp4" autoPlay muted loop playsInline />
                    <Container fluid id="landing" className="one-column-content-padding">
                        <Row>
                            <Col xs={11} md={8} lg={7} xl={6}>
                                <h1 className="with-line fade-in mb-0 delay-in delay-0">
                                    EXPLORE MY
                                </h1>
                                <h2 className="fade-in mb-2 delay-in delay-1 primary-color" style={{ fontWeight: '700' }}>
                                    3D SERVER ROOM
                                </h2>
                                <p className="fade-in mb-0 delay-in delay-2 bold">
                                    Discover how I manage, automate, and deploy projects from my custom-built home server.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            }
            <Container fluid className="canvas-container p-0">
                <ModelCanvas />
            </Container>
        </section>
    );
}

export default Server;
