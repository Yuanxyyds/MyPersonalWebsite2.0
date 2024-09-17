import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../components/common/Particle";
import Github from "../../components/about/Github";
import Language from "../../components/about/Language";
import Framework from "../../components/about/Framework";
import Tool from "../../components/about/Tool";
import Aboutcard from "../../components/about/AboutCard";
import Technical from "../../components/about/Technical";
import laptopImg from "../../assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="blue">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <Github />

        <h1 className="project-heading">
          Programming Language <strong className="blue">Skill </strong>
        </h1>

        <Language />

        <h1 className="project-heading">
          Framework <strong className="blue">Skill </strong>
        </h1>
        <Framework />

        <h1 className="project-heading">
          Service and Tool <strong className="blue">Skill </strong>
        </h1>
        <Tool />

        <h1 className="project-heading">
          Technical <strong className="blue">Skill </strong>
        </h1>
        <Technical />

      </Container>
    </Container>
  );
}

export default About;
