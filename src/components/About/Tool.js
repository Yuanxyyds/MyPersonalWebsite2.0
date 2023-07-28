import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import { DiBootstrap,
} from "react-icons/di";
import {
    SiTailwindcss, SiPandas, SiNumpy, SiGooglecloud, SiFirebase,
} from "react-icons/si";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {FaAws, FaFigma} from "react-icons/fa";

function Tool() {
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
            <Col xs={3} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter(0)}
                 onMouseLeave={() => handleMouseLeave(0)}>
                {!hoverStates[0] && (<SiFirebase style={{fontSize: "5em"}}/>)}
                {hoverStates[0] && (<div><p> Firebase</p>  <YellowStars number={6}/></div>)}
            </Col>
            <Col xs={3} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter(1)}
                 onMouseLeave={() => handleMouseLeave(1)}>
                {!hoverStates[1] && (<SiGooglecloud style={{fontSize: "5em"}}/>)}
                {hoverStates[1] && (<div><p> GoogleCloudPlatform</p> <YellowStars number={5}/></div>)}
            </Col>
            <Col xs={3} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter(2)}
                 onMouseLeave={() => handleMouseLeave(2)}>
                {!hoverStates[2] && (<FaAws style={{fontSize: "5em"}}/>)}
                {hoverStates[2] && (<div><p> AWS</p> <YellowStars number={3}/></div>)}
            </Col>
            <Col xs={3} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter(3)}
                 onMouseLeave={() => handleMouseLeave(3)}>
                {!hoverStates[3] && (<SiTailwindcss style={{fontSize: "5em"}}/>)}
                {hoverStates[3] && (<div><p> Tailwind Css </p><YellowStars number={5}/></div>)}
            </Col>
            <Col xs={3} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter(4)}
                 onMouseLeave={() => handleMouseLeave(4)}>
                {!hoverStates[4] && (<SiPandas style={{fontSize: "5em"}}/>)}
                {hoverStates[4] && (<div><p> Pandas</p> <YellowStars number={4}/></div>)}
            </Col>
            <Col xs={3} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter(5)}
                 onMouseLeave={() => handleMouseLeave(5)}>
                {!hoverStates[5] && (<SiNumpy style={{fontSize: "5em"}}/>)}
                {hoverStates[5] && (<div><p> Numpy</p> <YellowStars number={5}/></div>)}
            </Col>
            <Col xs={3} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter(6)}
                 onMouseLeave={() => handleMouseLeave(6)}>
                {!hoverStates[6] && (<DiBootstrap style={{fontSize: "5em"}}/>)}
                {hoverStates[6] && (<div><p> Bootstrap</p> <YellowStars number={4}/></div>)}
            </Col>
            <Col xs={3} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter(7)}
                 onMouseLeave={() => handleMouseLeave(7)}>
                {!hoverStates[7] && (<FaFigma style={{fontSize: "5em"}}/>)}
                {hoverStates[7] && (<div><p> Figma</p> <YellowStars number={4}/></div>)}
            </Col>
        </Row>
    );
}

export default Tool;

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
