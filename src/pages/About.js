import '../App.css';
import { Row, Col } from 'reactstrap'
import FeatureCard from '../components/FeatureCard';



// home functional react component

const About = ({data}) => {
  return (
    <div className="App">
      <h1 style={{ color: "#a6a6a6", paddingTop: "2rem" }} dangerouslySetInnerHTML={{__html: data['about-title']}}>
      </h1>

      <Row className='padding-x-xl'>
        <Col className='offset-md-2' sm='12' md='8' style={{ background: 'white', padding: '40px' }}>
          <p dangerouslySetInnerHTML={{__html: data['about-page-text'] }}></p>
        </Col>
      </Row>

      <Row>
        <Col className='offset-md-2' md='4'>
          <FeatureCard
            text={data['about-card-one-text']}
            src={data['about-card-one-image']}
            alt="wood" />
        </Col>
        <Col md='4'>
          <FeatureCard
            text={data['about-card-two-text']}
            src={data['about-card-two-image']}
            alt="axe on log" />
        </Col>
      </Row>
    </div>
  )
}

export default About