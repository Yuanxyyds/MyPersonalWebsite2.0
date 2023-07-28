import {Col, Container, Row} from "react-bootstrap";
import Particle from "../Particle";
import React, {useEffect, useState} from "react";
import landSink from "../../Assets/Projects/landSink.png";
import {ImPointLeft} from "react-icons/im";
import {BiCheck} from "react-icons/bi";


function LandSink() {
    const [year, setYear] = useState(2020);
    const [htmlContent, setHtmlContent] = useState('');
    const [submitted, setSubmitted] = useState(false);


    useEffect(() => {
        // Do something when 'data' state changes
        if (submitted) {
            const request = async () => {
                const result =
                    await fetch(`http://18.224.212.119:8000/predict/${year}/`, {
                        method: 'GET',
                        mode: 'cors',
                    })
                setHtmlContent((await result.json()).html_content);
            }
            request();
        }
        setSubmitted(false);
    }, [submitted]);

    useEffect(() => {
        if (htmlContent !== '') {
            const newWindow = window.open('', 'Dialog', 'width=600,height=400');
            if (newWindow) {
                newWindow.document.write(htmlContent);
                newWindow.document.close();
            } else {
                alert('Popup blocked. Please allow popups for this site.');
            }
        }
    }, [htmlContent]);


    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);

    };

    const handleOnChange = (event) => {
        setYear(event.target.value)
    };


    return (
        <Container fluid className="project-demo-section">
            <Particle/>
            <Container>
                <Row style={{justifyContent: "center", padding: "10px"}}>
                    <Col>
                        <div className="project-heading">
                            Estimate LandSink Percentage <strong className='blue'> Demo </strong>
                        </div>
                        <p style={{textAlign: "justify", paddingTop: 20}}>

                            This project represents the culminating effort of CSC110, where our team gathered sea level
                            data, temperature data, and elevation data from various locations worldwide. Our objective
                            was to construct a linear regression model capable of predicting the percentage of country
                            submerged and the future global average temperature.
                            <br/><br/>
                            Originally, we built the project using Pygame, which generated HTML files upon each new
                            value request. For more details about the original version, please refer to our Github
                            Repository linked
                            <a
                                href={"https://github.com/Yuanxyyds/CSC110PredictLandSink"} className="blue"
                                style={{cursor: "pointer", textDecoration: "none"}}> here
                            </a>
                            <br/><br/>
                            To enhance interactivity on the web, I recently developed a Django back-end for this
                            project. This allows users to send API requests for predictions. The back-end server is now
                            hosted on AWS. You can try out the prediction feature <strong
                            className="blue">below</strong>.


                        </p>
                    </Col>
                    <Col md={5} style={{paddingBottom: 20, textAlign: "center"}}>
                        <img
                            src={landSink}
                            alt="Land Sink"
                            className="img-fluid"
                            style={{maxWidth: "600px"}}
                        />
                    </Col>
                </Row>
                <div className="project-heading">
                    Make a <strong className="blue">Prediction </strong>
                </div>

                <h5 style={{ paddingTop: 20}}>
                    <strong className="blue">Note: </strong> Enter some large numbers as input year
                </h5>

                <div style={{ paddingTop: 20}}>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={year}
                            onChange={handleOnChange}
                            placeholder="Enter the year"
                            className="input-field"
                        />
                        <button type="submit"  className=" generate-button">
                            <ImPointLeft/> Generate
                        </button>
                    </form>

                </div>

            </Container>
        </Container>
    );
}

export default LandSink;

