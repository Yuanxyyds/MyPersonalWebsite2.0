import React, {useState, useEffect} from "react";
import {Container, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../../components/common/Particle";
import {AiOutlineDownload} from "react-icons/ai";
import {Document, Page, pdfjs} from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../../assets/Resume Newest.pdf";
import 'react-pdf/dist/Page/TextLayer.css';


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/legacy/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();


function Resume() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <div>
            <Container fluid className="resume-section">
                <Particle/>
                <Row style={{justifyContent: "center", position: "relative"}}>
                    <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        style={{maxWidth: "250px"}}
                    >
                        <AiOutlineDownload/>
                        &nbsp;Download CV
                    </Button>
                </Row>
                <Row className="resume">
                    <Document file={pdf} className="d-flex justify-content-center">
                        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6}/>
                    </Document>
                </Row>
                <Row className="resume">
                    <Document file={pdf} className="d-flex justify-content-center">
                        <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6}/>
                    </Document>
                </Row>

            </Container>
        </div>
    );
}

export default Resume;
