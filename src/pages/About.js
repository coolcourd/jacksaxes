import '../App.css';
import { Row, Col } from 'reactstrap'
import FeatureCard from '../components/FeatureCard';



// home functional react component

const About = () => {
  return (
    <div className="App">
      <h1 style={{ color: "#a6a6a6", paddingTop: "2rem" }}>
        About us:
      </h1>

      <Row className='padding-x-xl'>
        <Col className='offset-md-2' sm='12' md='8' style={{ background: 'white', padding: '40px' }}>
          <p>Jack's Axes is a Mobile Axe Throwing business based in the Queen Creek area. You will find us set up in various parks and all over the community at events and anywhere that people like to have fun. </p>
        </Col>
      </Row>

      <Row>
        <Col className='offset-md-2' md='4'>
          <FeatureCard
            text="Our targets are available to book for all your private event needs.  We specialize in weddings, parties, team building, and any other event you can possibly think of. "
            src="/assets/wood.jpg"
            alt="schedule" />
        </Col>
        <Col md='4'>
          <FeatureCard
            text="Be sure to follow us on Instagram and Facebook to check in and see where you can find us each week to come test your skills. "
            src="/assets/axe2.jpg"
            alt="axe on log" />
        </Col>
      </Row>
    </div>
  )
}

export default About