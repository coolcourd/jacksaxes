import '../App.css';
import FeatureCard from '../components/FeatureCard';
import Slider from '../components/Slider';
import { Row, Col } from 'reactstrap';
import { useNavigate } from "react-router-dom";



// home functional react component

export default () => {
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
            text="Before you get started, you will need to fill out our liability waiver. We will also go over axe throwing safety procedures."
            button="Sign Now"
            click={() => navigate("/waiver", { replace: true })}
            src="/assets/axe2.jpg"
            alt="axe on log" />
        </Col>
        <Col md='4'>
          <FeatureCard
            title="About"
            subtitle="Who are we? What do we do?"
            text="Jack's Axes was born out of love for axe throwing in 2022. We wanted to create a fun and safe environment for everyone to enjoy axe throwing as much as we do."
            button="Read More"
            click={() => navigate("/about", { replace: true })}
            src="https://source.unsplash.com/random"
            alt="random image" />
        </Col>
      </Row>

    </div>
  )
}