import {Col, Container, Row} from "react-bootstrap";
import Particle from "../../components/common/Particle";
import React, {useEffect, useState} from "react";
import FileDropUpload from "../../components/project_demo/FileDropUpload";
import axios from "axios";
import machineLearning from "../../assets/project_demo/machine-learning.jpg";
import accuracy from "../../assets/project_demo/accuracy.png";
import loss from "../../assets/project_demo/loss.png";


function FoodImageClassify() {
    const [isProcessing, setIsProcessing] = useState(false);
    const [modelResult, setModelResult] = useState(null);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 576);

    useEffect(() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth < 576);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Handle file upload
    const handleUpload = async (file) => {
        if (!file) {
            console.log("No File Provided!")
            return;
        }

        if (isProcessing) {
            console.log("Request Already Sent!")
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            setIsProcessing(true);
            setModelResult(null);
            // POST request to the backend
            const response = await axios.post('https://webserver.liustev6.ca/food101/classify',
                formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    withCredentials: true,
                });
            setIsProcessing(false);

            // Check if the response status is 200 (success)
            if (response.status === 200) {
                // Assuming the response contains the predictions as described
                const predictions = response.data.predictions;
                setModelResult(predictions);
                console.log("File uploaded and parsed successfully", predictions);
            } else {
                // If status is not 200, handle it as an error
                console.error(`Error: Received status code ${response.status}`);
            }
        } catch (error) {
            console.error("Error uploading the file:", error);
        }

    };


    return (
        <Container fluid className="project-demo-section">
            <Particle/>
            <Container>
                <Row style={{justifyContent: "center", padding: "10px"}}>
                    <Col lg={12} xl={7}>
                        <div className="project-heading fade-in">
                            Food Classification with <strong className='primary-color'> 20 </strong> Class
                        </div>
                        <p className="paragraph fade-in">
                            This project is focused on developing <span className="primary-color">a deep learning-based
                            food classification system</span> using the Food-101 dataset. It involves preparing and
                            processing image data, building and training models to classify <span
                            className="primary-color">20 food categories </span>, and fine-tuning the models
                            for improved accuracy.
                        </p>
                        <p className="paragraph fade-in">
                            The project integrates data augmentation, transfer learning, and hyperparameter tuning to
                            optimize performance. It trained or fine tuned <span className="primary-color"> a Baseline
                            Model, a VGG Model, a Inception Model and a ResNet Model. </span> The goal is to create an
                            efficient, accurate system capable of classifying food images. <span
                            className="primary-color"> This project is hosted within my home server </span>
                        </p>
                        <p className="paragraph fade-in">
                            <span className="primary-color"> Try to classify a food photo below! </span>
                            Support food types include: Apple Pie, Baby Back Ribs, Bibimbap, Caesar Salad, Cheesecake,
                            Chicken Curry, Chicken Wings, Club Sandwich, Donuts, Dumplings, French Fries, Hot Dog,
                            Pizza, Ramen, Steak, Ice Cream, Waffles, Spring Rolls, Sushi, Fish and Chips.
                        </p>
                    </Col>
                    <Col lg={12} xl={5} style={{paddingBottom: 20, textAlign: "center"}}>
                        <img
                            src={machineLearning}
                            alt="Machine Learning"
                            className="img-fluid fade-in food-classify-image"
                        />
                    </Col>
                </Row>
            </Container>
            <Container>
                <div className="project-heading fade-in">
                    Model <strong className='primary-color'> Performance </strong>
                </div>
                <Row style={{justifyContent: "center", padding: "10px"}}>
                    <Col md={12} lg={6}>
                        <img
                            src={accuracy}
                            alt="Accuracy"
                            className="img-fluid fade-in food-classify-plot"
                        />
                    </Col>
                    <Col md={12} lg={6}>
                        <img
                            src={loss}
                            alt="Loss"
                            className="img-fluid fade-in food-classify-plot"
                        />
                    </Col>
                </Row>
            </Container>
            <Container>
                <div className="project-heading fade-in">
                    Make a <strong className="primary-color">Prediction </strong>
                </div>

                <FileDropUpload submitText={'CLICK ME TO CLASSIFY'} onSubmit={handleUpload} isProcessing={isProcessing}
                                processingMessage={"Processing...Estimated 20 seconds"}/>

                {modelResult != null ?
                    <Container>
                        <div className="project-heading fade-in">
                            Prediction <strong className="primary-color">Result </strong>
                        </div>
                        <table border="1" cellPadding="10" style={{borderCollapse: 'collapse', width: '100%'}}>
                            <thead>
                            <tr>
                                <th>Model</th>
                                {isSmallScreen ? (
                                    <>
                                        <th>1st/2nd Predicted Class</th>
                                        <th>1st/2nd Probability (%)</th>
                                    </>
                                ) : (
                                    <>
                                        <th>1st Predicted Class</th>
                                        <th>Probability (%)</th>
                                        <th>2nd Predicted Class</th>
                                        <th>Probability (%)</th>
                                    </>
                                )}
                            </tr>
                            </thead>
                            <tbody>
                            {modelResult.map((prediction, index) => (
                                <tr key={index}>
                                    <td>{prediction.model}</td>
                                    {isSmallScreen ? (
                                        <>
                                            {/* Combine 1st/2nd predicted class */}
                                            <td>{`${prediction.first_predicted_class}/${prediction.second_predicted_class}`}</td>
                                            {/* Combine 1st/2nd probability */}
                                            <td>{`${(prediction.first_predicted_prob * 100).toFixed(2)}/${(prediction.second_predicted_prob * 100).toFixed(2)}`}</td>
                                        </>
                                    ) : (
                                        <>
                                            <td>{prediction.first_predicted_class}</td>
                                            <td>{(prediction.first_predicted_prob * 100).toFixed(2)}</td>
                                            <td>{prediction.second_predicted_class}</td>
                                            <td>{(prediction.second_predicted_prob * 100).toFixed(2)}</td>
                                        </>
                                    )}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </Container> : ""}
            </Container>
        </Container>
    );
}

export default FoodImageClassify;