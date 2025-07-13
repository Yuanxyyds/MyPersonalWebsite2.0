import { Col, Container, Row, } from "react-bootstrap";
import {
    AiFillGithub,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./../../style/common/footer.css";

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <section>
            <Container fluid className="footer">
                <Row>
                    <Col md={4} className="footer-paragraph">
                        <p>Developed by Steven Liu</p>
                    </Col>
                    <Col md={4} className="footer-paragraph">
                        <p>Copyright © {year} SL</p>
                    </Col>
                    <Col md={4}>
                        <ul className="footer-icon-list">
                            <div className="footer-icons">
                                <a
                                    href="https://github.com/Yuanxyyds"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </div>
                            <div className="footer-icons">
                                <a
                                    href="https://www.linkedin.com/in/hongyuan-steven-liu/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </div>
                            <div className="footer-icons">
                                <a
                                    href="https://www.instagram.com/yxyyds2001/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-social-icons"
                                >
                                    <AiFillInstagram />
                                </a>
                            </div>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Footer;
