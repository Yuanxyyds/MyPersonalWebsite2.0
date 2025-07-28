import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useIsVerticalLayout } from "../../components/effects/IsVertical";
import { Framework, Language, Topics, Tool } from "../../components/home/StackCard";
import "./../../style/project/project.css"
import { useEffect } from "react";
import FeaturedProjectCard from "../../components/project/FeaturedProjectCard";

function Project() {
    const isVertical = useIsVerticalLayout();
    const navigate = useNavigate();

    useEffect(() => {
        const elements = [
            { headerId: 'project', lineId: 'project-line' },
            { headerId: 'skill', lineId: 'skill-line' },
            // Add more pairs as needed
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
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section>
            {isVertical ?
                <Container fluid className="project-vertical-section">
                    <Container fluid id="landing" style={{ paddingTop: '20vh', paddingLeft: '5vw', paddingRight: '5vw' }}>
                        <Row>
                            <Col lg={11} xl={8}>
                                <h1 className="thin with-line fade-in mb-0 delay-in delay-0">
                                    EXPLORE MY
                                </h1>
                                <h1 className="fade-in mb-2 delay-in delay-1 primary-color">
                                    WORKS & SKILLS
                                </h1>
                                <h5 className="fade-in mb-4 delay-in delay-2 bold">
                                    A curated collection of what I’ve designed, built, and deployed — from backend systems to interactive UIs.
                                </h5>
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid className="project-video-wrapper delay-in delay-3">
                        <video src="/project/project.mp4" style={{ width: '100%' }} autoPlay muted loop playsInline />
                    </Container>
                    <Container fluid id="landing" style={{ paddingTop: '16px', paddingLeft: '5vw', paddingRight: '5vw' }}>
                        <Row>
                            <h4 className="fade-in delay-in delay-3" style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                                Let's Go
                            </h4>
                        </Row>
                    </Container>
                </Container>
                :
                <Container fluid className="project-horizontal-section">
                    <video className="project-bg-desktop" src="/project/project.mp4" autoPlay muted loop playsInline />
                    <Container fluid id="landing" className="one-column-content-padding">
                        <Row>
                            <Col xs={11} md={8} lg={7} xl={6}>
                                <h1 className="with-line fade-in mb-0 delay-in delay-0">
                                    EXPLORE MY
                                </h1>
                                <h2 className="fade-in mb-2 delay-in delay-1 primary-color" style={{ fontWeight: '700' }}>
                                    WORKS & SKILLS
                                </h2>
                                <p className="fade-in mb-0 delay-in delay-2 bold">
                                    A curated collection of what I’ve designed, built, and deployed — from backend systems to interactive UIs.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            }

            <Container fluid className={`two-column-content-padding ${isVertical ? "pt-0" : ""}`} style={{ color: 'white' }} id="project">
                <Container fluid className="m-0 p-0">
                    <div className="text-with-animated-underline mb-4">
                        <h2 id="project" className="fade-in mb-0">MY WORKS</h2>
                        <div id="project-line" className="animated-underline"></div>
                    </div>
                    <Row>
                        <Col xs={12} sm={10} md={10} lg={10} xl={6} xxl={6} className="fade-in project-card">
                            <FeaturedProjectCard
                                imageSrc="/project/campus-eats-cover.jpg"
                                logoSrc="/project/campus-eats-logo-transparent.png"
                                title="Campus Eats"
                                description="To tackle challenges in campus dining, our startup team developed an all-encompassing mobile app for campus food service. This app serves students, restaurants, and drivers, aiming to improve the campus food service ecosystem. It was built with Flutter and a Firebase backend."
                                shortDescription="Our startup team built a mobile app to streamline campus dining for students, restaurants, and drivers using Flutter and Firebase."
                                githubLink="https://github.com/CampusEatsUofT"
                                tags={['Mobile App', 'Website', 'Business/Startup', 'UI/UX Design',]}
                                onDetailClick={() => {
                                    navigate('/campusEats');
                                }}
                            />
                        </Col>

                        <Col xs={12} sm={10} md={10} lg={10} xl={6} xxl={6} className="fade-in project-card">

                            <FeaturedProjectCard
                                imageSrc="/project/steven-ai-cover.jpg"
                                logoSrc="/project/stevenai.webp"
                                title="Steven AI"
                                description="Steven AI is a personalized chatbot designed to answer any questions about me. It was built by fine-tuning the LLaMA 3.2 model (3 billion parameters) on over 1,000 Q&A pairs covering my background and experiences. To optimize training in my home lab, I used a LoRA adapter for parameter-efficient fine-tuning and RAG to enhance accuracy and response relevance."
                                shortDescription="Steven AI is a personalized chatbot fine-tuned on 1,000+ Q&A pairs about me using LLaMA 3.2 and LoRA. It runs in my home lab and uses RAG to improve accuracy and relevance."
                                githubLink="https://github.com/Yuanxyyds/machine-learning/tree/main/llama3.2"
                                tags={['Machine Learning', 'LLM Finetuning', 'RAG']}
                                onDetailClick={() => {
                                    navigate('/stevenAi');
                                }}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} sm={10} md={10} lg={6} xl={5} xxl={4} className="fade-in project-card">
                            <FeaturedProjectCard
                                imageSrc="/project/portfolio-cover.jpg"
                                title="Portfolio Website"
                                description="My portfolio website is built with a React frontend and a Django backend, self-hosted on a Proxmox server. It showcases my projects, design work, and passion for building visually engaging, innovative products."
                                shortDescription="My portfolio website, built with React and Django and self-hosted on Proxmox, showcases my projects, designs, and passion for creating visually engaging products."
                                githubLink="https://github.com/Yuanxyyds/MyPersonalWebsite2.0"
                                tags={['React', 'Django', 'UI/UX Design',]}
                            />
                        </Col>

                        <Col xs={12} sm={10} md={10} lg={6} xl={5} xxl={4} className="fade-in project-card">
                            <FeaturedProjectCard
                                imageSrc="/project/server-room-cover.jpg"
                                title="3D Server Room"
                                description="A 3D-rendered server room built with Blender and Three.js, providing an interactive visualization of my setup. Explore my background and hardware by interacting with monitors, a TV, and other elements."
                                shortDescription="A 3D server room built with Blender and Three.js, showcasing my setup and hardware through interactive elements."
                                tags={['3D Modeling', 'Blender', 'Three.js',]}
                                detailText="Visit"
                                onDetailClick={() => {
                                    navigate('/server');
                                }}
                            />
                        </Col>
                        <Col xs={12} sm={10} md={10} lg={6} xl={5} xxl={4} className="fade-in project-card">
                            <FeaturedProjectCard
                                imageSrc="/project/food-101-cover.jpg"
                                title="Food-101 Classification"
                                description="This project develops a deep learning model to classify food images using the Food-101 dataset. It covers data processing, model training, transfer learning, and hyperparameter tuning, comparing VGG, Inception, and ResNet against a baseline to build an efficient, accurate classifier."
                                shortDescription="Built a food image classifier using Food-101, comparing VGG, Inception, and ResNet with a baseline through transfer learning and tuning for optimal accuracy."
                                githubLink="https://github.com/Yuanxyyds/machine-learning/tree/main/food-101"
                                tags={['Deep Learning', 'CNN']}
                                onDetailClick={() => {
                                    navigate('/foodImageClassify');
                                }}
                            />
                        </Col>
                        <Col xs={12} sm={10} md={10} lg={6} xl={5} xxl={4} className="fade-in project-card">
                            <FeaturedProjectCard
                                imageSrc="/project/lockin-cover.jpg"
                                title="LockIn IOS"
                                description="LockIn is an iOS app that helps users reduce screen time by blocking distracting apps, starting focus sessions, and earning coins for staying offline. Users can redeem real-life rewards like food and clothing. Built with Flutter, Swift, and Firebase."
                                shortDescription="LockIn helps users block apps, stay focused, and earn real-life rewards. Built with Flutter and Firebase, it promotes digital wellness through focus sessions, screen time limits."
                                githubLink="https://justlockin.com/"
                                detailText="App Store"
                                tags={['Mobile App', 'Flutter', 'Website']}
                                onDetailClick={() => {
                                    window.open("https://apps.apple.com/us/app/lock-in-focus-app-blocker/id6472232979");
                                }}
                            />
                        </Col>
                        <Col xs={12} sm={10} md={10} lg={6} xl={5} xxl={4} className="fade-in project-card">
                            <FeaturedProjectCard
                                imageSrc="/project/mentor-ai-cover.jpg"
                                title="Mentor AI"
                                description="MentorAI is a research project that uses YouTube links and user data to generate personalized mentorship advice. It guides researchers using LLMs and NLP on transcripts from mentorship-related videos."
                                shortDescription="MentorAI generates personalized mentorship advice from YouTube videos and user data, helping aspiring researchers find mentors, review literature, and prepare for PhD applications."
                                detailText="Demo"
                                tags={['Machine Learning', 'RAG', 'Research']}
                                onDetailClick={() => {
                                    navigate('/mentorAi');
                                }}
                            />
                        </Col>
                        <Col xs={12} sm={10} md={10} lg={6} xl={5} xxl={4} className="fade-in project-card">
                            <FeaturedProjectCard
                                imageSrc="/project/dtc-cover.jpg"
                                title="JCI DTC Community"
                                description="Community is a mobile app by Johnson Controls for home security and cloud device management. I contributed to both front-end and back-end development using Flutter and Firebase, supporting real-time features and secure device interactions."
                                shortDescription="Community is a mobile app by Johnson Controls for home security and cloud device management. Worked on front-end and back-end development using Flutter and Firebase."
                                tags={['Flutter', 'Home Assistant', 'GCP']}
                            />
                        </Col>
                        <Col xs={12} sm={10} md={10} lg={6} xl={5} xxl={4} className="fade-in project-card">
                            <FeaturedProjectCard
                                imageSrc="/project/fdl-cover.jpg"
                                title="Accelerated DBMS"
                                description="As Dennard scaling ends and Moore's law slows, enhancing general-purpose processor performance becomes harder. This research explores optimizing data management systems with cloud hardware accelerators to boost data task efficiency and reduce costs at scale."
                                shortDescription="This research explores optimizing data management systems with cloud hardware accelerators to boost data task efficiency and reduce costs at scale."
                                tags={['GPU/FPGA', 'Research']}
                                detailText="Website"
                                onDetailClick={() => {
                                    window.open("https://fardatalab.org/research.html");
                                }}
                            />
                        </Col>
                        <Col xs={12} sm={10} md={10} lg={6} xl={5} xxl={4} className="fade-in project-card">
                            <FeaturedProjectCard
                                imageSrc="/project/great-lake-cover.jpg"
                                title="Great Lakes Pollution"
                                description="This project explores Great Lakes water quality with a focus on phosphorus levels. It uses data from the Canadian Open Data Portal and city web scraping, featuring visualizations like time series plots, boxplots, and interactive maps."
                                shortDescription="Analyzed Great Lakes water quality using public and scraped data, focusing on phosphorus levels. Visualized trends through time series plots, boxplots, and interactive maps."
                                githubLink="https://github.com/Yuanxyyds/Analyzing-Great-Lakes-Polution"
                                detailText="Visit"
                                tags={['Data Science', 'Data Wrangling']}
                                onDetailClick={() => {
                                    window.open("https://yuanxyyds.github.io/Analyzing-Great-Lakes-Polution/");
                                }}
                            />
                        </Col>
                        <Col xs={12} sm={10} md={10} lg={6} xl={5} xxl={4} className="fade-in project-card">
                            <FeaturedProjectCard
                                imageSrc="/project/land-sink-cover.jpg"
                                title="LandSink Estimate"
                                description="For our CSC110 Final Project, we trained a Python model to estimate temperature and land sink percentages by year. I extended the project by developing a Django backend hosted on AWS, enabling interactive web access and user engagement."
                                shortDescription="Built a Python model to estimate climate data, then added a Django backend hosted on AWS to enable web-based user interaction for the CSC110 final project."
                                tags={['Regression', 'Django', 'AWS']}
                                onDetailClick={() => {
                                    navigate('/landSink');
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="two-column-content-padding mb-5" style={{ color: 'white' }}>
                <div className="text-with-animated-underline">
                    <h2 id="skill" className="fade-in mb-0">SKILLS</h2>
                    <div id="skill-line" className="animated-underline"></div>
                </div>

                <Container fluid className="p-0 pt-4">
                    <h3 className="fade-in">
                        Programming Language <strong className="primary-color">Skill </strong>
                    </h3>
                    <Language className="fade-in text-center" />
                </Container>
                <Container fluid className="p-0 pt-4">
                    <h3 className="fade-in">
                        Framework and System <strong className="primary-color">Skill </strong>
                    </h3>
                    <Framework className="fade-in text-center" />
                </Container>
                <Container fluid className="p-0 pt-4">
                    <h3 className="fade-in">
                        Service and Tool <strong className="primary-color">Skill </strong>
                    </h3>
                    <Tool className="fade-in text-center" />
                </Container>
                <Container fluid className="p-0 pt-4">
                    <h3 className="fade-in">
                        Learning <strong className="primary-color">Topics </strong>
                    </h3>
                    <Topics className="fade-in text-center" />
                </Container>
            </Container>
        </section>
    );
}

export default Project;
