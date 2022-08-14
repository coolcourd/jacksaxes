import { Link } from "react-router-dom";
import { Row, Col } from 'reactstrap';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#f5f5f5',
            margin: '2rem auto 0 auto',
            padding: '2rem',
        }}>
            <Row>
                <Col md='6' style={{textAlign: "left"}}>
                    <h5><Link to="/">Jacks Axes</Link></h5>
                    <p>
                        <Link to="/schedule">Schedule</Link>
                    </p>
                    <p>
                        <Link to="/waiver">Waiver</Link>
                    </p>
                    <p>
                        <Link to="/about">About</Link>
                    </p>
                </Col>
                <Col md='6' style={{textAlign: "left"}}>
                    <h5>Contact</h5>
                     
                    <p>
                        <a href="mailto:info@jacksaxes.co">Email Us</a>
                    </p>
                    <p>
                        <a href="tel:+1-480-527-1910">480-527-1910</a>
                    </p>
                    <p>
                        <a href="https://www.instagram.com/jacks.axes.az/" target="_blank" rel="noopener noreferrer">
                            Instagram<img src='/assets/instagram.png' width='50px' alt='instagram' className="padding-left-md"></img>
                        </a>
                        <a href="https://www.facebook.com/jacks.axes.az" target="_blank" rel="noopener noreferrer">
                            Facebook<img src='https://duckduckgo.com/i/b96d1ae5.png' width='50px' alt='facebook' className="padding-left-md"></img>
                        </a>
                    </p>
                    <p> Copywrite {new Date().getFullYear()} </p>
                    
                </Col>
            </Row>
        </footer>
    )
}
export default Footer;