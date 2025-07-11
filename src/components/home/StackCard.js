import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import {
    DiPython,
    DiJava, DiDart, DiSwift, DiReact, DiHtml5, DiCss3, DiDjango, DiBootstrap,
} from "react-icons/di";
import {TbBrandKotlin, TbSql} from "react-icons/tb";
import {
    SiNextdotjs,
    SiFirebase,
    SiGooglecloud,
    SiTailwindcss,
    SiPandas,
    SiNumpy, SiTensorflow, SiPytorch, SiProxmox,
} from "react-icons/si";
import {FaAws, FaChartBar, FaCloudflare, FaDocker, FaFigma, FaGithub, FaLinux, FaRProject} from "react-icons/fa";
import {AiFillStar, AiOutlineRobot, AiOutlineStar} from "react-icons/ai";
import {RiJavascriptFill} from "react-icons/ri";
import {BiLogoCPlusPlus, BiLogoTypescript, BiLogoFlutter, BiLogoNodejs} from "react-icons/bi";
import {FaDebian} from "react-icons/fa6";
import {GrSystem} from "react-icons/gr";

export function Language({className}) {
    const [hoverIndex, setHoverIndex] = useState(-1);

    const handleMouseEnter = (index) => {
        setHoverIndex(index);
    };

    const handleMouseLeave = (_) => {
        setHoverIndex(-1);
    };

    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(0)}
                     onMouseLeave={() => handleMouseLeave(0)}>
                    {hoverIndex !== 0 && (<DiJava style={{fontSize: "5em"}}/>)}
                    {hoverIndex === 0 && (<div><p> Java</p>  <YellowStars number={4}/></div>)} </div>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(1)}
                     onMouseLeave={() => handleMouseLeave(1)}>
                    {hoverIndex !== 1 && (<DiPython style={{fontSize: "5em"}}/>)}
                    {hoverIndex === 1 && (<div><p> Python</p> <YellowStars number={6}/></div>)} </div>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(2)}
                     onMouseLeave={() => handleMouseLeave(2)}>
                    {hoverIndex !== 2 && (<DiDart style={{fontSize: "5em"}}/>)}
                    {hoverIndex === 2 && (<div><p> Dart</p> <YellowStars number={6}/></div>)} </div>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(3)}
                     onMouseLeave={() => handleMouseLeave(3)}>
                    {hoverIndex !== 3 && (<TbSql style={{fontSize: "5em"}}/>)}
                    {hoverIndex === 3 && (<div><p> SQL </p><YellowStars number={5}/></div>)} </div>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(4)}
                     onMouseLeave={() => handleMouseLeave(4)}>
                    {hoverIndex !== 4 && (<BiLogoCPlusPlus style={{fontSize: "5em"}}/>)}
                    {hoverIndex === 4 && (<div><p> C Language</p> <YellowStars number={4}/></div>)} </div>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(5)}
                     onMouseLeave={() => handleMouseLeave(5)}>
                    {hoverIndex !== 5 && (<RiJavascriptFill style={{fontSize: "5em"}}/>)}
                    {hoverIndex === 5 && (<div><p> Javascript</p> <YellowStars number={6}/></div>)} </div>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(6)}
                     onMouseLeave={() => handleMouseLeave(6)}>
                    {hoverIndex !== 6 && (<BiLogoTypescript style={{fontSize: "5em"}}/>)}
                    {hoverIndex === 6 && (<div><p> TypeScript</p> <YellowStars number={6}/></div>)} </div>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(7)}
                     onMouseLeave={() => handleMouseLeave(7)}>
                    {hoverIndex !== 7 && (<TbBrandKotlin style={{fontSize: "5em"}}/>)}
                    {hoverIndex === 7 && (<div><p> Kotlin </p><YellowStars number={3}/></div>)} </div>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(8)}
                     onMouseLeave={() => handleMouseLeave(8)}>
                    {hoverIndex !== 8 && (<DiSwift style={{fontSize: "5em"}}/>)}
                    {hoverIndex === 8 && (<div><p> Swift </p> <YellowStars number={3}/></div>)} </div>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(9)}
                     onMouseLeave={() => handleMouseLeave(9)}>
                    {hoverIndex !== 9 && (<FaRProject style={{fontSize: "5em"}}/>)}
                    {hoverIndex === 9 && (<div><p> R Language</p><YellowStars number={4}/></div>)} </div>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(10)}
                     onMouseLeave={() => handleMouseLeave(3)}>
                    {hoverIndex !== 10 && (<DiHtml5 style={{fontSize: "5em"}}/>)}
                    {hoverIndex === 10 && (<div><p> HTML </p><YellowStars number={5}/></div>)} </div>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(11)}
                     onMouseLeave={() => handleMouseLeave(4)}>
                    {hoverIndex !== 11 && (<DiCss3 style={{fontSize: "5em"}}/>)}
                    {hoverIndex === 11 && (<div><p> CSS</p> <YellowStars number={5}/></div>)} </div>
            </Col>
        </Row>
    );
}

export function Framework({className}) {
    const [hoverIndex, setHoverIndex] = useState(-1);

    const handleMouseEnter = (index) => {
        setHoverIndex(index);
    };

    const handleMouseLeave = (_) => {
        setHoverIndex(-1);
    };
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(0)}
                     onMouseLeave={() => handleMouseLeave(0)}>
                    {hoverIndex !== 0 && (<BiLogoFlutter style={{fontSize: "5em"}}/>)}
                    {hoverIndex === 0 && (<div><p> Flutter</p>  <YellowStars number={6}/></div>)} </div>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(1)}
                     onMouseLeave={() => handleMouseLeave(1)}>
                    {hoverIndex !== 1 && (<DiReact style={{fontSize: "5em"}}/>)}
                    {hoverIndex === 1 && (<div><p> React</p> <YellowStars number={6}/></div>)} </div>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(2)}
                     onMouseLeave={() => handleMouseLeave(2)}>
                    {hoverIndex !== 2 && (<SiNextdotjs style={{fontSize: "5em"}}/>)}
                    {hoverIndex === 2 && (<div><p> NextJs</p> <YellowStars number={6}/></div>)} </div>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(3)}
                     onMouseLeave={() => handleMouseLeave(2)}>
                    {hoverIndex !== 3 && (<BiLogoNodejs style={{fontSize: "5em"}}/>)}
                    {hoverIndex === 3 && (<div><p> NodeJs</p> <YellowStars number={6}/></div>)} </div>
            </Col>

            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(4)}
                     onMouseLeave={() => handleMouseLeave(2)}>
                    {hoverIndex !== 4 && (<SiTensorflow style={{fontSize: "5em"}}/>)}
                    {hoverIndex === 4 && (<div><p> TensorFlow</p> <YellowStars number={5}/></div>)} </div>
            </Col>


            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(5)}
                     onMouseLeave={() => handleMouseLeave(5)}>
                    {hoverIndex !== 5 && (<DiDjango style={{fontSize: "5em"}}/>)}
                    {hoverIndex === 5 && (<div><p> Django</p> <YellowStars number={5}/></div>)} </div>
            </Col>

            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(6)}
                     onMouseLeave={() => handleMouseLeave(2)}>
                    {hoverIndex !== 6 && (<SiPytorch style={{fontSize: "5em"}}/>)}
                    {hoverIndex === 6 && (<div><p> PyTorch</p> <YellowStars number={5}/></div>)} </div>
            </Col>

            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(7)}
                     onMouseLeave={() => handleMouseLeave(2)}>
                    {hoverIndex !== 7 && (<FaLinux style={{fontSize: "5em"}}/>)}
                    {hoverIndex === 7 && (<div><p> Linux</p> <YellowStars number={4}/></div>)} </div>
            </Col>


            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(8)}
                     onMouseLeave={() => handleMouseLeave(2)}>
                    {hoverIndex !== 8 && (<FaDebian style={{fontSize: "5em"}}/>)}
                    {hoverIndex === 8 && (<div><p> Debian</p> <YellowStars number={4}/></div>)} </div>
            </Col>


            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(9)}
                     onMouseLeave={() => handleMouseLeave(2)}>
                    {hoverIndex !== 9 && (<SiProxmox style={{fontSize: "5em"}}/>)}
                    {hoverIndex === 9 && (<div><p> Proxmox</p> <YellowStars number={5}/></div>)} </div>
            </Col>

        </Row>
    );
}

export function Tool({className}) {
    const [hoverIndex, setHoverIndex] = useState(-1);

    const handleMouseEnter = (index) => {
        setHoverIndex(index);
    };

    const handleMouseLeave = (_) => {
        setHoverIndex(-1);
    };

    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(0)}
                     onMouseLeave={() => handleMouseLeave(0)}>
                    {hoverIndex !== 0 && (<SiFirebase style={{fontSize: "5em"}}/>)}
                    {hoverIndex === 0 && (<div><p> Firebase</p>  <YellowStars number={6}/></div>)} </div>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(1)}
                     onMouseLeave={() => handleMouseLeave(1)}>
                    {hoverIndex !== 1 && (<SiGooglecloud style={{fontSize: "5em"}}/>)}
                    {hoverIndex === 1 && (<div><p> Google Cloud Platform</p> <YellowStars number={5}/></div>)} </div>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(2)}
                     onMouseLeave={() => handleMouseLeave(2)}>
                    {hoverIndex !== 2 && (<FaAws style={{fontSize: "5em"}}/>)}
                    {hoverIndex === 2 && (<div><p> AWS</p> <YellowStars number={4}/></div>)} </div>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(3)}
                     onMouseLeave={() => handleMouseLeave(3)}>
                    {hoverIndex !== 3 && (<SiTailwindcss style={{fontSize: "5em"}}/>)}
                    {hoverIndex === 3 && (<div><p> Tailwind CSS </p><YellowStars number={4}/></div>)} </div>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(4)}
                     onMouseLeave={() => handleMouseLeave(4)}>
                    {hoverIndex !== 4 && (<SiPandas style={{fontSize: "5em"}}/>)}
                    {hoverIndex === 4 && (<div><p> Pandas</p> <YellowStars number={4}/></div>)} </div>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(5)}
                     onMouseLeave={() => handleMouseLeave(5)}>
                    {hoverIndex !== 5 && (<SiNumpy style={{fontSize: "5em"}}/>)}
                    {hoverIndex === 5 && (<div><p> Numpy</p> <YellowStars number={5}/></div>)} </div>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(6)}
                     onMouseLeave={() => handleMouseLeave(6)}>
                    {hoverIndex !== 6 && (<DiBootstrap style={{fontSize: "5em"}}/>)}
                    {hoverIndex === 6 && (<div><p> Bootstrap</p> <YellowStars number={5}/></div>)} </div>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(7)}
                     onMouseLeave={() => handleMouseLeave(7)}>
                    {hoverIndex !== 7 && (<FaFigma style={{fontSize: "5em"}}/>)}
                    {hoverIndex === 7 && (<div><p> Figma</p> <YellowStars number={6}/></div>)} </div>
            </Col>

            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(8)}
                     onMouseLeave={() => handleMouseLeave(6)}>
                    {hoverIndex !== 8 && (<FaDocker style={{fontSize: "5em"}}/>)}
                    {hoverIndex === 8 && (<div><p> Docker</p> <YellowStars number={4}/></div>)} </div>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(9)}
                     onMouseLeave={() => handleMouseLeave(7)}>
                    {hoverIndex !== 9 && (<FaCloudflare style={{fontSize: "5em"}}/>)}
                    {hoverIndex === 9 && (<div><p> Cloudflare</p> <YellowStars number={4}/></div>)} </div>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(10)}
                     onMouseLeave={() => handleMouseLeave(7)}>
                    {hoverIndex !== 10 && (<FaGithub style={{fontSize: "5em"}}/>)}
                    {hoverIndex === 10 && (<div><p> Git</p> <YellowStars number={6}/></div>)} </div>
            </Col>
        </Row>
    );
}

export function Topics({className}) {
    const [hoverIndex, setHoverIndex] = useState(-1);

    const handleMouseEnter = (index) => {
        setHoverIndex(index);
    };

    const handleMouseLeave = (_) => {
        setHoverIndex(-1);
    };
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(0)}
                     onMouseLeave={() => handleMouseLeave(0)}>
                    {hoverIndex !== 0 && (<div style={{fontSize: "3em"}}> ML </div>)}
                    {hoverIndex === 0 && (<div><p> Machine Learning</p>  <YellowStars number={6}/></div>)} </div>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(1)}
                     onMouseLeave={() => handleMouseLeave(1)}>
                    {hoverIndex !== 1 && (<div style={{fontSize: "3em"}}> NLP </div>)}
                    {hoverIndex === 1 && (
                        <div><p> Natural Language Processing</p> <YellowStars number={5}/></div>)} </div>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(2)}
                     onMouseLeave={() => handleMouseLeave(2)}>
                    {hoverIndex !== 2 && (<AiOutlineRobot style={{fontSize: "5em"}}/>)}
                    {hoverIndex === 2 && (<div><p> Artificial Intelligence</p> <YellowStars number={6}/></div>)} </div>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(3)}
                     onMouseLeave={() => handleMouseLeave(3)}>

                    {hoverIndex !== 3 && (<FaChartBar style={{fontSize: "5em"}}/>)}
                    {hoverIndex === 3 && (<div><p> Data Visualization </p><YellowStars number={5}/></div>)} </div>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(4)}
                     onMouseLeave={() => handleMouseLeave(4)}>
                    {hoverIndex !== 4 && (<div style={{fontSize: "3em"}}> CV </div>)}
                    {hoverIndex === 4 && (<div><p> Computer Vision</p> <YellowStars number={4}/></div>)} </div>
            </Col>
            <Col xs={6} md={4} lg={3} xl={2} className={className}>
                <div className="tech-icons" onMouseEnter={() => handleMouseEnter(5)}
                     onMouseLeave={() => handleMouseLeave(4)}>
                    {hoverIndex !== 5 && (<GrSystem style={{fontSize: "5em"}}/>)}
                    {hoverIndex === 5 && (<div><p> Operating System</p> <YellowStars number={5}/></div>)} </div>
            </Col>
        </Row>
    );
}


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
