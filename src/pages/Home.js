import '../App.css';
import FeatureCard from '../components/FeatureCard';
import Slider from '../components/Slider';
import { Row, Col } from 'reactstrap';
import { useNavigate } from "react-router-dom";



// home functional react component

const Home = ({data}) => {
  let navigate = useNavigate();

  const items = [
    {
      src: '/assets/axe.jpg',
      altText: "jack's Axes",
      header: data['home-slide-one-title'],
      caption: data['home-slide-one-subtitle'],
      key: 1,
    },
    {
      src: '/assets/woman-axe.jpg',
      altText: 'Woman with Axe',
      header: data['home-slide-two-title'],
      caption: data['home-slide-two-subtitle'],
      key: 2,
    }
  ];

  return (
    <div className="App">


      <Slider className='desktop-only' items={items} />
      <div className='mobile-only'>
        <div class="w3-animate-left"><img src='/assets/axe.png' alt='animated axe' className='thrown w3-spin' /></div>
        <Row className='' style={{ backgroundImage: 'url(/assets/wood.jpg)', backgroundSize: "cover", width: '100%', height: '100%' }} >
          <div className='padding-xl overlay' style={{backgroundColor: 'rgba(40, 44, 52, .8)'}} >
          <Col className='padding-lg margin-y-sm' >
            <p style={{ color: 'white', fontSize: '1.5rem' }}>{data['home-mobile-only-p1']}</p>
            </Col>
          <Col className='padding-lg margin-y-sm' >
            <p style={{ color: 'white', fontSize: '1.5rem' }}>{data['home-mobile-only-p2']}</p>
            </Col>
          </div>
        </Row>
      </div>

      <Row style={{padding: '0px 0px 0px 20px'}}>
        <Col md='4'>
          <FeatureCard
            title={data['home-card-one-title']}
            subtitle={data['home-card-one-subtitle']}
            text={data['home-card-one-body']}
            button={data['home-card-one-button']}
            click={() => navigate(data['home-card-one-link'], { replace: true })}
            src={data['home-card-one-image-url']}
            alt="schedule" />
        </Col>
        <Col md='4'>
          <FeatureCard
            title={data['home-card-two-title']}
            subtitle={data['home-card-two-subtitle']}
            text={data['home-card-two-body']}
            button={data['home-card-two-button']}
            click={() => navigate(data['home-card-two-link'], { replace: true })}
            src={data['home-card-two-image-url']}
            alt="axe on log" />
        </Col>
        <Col md='4'>
          <FeatureCard
            title={data['home-card-three-title']}
            subtitle={data['home-card-three-subtitle']}
            text={data['home-card-three-body']}
            button={data['home-card-three-button']}
            click={() => navigate(data['home-card-three-link'], { replace: true })}
            src={data['home-card-three-image-url']}
            alt="random image" />
        </Col>
      </Row>

    </div>
  )
}

export default Home