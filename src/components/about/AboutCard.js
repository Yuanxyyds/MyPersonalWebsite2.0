import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="primary-color">Steven Liu </span>
            from <span className="primary-color"> Toronto, Canada.</span>
            <br />I am currently working as Cloud and Mobile App Developer at Johnson Controls, and serving as
            the Founder of the Campus Eats.
            <br />
            <br />
            Apart from that, some other activities that I am currently working on!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Software Business Startups - Campus Eats, aSocial
            </li>
            <li className="about-activity">
              <ImPointRight /> Sports - Soccer, Hockey, Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Research - FarDataLab at UofT
            </li>
            <li className="about-activity">
              <ImPointRight /> Play Games
            </li>
          </ul>

          <p style={{ color: "#3b57c9" }}>
            "Work hard, be kind, and amazing things will happen."{" "}
          </p>
          <footer className="blockquote-footer">Conan O’Brien</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
