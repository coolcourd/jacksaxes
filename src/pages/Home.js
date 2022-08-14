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
      altText: 'Jacks Axes',
      header: 'Looking for something fun to do?',
      caption: 'Book with Jacks Axes!',
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


      <Slider items={items} />

      <Row>
        <Col md='4'>
          <FeatureCard
            title="Schedule"
            subtitle="Jack's Axes is open for business!"
            text="We know you wanna grab our axe. Don't be afraid, We will teach you everything you need to know to hit your target!"
            button="Schedule"
            click={() => navigate("/schedule", { replace: true })}
            src="/assets/schedule.jpg"
            alt="schedule" />
        </Col>
        <Col md='4'>
          <FeatureCard
            title="Waiver"
            subtitle="Your safety is our top priority!"
            text="Before you get started, you will need to fill out our liability waiver and agree to follow our basic safety rules while in the axe throwing area(s)"
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