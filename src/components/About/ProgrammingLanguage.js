import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import {
    DiJavascript1,
    DiPython,
    DiJava, DiDart, DiSwift,
} from "react-icons/di";
import {
    SiMysql, SiTypescript, SiKotlin,
} from "react-icons/si";
import {FaRProject} from "react-icons/fa";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";

function ProgrammingLanguage() {
    const [hoverStates, setHoverStates] = useState(Array(10).fill(false));
    const handleMouseEnter = (index) => {
        setHoverStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index] = true;
            return newStates;
        });
    };

    const handleMouseLeave = (index) => {
        setHoverStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index] = false;
            return newStates;
        });
    };
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter(0)}
                 onMouseLeave={() => handleMouseLeave(0)}>
                {!hoverStates[0] && (<DiJava style={{fontSize: "5em"}}/>)}
                {hoverStates[0] && (<div><p> Java</p>  <YellowStars number={5}/></div>)}
            </Col>
            <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter(1)}
                 onMouseLeave={() => handleMouseLeave(1)}>
                {!hoverStates[1] && (<DiPython style={{fontSize: "5em"}}/>)}
                {hoverStates[1] && (<div><p> Python</p> <YellowStars number={5}/></div>)}
            </Col>
            <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter(2)}
                 onMouseLeave={() => handleMouseLeave(2)}>
                {!hoverStates[2] && (<DiDart style={{fontSize: "5em"}}/>)}
                {hoverStates[2] && (<div><p> Dart</p> <YellowStars number={6}/></div>)}
            </Col>
            <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter(3)}
                 onMouseLeave={() => handleMouseLeave(3)}>
                {!hoverStates[3] && (<SiMysql style={{fontSize: "5em"}}/>)}
                {hoverStates[3] && (<div><p> SQL </p><YellowStars number={5}/></div>)}
            </Col>
            <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter(4)}
                 onMouseLeave={() => handleMouseLeave(4)}>
                {!hoverStates[4] && (<div style={{fontSize: "3em"}}> C </div>)}
                {hoverStates[4] && (<div><p> C Language</p> <YellowStars number={4}/></div>)}
            </Col>
            <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter(5)}
                 onMouseLeave={() => handleMouseLeave(5)}>
                {!hoverStates[5] && (<DiJavascript1 style={{fontSize: "5em"}}/>)}
                {hoverStates[5] && (<div><p> Javascript</p> <YellowStars number={5}/></div>)}
            </Col>
            <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter(6)}
                 onMouseLeave={() => handleMouseLeave(6)}>
                {!hoverStates[6] && (<SiTypescript style={{fontSize: "5em"}}/>)}
                {hoverStates[6] && (<div><p> TypeScript</p> <YellowStars number={5}/></div>)}
            </Col>
            <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter(7)}
                 onMouseLeave={() => handleMouseLeave(7)}>
                {!hoverStates[7] && (<SiKotlin style={{fontSize: "5em"}}/>)}
                {hoverStates[7] && (<div><p> Kotlin </p><YellowStars number={3}/></div>)}
            </Col>
            <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter(8)}
                 onMouseLeave={() => handleMouseLeave(8)}>
                {!hoverStates[8] && (<DiSwift style={{fontSize: "5em"}}/>)}
                {hoverStates[8] && (<div><p> Swift </p> <YellowStars number={3}/></div>)}
            </Col>
            <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter(9)}
                 onMouseLeave={() => handleMouseLeave(9)}>
                {!hoverStates[9] && (<FaRProject style={{fontSize: "5em"}}/>)}
                {hoverStates[9] && (<div><p> R Language</p><YellowStars number={6}/></div>)}
            </Col>
        </Row>
    );
}

export default ProgrammingLanguage;

const YellowStars = ({number}) => {
    const stars = getYellowStars({number});

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            {stars.map((star, index) => (
                star
            ))}
        </div>
    );
};

function getYellowStars({number}) {
    if (number < 0 || number > 6) {
        throw new Error('Invalid input. Number must be between 0 and 6.');
    }

    const yellowStar = <AiFillStar style={{color: "yellow", paddingRight: "2px"}}/>;
    const emptyStar = <AiOutlineStar style={{paddingRight: "2px"}}/>;

    const stars = [];


    for (let i = 0; i < number; i++) {
        stars.push(yellowStar);
    }
    const remainingStars = 6 - stars.length;

    for (let i = 0; i < remainingStars; i++) {
        stars.push(emptyStar);
    }

    return stars;
}
