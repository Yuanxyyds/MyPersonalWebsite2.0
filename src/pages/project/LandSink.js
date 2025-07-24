import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import { ImPointLeft } from "react-icons/im";
import "./../../style/project/land-sink.css"


function LandSink() {
    const [year, setYear] = useState(2020);

    const request = () => {
        let url = 'https://server-lite.liustev6.ca/landsink/predict/' + year.toString();
        const newWindow = window.open(url, 'Dialog', 'width=600,height=400');
        if (newWindow) {
            // Fo nothing
        } else {
            alert('Popup blocked. Please allow popups for this site.');
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        request();
    };

    const handleOnChange = (event) => {
        setYear(event.target.value)
    };


    return (
        <Container fluid className="project-demo-section">
            <Container fluid className="two-column-content-padding">
                <Row>
                    <Col xs={12} md={12} lg={7}>
                        <h3 className="fade-in">
                            Estimate  <span className='primary-color'> LandSink </span> Percentage
                        </h3>
                        <p className="fade-in" style={{ textAlign: "justify", paddingTop: 20 }}>
                            This project represents the culminating effort of CSC110, where our team gathered sea level
                            data, temperature data, and elevation data from various locations worldwide. Our objective
                            was to construct a linear regression model capable of predicting the percentage of country
                            submerged and the future global average temperature.
                            <br /><br />
                            Originally, we built the project using Pygame, which generated HTML files upon each new
                            value request. For more details about the original version, please refer to our Github
                            Repository linked
                            <a
                                href={"https://github.com/Yuanxyyds/CSC110PredictLandSink"} className="primary-color"
                                style={{ cursor: "pointer", textDecoration: "none" }}> here
                            </a>
                            <br /><br />
                            To enhance interactivity on the web, I recently developed a Django back-end for this
                            project. This allows users to send API requests for predictions. The back-end server is now
                            hosted on AWS. You can try out the prediction feature <strong
                                className="primary-color">below</strong>.
                        </p>
                    </Col>
                    <Col xs={12} md={12} lg={5} style={{ paddingBottom: 20, textAlign: "center" }}>
                        <img
                            src="/project/land-sink.png"
                            alt="Land Sink"
                            className="img-fluid"
                            style={{ maxHeight: "600px" }}
                        />
                    </Col>
                </Row>
                <Container className="section-margin">
                    <h3 className="fade-in ">
                        Make a <span className="primary-color">Prediction </span>
                    </h3>
                    <h5 style={{ paddingTop: 20 }}>
                        <strong className="primary-color">Note: </strong> Enter some large numbers as input year
                    </h5>
                    <div style={{ paddingTop: 20 }}>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={year}
                                onChange={handleOnChange}
                                placeholder="Enter the year"
                                className="input-field"
                            />
                            <button type="submit" className=" text-button">
                                <ImPointLeft /> Generate
                            </button>
                        </form>
                    </div>
                </Container>
            </Container>
        </Container>
    );
}

export default LandSink;

