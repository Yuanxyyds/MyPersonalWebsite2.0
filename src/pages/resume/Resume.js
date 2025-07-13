import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../../components/common/Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import 'react-pdf/dist/Page/TextLayer.css';
import "./../../style/resume/resume.css"

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/legacy/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();


function Resume() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const getScale = () => {
        const maxW = 1200;
        const minW = 500;
        const maxScale = 1.7;
        const minScale = 0.6;
        if (width >= maxW) return maxScale;
        if (width <= minW) return minScale;
        const scale = minScale + ((width - minW) / (maxW - minW)) * (maxScale - minScale);
        return parseFloat(scale.toFixed(2));
    };


    return (
        <div>
            <Container fluid className="resume-section">
                <Particle />
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        variant="primary"
                        href="/resume/resume.pdf"
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download Resume
                    </Button>
                </Row>
                <Row>
                    <p style={{ color: "white", marginTop: "2em" }}>
                        Updated at July 2025
                    </p>
                </Row>
                <Row className="resume">
                    <Document file="/resume/resume.pdf" className="d-flex justify-content-center">
                        <Page pageNumber={1} scale={getScale()} />
                    </Document>
                </Row>
            </Container>
        </div>
    );
}

export default Resume;
