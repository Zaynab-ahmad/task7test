import "./AboutFooter.css";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { Col, Row } from "react-bootstrap";

export default function AboutFooter() {
  return (
    <div className="about-footer-container">
      <Row className="justify-content-between align-items-center">
        <Col xs={12} md={4} className="footer-item">
          <div className="icon-container">
            <FaLocationDot />
          </div>
          <div>
            <p className="footer-title">Address</p>
            <p>4648 Rocky Road, Philadelphia PA</p>
          </div>
        </Col>
        <Col xs={12} md={4} className="footer-item">
          <div className="icon-container">
            <IoIosMail />
          </div>
          <div>
            <p className="footer-title">Send Email</p>
            <a href="mailto:info@example.com">info@example.com</a>
          </div>
        </Col>
        <Col xs={12} md={4} className="footer-item">
          <div className="icon-container">
            <FaPhone />
          </div>
          <div>
            <p className="footer-title">Call Emergency</p>
            <a href="tel:+88012365499">+88 0123 654 99</a>
          </div>
        </Col>
      </Row>
    </div>
  );
}
