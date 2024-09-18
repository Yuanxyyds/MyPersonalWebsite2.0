import { Col, Container, Row } from "react-bootstrap";
import Particle from "../../components/common/Particle";
import React, { useState } from "react";
import campusEats1 from "../../assets/campusEats1.0.png";
import UTFT from "../../assets/utft.png";
import { BiCheck } from "react-icons/bi";
import ReactPlayer from "react-player";
import campusEats2 from "../../assets/campusEats2.0.jpeg";
import campusEatsLogo from "../../assets/campus-eats.jpg";
import {
    AiFillGithub,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function CampusEats() {
    const [activeTab, setActiveTab] = useState('campusEats2');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        window.location.hash = tab;
    };

    React.useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            handleTabChange(hash);
        }
    }, []);
    if (activeTab === 'campusEats2') {
        return (
            <Container fluid className="project-demo-section">
                <Particle />
                <Container>
                    <Row style={{ justifyContent: "center", padding: "10px" }}>
                        <Col xs={12} md={12} lg={7}>
                            <div className="project-heading">
                                Campus Eats Series Demo
                            </div>
                            <ul className="project-tab-section">
                                <li className="project-tab">
                                    <div
                                        onClick={() => handleTabChange('campusEats2')}
                                        className="project-tab-content"
                                        style={{ cursor: "pointer" }}
                                    >
                                        Campus Eats 2.0 <BiCheck />
                                    </div>
                                </li>
                                <li className="project-tab">
                                    <div
                                        onClick={() => handleTabChange('campusEats1')}
                                        className=" project-tab-content"
                                        style={{ cursor: "pointer" }}
                                    >
                                        Campus Eats 1.0
                                    </div>
                                </li>
                                <li className="project-tab">
                                    <div
                                        onClick={() => handleTabChange('utft')}
                                        className="project-tab-content"
                                        style={{ cursor: "pointer" }}
                                    >
                                        UofT FoodTruck Group Asoul
                                    </div>
                                </li>
                            </ul>

                            <p style={{ textAlign: "justify", paddingTop: 20 }}>
                                <strong className="primary-color">Update Mar 17 2024: </strong> {" "} We expect to launch in March 2024!
                            </p>

                            <h5 style={{ textAlign: "justify", paddingTop: 20 }}>
                                <strong> Specification </strong>
                            </h5>

                            <p style={{ textAlign: "justify", paddingTop: 20 }}>
                                Currently, it has come to our attention that there are a variety of food service options on our campus,
                                including the residence cafeteria, food trucks, and nearby restaurants. However, the vast majority of
                                these establishments solely offer in-person ordering, leading to inconveniently lengthy wait times
                                during peak times (e.g. UofT times).
                                <br />
                                <br />
                                In addition, we understand the challenges posed by high delivery and platform fees on the current online
                                ordering platforms. These fees can limit students’ access to nearby restaurant options while on campus.
                                We aim to mitigate this issue and provide a more affordable solution.
                                <br />
                                <br />
                                Consequently, we would like to develop a mobile app named CampusEats, allowing users to place orders online
                                with ease, browse food menus, provide diverse meal options/plans, and unlock exclusive discounts tailored
                                to students. Our mission is to provide a better dining solution for all campus members.
                            </p>

                            <h5 style={{ textAlign: "justify", paddingTop: 20 }}>
                                <strong> Updates from Version 1.0 </strong>
                            </h5>


                            <p style={{ textAlign: "justify", paddingTop: 20 }}>
                                Unfortunately, the repository for this Version 2.0 is set to private. However, feel
                                free also to checkout the repository for the
                                <a onClick={() => handleTabChange('campusEats1')}
                                    style={{ cursor: "pointer", textDecoration: "none" }}
                                    className="primary-color"> Version 1.0
                                </a> and the
                                <a onClick={() => handleTabChange('utft')}
                                    style={{ cursor: "pointer", textDecoration: "none" }}
                                    className="primary-color"> UofT Food Truck Project
                                </a>
                                <br />
                                <br />
                                In the second version, we have implemented a more modern UI design and incorporated
                                additional stateful widgets to enhance user interaction. The database and back-end
                                implementation have been redesigned to enable faster data querying. We now have all
                                the User-end, Restaurant-end, Driver-end, and a  
                                <a href="https://campuseats.ca"
                                    style={{ cursor: "pointer", textDecoration: "none" }}
                                    className="primary-color"> general-purpose website
                                </a>  implementation.
                                <br />
                            </p>

                        </Col>
                        <Col xs={12} md={12} lg={5}>
                            <Row>
                                <Col xs={12} md={6} lg={12} style={{ justifyContent: "center", paddingTop: 40 }}>
                                    <img
                                        src={campusEatsLogo}
                                        alt="Campus Eats"
                                        className="img-fluid"
                                        style={{ maxWidth: "300px" }}
                                    />
                                </Col>
                                <Col xs={12} md={6} lg={12} style={{ display: "flex", justifyContent: "center", paddingTop: 40 }}>
                                    <img
                                        src={campusEats2}
                                        alt="Campus Eats"
                                        className="img-fluid"
                                        style={{ maxWidth: "300px" }}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <div className="project-heading">
                        Hult Prize Pitch <strong className="primary-color">2024 </strong>
                    </div>
                    <Row style={{ justifyContent: "center", padding: "10px" }}>
                        <Col>
                            <ReactPlayer
                                style={{ marginTop: 20, }}
                                width="100%"
                                controls={true}
                                url='https://youtu.be/-iV_XxbnngA' />
                        </Col>
                    </Row>

                    <div className="project-heading">
                        Mobile App Video <strong className="primary-color">Demo </strong>
                    </div>

                    <Row style={{ justifyContent: "center", padding: "10px" }}>
                        <Col xs={12} md={6} lg={6}>
                            <ReactPlayer
                                style={{ marginTop: 20, }}
                                width="100%"
                                controls={true}
                                url='https://youtu.be/H6pUOCezsl0' />
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <ReactPlayer
                                style={{ marginTop: 20 }}
                                width="100%"
                                controls={true}
                                url='https://youtube.com/shorts/CC1eHGZ_yqc' />
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <ReactPlayer
                                style={{ marginTop: 20, }}
                                width="100%"
                                controls={true}
                                url='https://youtu.be/V3IKAUIMLG8' />
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <ReactPlayer
                                style={{ marginTop: 20 }}
                                width="100%"
                                controls={true}
                                url='https://youtu.be/yjI85SoDbig' />
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <ReactPlayer
                                style={{ marginTop: 20 }}
                                width="100%"
                                controls={true}
                                url='https://youtube.com/shorts/ztN4KI6UtE4' />
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <ReactPlayer
                                style={{ marginTop: 20, }}
                                width="100%"
                                controls={true}
                                url='https://youtu.be/C0ouf4YC8rA' />
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <ReactPlayer
                                style={{ marginTop: 20 }}
                                width="100%"
                                controls={true}
                                url='https://youtu.be/oQ6Wbr5k9yM' />
                        </Col>
                    </Row>

                    <div className="project-heading">
                        Follow <strong className="primary-color">Campus Eats </strong> on Social Media
                    </div>
                    <ul className="social_icon_list">
                        <div className="social-icons">
                            <a
                                href="https://github.com/CampusEatsUofT"
                                target="_blank"
                                rel="noreferrer"
                                className="home-social-icons"
                            >
                                <AiFillGithub />
                            </a>
                        </div>
                        <div className="social-icons">
                            <a
                                href="https://www.linkedin.com/company/100274536/"
                                target="_blank"
                                rel="noreferrer"
                                className="home-social-icons"
                            >
                                <FaLinkedinIn />
                            </a>
                        </div>
                        <div className="social-icons">
                            <a
                                href="https://www.instagram.com/campus_eats_uoft/"
                                target="_blank"
                                rel="noreferrer"
                                className="home-social-icons"
                            >
                                <AiFillInstagram />
                            </a>
                        </div>
                    </ul>


                </Container>
            </Container>
        );
    } else if (activeTab === 'campusEats1') {
        return (
            <Container fluid className="project-demo-section">
                <Particle />
                <Container>
                    <Row style={{ justifyContent: "center", padding: "10px" }}>
                        <Col>
                            <div className="project-heading">
                                Campus Eats Series Demo
                            </div>
                            <ul className="project-tab-section">
                                <li className="project-tab">
                                    <div
                                        onClick={() => handleTabChange('campusEats2')}
                                        className=" project-tab-content"
                                        style={{ cursor: "pointer" }}
                                    >
                                        Campus Eats 2.0
                                    </div>
                                </li>
                                <li className="project-tab">
                                    <div
                                        onClick={() => handleTabChange('campusEats1')}
                                        className="  project-tab-content"
                                        style={{ cursor: "pointer" }}
                                    >
                                        Campus Eats 1.0 <BiCheck />
                                    </div>
                                </li>
                                <li className="project-tab">
                                    <div
                                        onClick={() => handleTabChange('utft')}
                                        className=" project-tab-content"
                                        style={{ cursor: "pointer" }}
                                    >
                                        UofT FoodTruck Group Asoul
                                    </div>
                                </li>
                            </ul>
                            <p style={{ textAlign: "justify", paddingTop: 20 }}>
                                As an extension to the UofT FoodTruck Project. We have formed a new development team,
                                continued this project's development and made significant enhancements. The project is
                                hosted on GitHub, with separate repositories for the user-end code
                                <a href={"https://github.com/Yuanxyyds/FoodTruckMobile"}
                                    style={{ cursor: "pointer", textDecoration: "none" }}
                                    className="primary-color"> here </a>
                                and the seller code
                                <a href={"https://github.com/Yuanxyyds/FoodTruckSeller"}
                                    style={{ cursor: "pointer", textDecoration: "none" }}
                                    className="primary-color"> here</a>
                                <br />
                                <br />
                                This Project was developed with Flutter and Firebase backend, this project expanded my
                                expertise in Kotlin/Swift, Android Gradle building, iOS building with Xcode.
                                Additionally, I
                                gained proficiency in Figma UI design, utilized public Flutter packages, and explored
                                the Google Cloud platform for API integration.
                                <br />
                                <br />
                                For user-end functionality, it includes features such as account creation, account
                                editing
                                (image uploading, address autocomplete), viewing restaurant, shopping cart managing, and
                                seamless integration with the backend for communication with the seller-end.
                                <br />
                                <br />
                                For the seller-end functionality, it includes additional features such as restaurant
                                creation, food item creation, and backend for communication with the user-end.
                                <br />
                                <br />
                                To further enhance functionality and improve the user interface, <strong
                                    className="primary-color">
                                    development for this version has been halted.</strong> The latest and updated version
                                can be
                                accessed at the here. Here, you can explore the newest version of the CampusEats project
                                with improved features and a
                                refined user experience.
                            </p>
                        </Col>
                        <Col md={5} style={{ paddingBottom: 20, textAlign: "center" }}>
                            <img
                                src={campusEats1}
                                alt="Campus Eats Version 1.0"
                                className="img-fluid"
                                style={{ maxHeight: "700px" }}
                            />
                        </Col>

                    </Row>
                    <Row style={{ justifyContent: "center", padding: "10px" }}>
                        <div className="project-heading">
                            Video <strong className="primary-color">Demo </strong>
                        </div>
                        <ReactPlayer style={{ marginTop: 20 }} url='https://www.youtube.com/watch?v=0pP6WPmZV9M' />
                    </Row>


                </Container>
            </Container>
        );
    } else if (activeTab === 'utft') {
        return (
            <Container fluid className="project-demo-section">
                <Particle />
                <Container>
                    <Row style={{ justifyContent: "center", padding: "10px" }}>
                        <Col>
                            <div className="project-heading">
                                Campus Eats Series Demo
                            </div>
                            <ul className="project-tab-section">
                                <li className="project-tab">
                                    <div
                                        onClick={() => handleTabChange('campusEats2')}
                                        className=" project-tab-content"
                                        style={{ cursor: "pointer" }}
                                    >
                                        Campus Eats 2.0
                                    </div>
                                </li>
                                <li className="project-tab">
                                    <div
                                        onClick={() => handleTabChange('campusEats1')}
                                        className="  project-tab-content"
                                        style={{ cursor: "pointer" }}
                                    >
                                        Campus Eats 1.0
                                    </div>
                                </li>
                                <li className="project-tab">
                                    <div
                                        onClick={() => handleTabChange('utft')}
                                        className=" project-tab-content"
                                        style={{ cursor: "pointer" }}
                                    >
                                        UofT FoodTruck Group Asoul <BiCheck />
                                    </div>
                                </li>
                            </ul>
                            <p style={{ textAlign: "justify", paddingTop: 20 }}>
                                This project was developed by Group Asoul as the final project for CSC207. The project
                                is hosted on GitHub, and you can access the source code through
                                <a href={"https://github.com/Yuanxyyds/UofT-FoodTruck-GroupAsoul"}
                                    style={{ cursor: "pointer", textDecoration: "none" }}
                                    className="primary-color"> this link </a>
                                . It serves
                                as the initial version of the CampusEats series.
                                <br />
                                <br />
                                We have developed a FoodTruck ordering program with two main components: the Java
                                backend and the Java/Android frontend. The backend handles user registration, login
                                system, rating system, market sorting, serialization, and various functionalities like
                                managing food trucks and orders. Users can act as both buyers and sellers, and they can
                                edit their food trucks.
                                <br />
                                <br />
                                For the frontend, we have implemented a fully-functional command-line interface that can
                                be accessed in Intellij. It includes a help function to display available commands.
                                Additionally, we have partially implemented an Android app, which can perform most of
                                the command-line functions except dynamically viewing the market, order history, and
                                placing orders.
                            </p>
                        </Col>
                        <Col md={5} style={{ paddingBottom: 20, textAlign: "center" }}>
                            <img
                                src={UTFT}
                                alt="UofT Food Truck App"
                                className="img-fluid"
                                style={{ maxHeight: "550px" }}
                            />
                        </Col>

                    </Row>
                    <Row style={{ justifyContent: "center", padding: "10px" }}>
                        <div className="project-heading">
                            Command Line Interface <strong className="primary-color">Demo </strong>
                        </div>
                        <ReactPlayer style={{ marginTop: 20 }} url='https://www.youtube.com/watch?v=J3kfU4Ic8Uc' />
                    </Row>
                    <Row style={{ justifyContent: "center", padding: "10px" }}>
                        <div className="project-heading">
                            Android App <strong className="primary-color">Demo </strong>
                        </div>
                        <ReactPlayer style={{ marginTop: 20 }} url='https://www.youtube.com/watch?v=RT-l98ZasE4' />
                    </Row>


                </Container>
            </Container>
        );
    }
}

export default CampusEats;

