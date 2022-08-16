import '../App.css';
import FeatureCard from '../components/FeatureCard';
import Slider from '../components/Slider';
import { Row, Col } from 'reactstrap';
import { useNavigate } from "react-router-dom";



// home functional react component

const Home = () => {
  let navigate = useNavigate();

  const items = [
    {
      src: '/assets/axe.jpg',
      altText: "jack's Axes",
      header: 'Looking for something fun to do?',
      caption: "Book with jack's Axes!",
      key: 1,
    },
    {
      src: '/assets/woman-axe.jpg',
      altText: 'Woman with Axe',
      header: 'Perfect for date night or a group',
      caption: 'Get your axes on over here!',
      key: 2,
    }
  ];

  return (
    <div className="App">


      <Slider className='desktop-only' items={items} />
      <div className='mobile-only'>
        <img src='/assets/axe.png' alt='animated axe' className='thrown w3-spin' />
        <Row className='' style={{ backgroundImage: 'url(/assets/wood.jpg)', backgroundSize: "cover", width: '100%', height: '100%' }} >
          <div className='padding-xl overlay' style={{backgroundColor: 'rgba(40, 44, 52, .8)'}} >
          <Col className='padding-lg margin-y-sm' >
            <p style={{ color: 'white', fontSize: '1.5rem' }}>Ready to throw?</p>
            </Col>
          <Col className='padding-lg margin-y-sm' >
            <p style={{ color: 'white', fontSize: '1.5rem' }}>Book with Jack's Axes!</p>
            </Col>
          </div>
        </Row>
      </div>

      <Row>
        <Col md='4'>
          <FeatureCard
            title="Schedule"
            subtitle="Jack's Axes is open for business!"
            text="We know you wanna grab our axe. Don't be afraid, we will teach you everything you need to know to hit your target!"
            button="Schedule"
            click={() => navigate("/schedule", { replace: true })}
            src="/assets/schedule.jpg"
            alt="schedule" />
        </Col>
        <Col md='4'>
          <FeatureCard
            title="Waiver"
            subtitle="Your safety is our top priority!"
            text="Before you get started, you will need to fill out our liability waiver and agree to follow our basic safety rules while in the axe throwing area(s)."
            button="Sign Now"
            click={() => navigate("/waiver", { replace: true })}
            src="/assets/axe2.jpg"
            alt="axe on log" />
        </Col>
        <Col md='4'>
          <FeatureCard
            title="About"
            subtitle="Who are we? What do we do?"
            text="Jack's Axes is a Mobile Axe Throwing business based in the Queen Creek area. You will find us set up in various parks and all over the community at events and anywhere that people like to have fun."
            button="Read More"
            click={() => navigate("/about", { replace: true })}
            src="https://source.unsplash.com/random"
            alt="random image" />
        </Col>
      </Row>

    </div>
  )
}

export default Home