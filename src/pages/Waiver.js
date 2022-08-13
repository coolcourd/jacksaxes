import { Button, Row, Col } from 'reactstrap';
import '../App.css';


// home functional react component

const Waiver = () => {
  return (
    <div className="App">
      <h1 className='padding-x-md'>Waiver</h1>
      <Row className='padding-x-xl'>
        <Col md='12'>
          <h2 className='padding-x-md'>Options</h2>
          <Row>
            <Col md='6'>
                  <h3 className='padding-x-md'>The simplest solution for most lumberjacks is to fill out our online form.</h3>
              <a href='#form'>
              <Button color='primary' className='padding-x-md'>
                  Online Form
              </Button>
              </a>
            </Col>
            <Col md='6'>
            <h3 className='padding-x-md'>Some groups find it easier to print and pass out our paper form.</h3>
            <Button
              color="primary"
              onClick={() => window.open('/assets/waiver.pdf', '_blank')}
            >
              PDF
            </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className='padding-x-xl' id="form">
        <Col md='12'>
          <h2 className='padding-x-md'>We know you are excited to grab our axes, but first:</h2>
          <p className='padding-x-md'>
            Please fill out the form below.
          </p>
          </Col>
      </Row>
    </div>
  )
}

export default Waiver