import { Col, Row } from "react-bootstrap";
import "./FormSec.css"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';


export default function FormSec() {
  return (
     <div className="exContainer">
        <Row>
            
          <Col lg={6} xs={12} className="d-flex flex-column justify-content-between text-white rounded" style={{ borderRadius: "20px", backgroundColor: "var(--primary-color)" }}>
            <div>

            <div className="d-flex align-items-center mb-4">
              <FaPhoneAlt className="me-3" />
              <div>
                <p className="mb-0">Call Us 7/24</p>
                <p className="fw-bold">+208-555-0112</p>
              </div>
            </div>
            
            <div className="d-flex align-items-center mb-4">
              <FaEnvelope className="me-3" />
              <div>
                <p className="mb-0">Make a Quote</p>
                <p className="fw-bold">Infotech@gmail.com</p>
              </div>
            </div>
            
            <div className="d-flex align-items-center mb-4">
              <FaMapMarkerAlt className="me-3" />
              <div>
                <p className="mb-0">Location</p>
                <p className="fw-bold">4517 Washington ave.</p>
              </div>
            </div>
            </div>

            <div>
              <img src="/Images/video.webp" alt="Contact" className="w-100" />
            </div>
          </Col>

          <Col lg={8} md={7}>
            <h2>Ready to Get Started?</h2>
            <p>
              Nulla varius, erat quis iaculis dictum, eros urna varius eros, ut blandit felis odio in turpis.
              Quisque rhoncus, eros in auctor ultrices,
            </p>
            <form>
              <Row className="mb-3">
                <Col md={6}>
                  <label htmlFor="name" className="form-label">Your Name*</label>
                  <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                </Col>
                <Col md={6}>
                  <label htmlFor="email" className="form-label">Your Email*</label>
                  <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                </Col>
              </Row>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Write Message*</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Write your message here" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message <span className="ms-1">&rarr;</span>
              </button>
            </form>
          </Col>
        </Row>
      </div>
    
  )
}
