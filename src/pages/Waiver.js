import { useEffect, useState } from 'react';
import { Button, Row, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import SignatureCanvas from 'react-signature-canvas'
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';


// home functional react component

const Waiver = ({data}) => {

  const [minor, setMinor] = useState(false)
  const [bdaySelected, selectBday] = useState(false)
  const [defaultOption, setDefaultOption] = useState('')
  const [sig, setSig] = useState('')
  const [gSig, setGSig] = useState('')

  useEffect(() => {
    const dateArr = new Date().toLocaleString().split(/\D/).slice(0, 3)
    dateArr.unshift(dateArr.pop())
    const d = document.getElementById('date')
    d.value = dateArr.map(num => num.padStart(2, "0")).join("-")
  }, [])

  useEffect(() => {
    if (data['waiver-meta-title']) {
      document.title = data['waiver-meta-title'];
    }
    if (data['waiver-description']) {
      document.querySelector('meta[name="description"]').content = data['waiver-description'];
    }
  }, [data])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const dataObj = {}
    data.forEach((value, key) => {
      dataObj[key] = value
    })
    dataObj['sig'] = sig.toDataURL()
    if(sig.isEmpty()){
      return toast.error('Please sign the waiver')
    }

    if(minor){
      dataObj['gsig'] = gSig.toDataURL()
      if(gSig.isEmpty()){
        return toast.error('Please have a guardian sign the waiver')
      }
    }


    try {
      const req = await fetch('/waiver.php', {
        method: 'POST',
        contentType: 'application/json',
        body: JSON.stringify(dataObj)
      })
      const res = await req.json()
      if (res.success) {
        e.target.reset()
        return toast("Waiver submitted successfully!", { type: "success" })
      }
      toast(`There was an error, ${res.error}`, { type: "error" })
    } catch (error) {
      console.log(error)
      toast("Something went wrong, please check your form data or try again later", { type: "error" });
    }
  }

  const validateAge = (e) => {
    // remove non-numeric characters
    e.target.value = e.target.value.replace(/\D/g, '')
    // don't allow over 99
    if (e.target.value > 99) {
      e.target.value = 99
    }
    const age = e.target.value

    if (age < 18) {
      setMinor(true)
    } else {
      setMinor(false)
    }    
  }



  return (
    <div className="App">
      <ToastContainer />
      <h1 style={{ color: "#a6a6a6", paddingTop: "2rem" }}>
        {data['waiver-title']}
      </h1>
      <Row className='padding-x-xl'>
        <Col className='offset-md-2' sm='12' md='8' style={{ background: 'white', padding: '40px' }}>
          {/* <Form inline action="https://mailthis.to/info@jacksaxes.co" method="POST"> */}
          <Form inline onSubmit={handleSubmit}>
            <div dangerouslySetInnerHTML={{__html: data['waiver-main']}} />
            <hr></hr>
            <Row>
              <Col sm='12'>
                {data['waiver-understand']}
              </Col>
              <Col sm='12'>
                <br></br>
                <label for='understand'>
                <span>I agree. </span><Input id='understand' name='understand' type='checkbox' disabled={minor}></Input>
                </label>
                {!minor && ' *'}
              </Col>
            </Row>
            <hr />
            <Row>
              <p class="info">{data['waiver-info-2']}</p>
              <Row>
                <Col lg='4' sm='12'>
                  <FormGroup floating>
                    <Input
                      id="fname"
                      name="first-name"
                      placeholder="First Name"
                      type="text"
                    />
                    <Label for="fname">
                      Full Name
                    </Label>
                  </FormGroup>

                </Col>
                <Col lg='4' sm='12'>
                <FormGroup floating>
                    <Label for="birthday-month">
                      {bdaySelected ? '' : 'Birthday Month'}
                    </Label>
                    <Input
                      id="birthday-month"
                      name="birthday-month"
                      onChange={() => {
                        selectBday(true)
                        setDefaultOption('Birthday Month')
                      }}
                      type="select"
                    >
                      {
                        [defaultOption, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(month => {
                          return <option key={month} value={month}>{month}</option>
                        }
                        )}
                    </Input>
                  </FormGroup>

                </Col>
                <Col lg='4' sm='12'>
                  <FormGroup floating>
                    <Input
                      id="age"
                      name="age"
                      placeholder="Age"
                      onChange={e => validateAge(e)}
                      type="text"
                    />
                    <Label for="age">
                      Age
                    </Label>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col lg='4' sm='12'>
                  <FormGroup floating>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Phone Number"
                      type="text"
                    />
                    <Label for="phone">
                      Phone Number
                    </Label>
                  </FormGroup>


                </Col>
                <Col lg='4' sm='12'>
                <FormGroup floating>
                    <Input
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      type="email"
                    />
                    <Label for="email">
                      Email Address
                    </Label>
                  </FormGroup>

                </Col>
                <Col lg='4' sm='12'>
                  <FormGroup floating>
                    <Input
                      id="date"
                      name="date"
                      placeholder="Date"
                      type="date"
                      />
                    <Label for="date">
                      Date
                    </Label>
                  </FormGroup>
                </Col>
                <Col lg='4' sm='12'>
                <FormGroup floating>
                    <SignatureCanvas name='sig' penColor='green' ref={(ref) => {
                      setSig(ref)
                    } }
    canvasProps={{width: document.getElementById('email')?.offsetWidth > 350 ? document.getElementById('email')?.offsetWidth : 350 , height: document.getElementById('email')?.offsetHeight, className: 'sigCanvas'}} />
                    <Label for="sig">
                      {sig && "Signature"}
                    </Label>
                    <p>{data['']}</p>

                  </FormGroup>
                </Col>

              </Row>

              {minor && (
                <>
                  <hr />
                  <div dangerouslySetInnerHTML={{__html: data['waiver-minor-main']}} />
                  <Row>
                    <Col md='1' />
                    <Col sm='12' md='10'>
                      <label for='gunderstand'>
                      <span>{data['waiver-minor-understand']}</span>
                      </label>
                      <Input id='gunderstand' name='gunderstand' type='checkbox'></Input>
                      {' *'}
                    </Col>
                  </Row>
                  <br /><br />
                  <hr />
                  <Row>
                    <p class="info">{data['waiver-minor-info-2']}</p>
                    <Col md='3'/>
                    <Col md='6' sm='12'>
                    <Col lg='4' sm='12'>
                      <FormGroup floating>
                          <SignatureCanvas name='gSig' penColor='green' ref={(ref) => {
                            setGSig(ref)
                          } }
          canvasProps={{width: document.getElementById('email')?.offsetWidth > 350 ? document.getElementById('email')?.offsetWidth : 350 , height: document.getElementById('email')?.offsetHeight, className: 'sigCanvas'}} />
                          <Label for="sig">
                            {sig && "Signature"}
                          </Label>
                          <p>{data['']}</p>

                        </FormGroup>
                      </Col>
                    </Col>
                    <p class="info">{data['waiver-minor-info-3']}</p>
                  </Row>

                </>
              )}
            </Row>
            <Button>
            {data['waiver-submit-button']}
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default Waiver