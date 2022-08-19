import { useEffect, useState } from 'react';
import { Button, Row, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';


// home functional react component

const Waiver = ({data}) => {

  const [minor, setMinor] = useState(false)

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
              <Col sm='10'>
                <label for='understand'>
                {data['waiver-understand']}
                </label>
              </Col>
              <Col sm='2'>
                <Input id='understand' name='understand' type='checkbox' disabled={minor}></Input>
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
                      First Name
                    </Label>
                  </FormGroup>

                </Col>
                <Col lg='4' sm='12'>
                  <FormGroup floating>
                    <Input
                      id="lname"
                      name="last-name"
                      placeholder="Last Name"
                      type="text"
                    />
                    <Label for="lname">
                      Last Name
                    </Label>
                  </FormGroup>

                </Col>
                <Col lg='4' sm='12'>
                  <FormGroup floating>
                    <Input
                      id="age"
                      name="age"
                      placeholder="Age"
                      onChange={e => setMinor(e.target.value < 18)}
                      type="number"
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
                      id="address"
                      name="address"
                      placeholder="Address"
                      type="text"
                    />
                    <Label for="address">
                      Address
                    </Label>
                  </FormGroup>
                </Col>
                <Col lg='4' sm='12'>
                  <FormGroup floating>
                    <Input
                      id="city"
                      name="city"
                      placeholder="City"
                      type="text"
                    />
                    <Label for="city">
                      City
                    </Label>
                  </FormGroup>
                </Col>
                <Col lg='4' sm='12'>
                  <FormGroup floating>
                    <Input
                      id="zip"
                      name="zip"
                      placeholder="Zip Code"
                      type="text"
                    />
                    <Label for="zip">
                      Zip Code
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
                      id="emergency"
                      name="emergency"
                      placeholder="Emergency Contact Number"
                      type="text"
                    />
                    <Label for="emergency">
                      Emergency Contact Number
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
                    <Label for="birthday-month">
                      Birthday Month
                    </Label>
                    <Input
                      id="birthday-month"
                      name="birthday-month"
                      type="select"
                    >
                      {
                        ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(month => {
                          return <option key={month} value={month}>{month}</option>
                        }
                        )}
                    </Input>
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
                      id="signature"
                      name="sig"
                      placeholder="Signature"
                      type="text"
                    />
                    <Label for="sig">
                      Signature
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
                    <Col sm='10'>
                      <label for='gunderstand'>
                      {data['waiver-minor-understand']}
                      </label>
                    </Col>
                    <Col sm='2'>
                      <Input id='gunderstand' name='gunderstand' type='checkbox'></Input>
                      {' *'}
                    </Col>
                  </Row>
                  <br /><br />
                  <hr />
                  <Row>
                    <p class="info">{data['waiver-minor-info-2']}</p>
                    <Col lg='6' sm='12'>
                      <FormGroup floating>
                        <Input
                          id="gfname"
                          name="gfirst-name"
                          placeholder="First Name"
                          type="text"
                        />
                        <Label for="gfname">
                          First Name
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col lg='6' sm='12'>
                      <FormGroup floating>
                        <Input
                          id="glname"
                          name="glname"
                          placeholder="Last Name"
                          type="text"
                        />
                        <Label for="glname">
                          Last Name
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col sm='12'>
                      <FormGroup floating>
                        <Input
                          id="gsig"
                          name="gsig"
                          placeholder="Signature"
                          type="text"
                        />
                        <Label for="glname">
                          Signature
                        </Label>
                        <p>{data['waiver-signature-disclaimer']}</p>
                      </FormGroup>
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