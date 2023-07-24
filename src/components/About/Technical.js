import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import {FaChartBar,} from "react-icons/fa";
import {AiFillStar, AiOutlineRobot, AiOutlineStar} from "react-icons/ai";

function Technical() {
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
                {!hoverStates[0] && (<div style={{fontSize: "3em"}}> ML </div>)}
                {hoverStates[0] && (<div><p> Machine Learning</p>  <YellowStars number={5}/></div>)}
            </Col>
            <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter(1)}
                 onMouseLeave={() => handleMouseLeave(1)}>
                {!hoverStates[1] && (<div style={{fontSize: "3em"}}> NLP </div>)}
                {hoverStates[1] && (<div><p> Natural Language Processing</p> <YellowStars number={4}/></div>)}
            </Col>
            <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter(2)}
                 onMouseLeave={() => handleMouseLeave(2)}>
                {!hoverStates[2] && (<AiOutlineRobot style={{fontSize: "5em"}}/>)}
                {hoverStates[2] && (<div><p> Artificial Intelligence</p> <YellowStars number={4}/></div>)}
            </Col>
            <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter(3)}
                 onMouseLeave={() => handleMouseLeave(3)}>

                {!hoverStates[3] && (<FaChartBar style={{fontSize: "5em"}}/>)}
                {hoverStates[3] && (<div><p> Data Visualization </p><YellowStars number={5}/></div>)}
            </Col>
            <Col xs={4} md={2} className="tech-icons" onMouseEnter={() => handleMouseEnter(4)}
                 onMouseLeave={() => handleMouseLeave(4)}>
                {!hoverStates[4] && (<div style={{fontSize: "3em"}}> CV </div>)}
                {hoverStates[4] && (<div><p> Computer Vision</p> <YellowStars number={4}/></div>)}
            </Col>

        </Row>
    );
}

export default Technical;

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
