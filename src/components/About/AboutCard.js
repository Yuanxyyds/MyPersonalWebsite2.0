import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue">Steven Liu </span>
            from <span className="blue"> Toronto, Canada.</span>
            <br />I am currently working as Cloud and Mobile App Developer at Johnson Controls, and serving as
            President of University of Toronto Tutoring Club.
            <br />
            <br />
            Apart from that, some other activities that I am currently working on!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Small Software Business - Campus Eats
            </li>
            <li className="about-activity">
              <ImPointRight /> Project Teams Leader
            </li>
            <li className="about-activity">
              <ImPointRight /> Play Games (used to)
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
