import { Container, Row, Col } from "react-bootstrap";
import { useIsVerticalLayout } from "../../components/effects/IsVertical";
import "./../../style/project/campus-eats.css"
import { useEffect, useState } from "react";
import { ScrollImage, StickyText } from "../../components/home/Gallery";
import ReactPlayer from "react-player";

function CampusEatsNew() {
    const isVertical = useIsVerticalLayout(1);
    const [isXS, setIsXS] = useState(false);
    const XS_BREAKPOINT = 767;

    // Detect if screen is xs on mount and resize
    useEffect(() => {
        const checkSize = () => {
            setIsXS(window.innerWidth < XS_BREAKPOINT);
        };

        checkSize(); // initial call
        window.addEventListener("resize", checkSize);
        return () => window.removeEventListener("resize", checkSize);
    }, []);


    useEffect(() => {
        const elements = [
            { headerId: 'about', lineId: 'about-line' },
            { headerId: 'timeline', lineId: 'timeline-line' },
        ];

        function handleScroll() {
            const viewportHeight = window.innerHeight;

            elements.forEach(({ headerId, lineId }) => {
                const header = document.getElementById(headerId);
                const line = document.getElementById(lineId);

                if (!header || !line) return;

                const rect = header.getBoundingClientRect();
                const distanceFromBottom = viewportHeight - rect.top;
                const scrollRatio = distanceFromBottom / viewportHeight;

                let widthPercent = 0;
                if (scrollRatio < 0.2) {
                    widthPercent = 0;
                } else if (scrollRatio >= 0.5) {
                    widthPercent = 100;
                } else {
                    widthPercent = ((scrollRatio - 0.2) / (0.5 - 0.2)) * 100;
                }

                widthPercent = Math.min(Math.max(widthPercent, 0), 100);
                line.style.width = `${widthPercent}%`;
            });
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section>
            <Container fluid className="ce-section">
                {isVertical ? <img className="ce-bg-desktop" src="/project-demo/campus-eats-bg-vertical.jpg" alt="campus-eats-bg-cropped" /> : <img className="ce-bg-desktop" src="/project-demo/campus-eats-bg.jpg" alt="campus-eats-bg" />}
                <Container fluid id="landing" className="ce-content-padding">
                    <Row>
                        <Col></Col>
                        <Col xs={12} sm={10} md={8} lg={7} xl={6} xxl={6} className="ce-fixed-height-col">
                            <div className="ce-text-card">
                                <img src="/project/campus-eats.png" className="delay-in delay-1" style={{ width: '100%' }} alt="campus-eats" />
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <h2 className="mb-2 delay-in delay-2" style={{ fontWeight: '700', color: '#ff621f' }}>
                                        Campus Eats
                                    </h2>
                                    <p className="mb-0 delay-in delay-2 bold" style={{ color: 'white', width: "90%" }}>
                                        Bringing your favorite off-campus meals to you - affordably, efficiently, and right where you are
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="two-column-content-padding" id="about" style={{ color: 'white' }}>
                <div className="text-with-animated-underline">
                    <h2 id="about" className="fade-in mb-0">About Us</h2>
                    <div id="about-line" className="animated-underline"></div>
                </div>
                <Row>
                    <Col lg={8}>
                        <p className="fade-in mt-5">
                            Campus Eats is a student-led startup on a mission to <i> <b className="primary-color"> transform the campus dining experience </b> </i> through
                            an all-in-one mobile platform. Beyond our core  <i> <b className="primary-color">  Grab and Go central delivery system,</b> </i>
                            we offer <i> <b className="primary-color">  dine-in student coupons, food truck online ordering,</b> </i>
                            and a <i> <b className="primary-color"> dynamic food options exploration map</b> </i> to help students discover meals across campus.
                        </p>

                        <p className="fade-in mt-4">  We address the limitations of in-person-only ordering and the high fees of traditional delivery apps by offering a
                            streamlined, affordable alternative. Through Campus Eats, students can browse menus, order ahead, skip lines,
                            and access exclusive discounts—making campus dining more diverse, accessible, and student-friendly than ever.
                        </p>
                    </Col>
                    <Col xs={0} lg={4} className="ce-logo">
                        <img src='/project-demo/campus-eats-logo.jpg' alt="Campus Eats Logo" style={{ maxHeight: "300px" }} />
                    </Col>
                </Row>
            </Container>
            <Container fluid className="two-column-content-padding" id="timeline" style={{ color: 'white' }}>
                <div className="text-with-animated-underline">
                    <h2 id="timeline" className="fade-in mb-0">Our Journey</h2>
                    <div id="timeline-line" className="animated-underline"></div>
                </div>
                <Row className="m-0 p-0" style={{ display: 'flex' }}>
                    <Col xs={12} md={10} lg={9} xl={6} className="m-0 p-2">
                        <ReactPlayer
                            style={{ marginTop: 20 }}
                            width="100%"
                            controls={true}
                            url='https://youtu.be/-iV_XxbnngA' />
                    </Col>
                    <Col xs={12} md={10} lg={9} xl={6} className="m-0 p-2">
                        <ReactPlayer
                            style={{ marginTop: 20 }}
                            width="100%"
                            controls={true}
                            url='https://youtu.be/VVPSaiIJwNQ' />
                    </Col>
                </Row>
            </Container>

            <StickyText text="Explore our journey from idea" targetId="timeline" fadeEndId="fisrt-image" />
            <Container fluid className="two-column-content-padding" id="timeline" style={{ color: 'white' }}>
                <Container fluid className="timeline-section text-center">
                    <Row className="m-0 p-0">
                        <Col xs={12} md={6} id="first-image" className="m-0 p-0">
                            <ScrollImage src="/project-demo/command-line.png" wrapperWidth="90%" speed={1} z={0} tag="Starting" tagLocation="20%"/>
                            <p className="md" style={{ width: '80%', margin: '2px auto', marginTop: isXS ? '8vh' : '12vh', marginBottom: isXS ? '8vh' : '12vh' }}>
                                Campus Eats began as Group Asoul’s final project for CSC207—a Java-based food truck ordering system with both backend logic and a CLI/Android frontend. This marked the first step toward building today’s Campus Eats platform.
                            </p>
                        </Col>
                        <Col xs={12} md={6} className="m-0 p-0">
                            <ScrollImage src="/project-demo/asoul.png" speed={0.8} wrapperWidth="60%" tag="Nov 2021" tagLocation="20%"
                                initialOffset={-20} />
                        </Col>
                    </Row>
                    <Row className="m-0 p-0">
                        <Col xs={12} md={6} className="m-0 p-0">
                            {
                                isXS && <p className="md" style={{
                                    width: '80%',
                                    margin: '8vh auto',
                                }}>
                                    After its launch by Group Asoul, Campus Eats entered its second phase with a new team, re-integrating by Flutter and Firebase, featuring separate user and seller apps for a richer, modernized experience.
                                </p>
                            }
                            <ScrollImage src="/project-demo/campus-eats-1.png" speed={1} wrapperWidth="60%" initialOffset={20} tag="May 2023"  tagLocation="15%"/>
                        </Col>
                        <Col xs={12} md={6} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: isXS ? 'flex-start' : 'flex-end',
                        }}>
                            {
                                !isXS && <p className="md" style={{
                                    width: '80%',
                                    margin: '16vh auto',
                                }}>
                                    After its launch by Group Asoul, Campus Eats entered its second phase with a new team, re-integrating by Flutter and Firebase, featuring separate user and seller apps for a richer, modernized experience.
                                </p>
                            }
                        </Col>
                    </Row>
                    <Row className="p-0">
                        <Col xs={12} md={6} id="" className="m-0 p-0">
                            <p className="md" style={{ width: '80%', margin: '2px auto', marginTop: isXS ? '8vh' : '5vh', marginBottom: isXS ? '8vh' : '13vh' }}>
                                Here are some snapshots of Campus Eats—a project we not only built and developed technically, but also advanced through business development and pitch presentations.
                            </p>
                            <ScrollImage src="/project-demo/campus-eats-steven.jpg" wrapperWidth="70%" speed={1} z={0} tag="Pitch" initialOffset={50} />
                        </Col>
                        <Col xs={12} md={6} className="m-0 p-0">
                            <ScrollImage src="/project-demo/campus-eats-team.png" wrapperWidth="80%" speed={1.23} z={0} tag="Our Team" initialOffset={-130} />
                        </Col>
                    </Row>
                    <Row className="p-0">
                        <Col xs={12} md={6} id="" className="m-0 p-0">
                            <p className="md" style={{ width: '80%', margin: '2px auto', marginTop: isXS ? '8vh' : '3vh', marginBottom: isXS ? '8vh' : '5vh' }}>
                                In Summer 2024, we joined the UofT Hatchery Program to enhance Campus Eats by adding new features, strengthening our business model.
                            </p>
                            {isXS && <ScrollImage src="/project-demo/uoft-hatchery.png" wrapperWidth="90%" speed={1.2} z={0} tag="Hatchery" initialOffset={0} />}
                            {!isXS && <ScrollImage src="/project/campus-eats.png" wrapperWidth="90%" speed={1} z={0} tag="Jan 2025" initialOffset={0} />}
                        </Col>
                        <Col xs={12} md={6} className="m-0 p-0">
                            {!isXS && <ScrollImage src="/project-demo/uoft-hatchery.png" wrapperWidth="90%" speed={1.2} z={0} tag="Hatchery" initialOffset={0} />}
                            <p className="md" style={{ width: '80%', margin: '2px auto', marginTop: isXS ? '8vh' : '0', marginBottom: isXS ? '8vh' : '5vh' }}>
                               Finally, we redesigned Campus Eats with a sleek modern UI, expanded features, and a scalable backend—delivering a faster, smarter, and more seamless student dining experience.
                            </p>
                            {isXS && <ScrollImage src="/project/campus-eats.png" wrapperWidth="90%" speed={1} z={0} tag="Jan 2025" initialOffset={0} />}
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default CampusEatsNew;
