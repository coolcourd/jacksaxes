import { useEffect, useState } from 'react';
import { Button, Row, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';


// home functional react component

const Waiver = () => {

  const [minor, setMinor] = useState(false)

  useEffect(() => {
    const dateArr = new Date().toLocaleString().split(/\D/).slice(0, 3)
    dateArr.unshift(dateArr.pop())
    const d = document.getElementById('date')
    d.value = dateArr.map(num => num.padStart(2, "0")).join("-")
    d.disabled = true
  }, [])

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
      toast("Something went wrong, please check your form data or try again later", { type: "error" })
      } catch (error) {
        console.log(error)
        toast("Something went wrong, please check your form data or try again later", { type: "error" });        
      }
  }



  return (
    <div className="App">
      <ToastContainer />
      <h1 style={{ color: "#a6a6a6", paddingTop: "2rem" }}>
        Axe Throwing Agreement & Liability Waiver
      </h1>
      <Row className='padding-x-xl'>
        <Col className='offset-md-2' sm='12' md='8' style={{ background: 'white', padding: '40px' }}>
          {/* <Form inline action="https://mailthis.to/info@jacksaxes.co" method="POST"> */}
          <Form inline onSubmit={handleSubmit}>
            <p className='warning'>Warning! You’re Throwing Sharp, Pointy, Deadly Things…</p>
            <p className='warning'>If You Haven’t Figured It Out Yet Throwing Axes is Hazardous to Your Health.</p>
            <p className='warning'>Serious Injury and/or Death Can Occur… PLEASE READ CAREFULLY!</p>
            <p class="info">Release of liability, waiver of claims, assumption of risks and indemnity agreement. By initializing and/or signing this document you are waiving certain legal rights, including the right to sue.</p>
            <p>I, (the undersigned) wish to participate in Jack's Axes - Axe Throwing LLC at a mobile
              event at my own risk. I am aware that the activity is HAZARDOUS, physically strenuous and involves certain risks. Those
              risks include but are not limited to; the risk of property damage, serious injury, paralysis, permanent disability, loss of
              limbs resulting from my negligence and/or others, malfunction of the equipment and injuries resulting from the
              throwing instruments (axes, knives, stars, etc.) and/or other participants not using proper safety procedures. In
              addition, I recognize that throwing axes could result in permanent injury or death.</p>
            <p>
              I also understand that there is an inherent risk of injury to myself and others from these factors, from the equipment,
              and from other players and even though the activity is supervised by Jack's Axes - Axe Throwing LLC personnel that I am
              solely responsible for the safety, and wellbeing of myself and the minors in my care.
            </p>
            <p>
              Despite these and other risks, and with full understanding of such risks, I wish to participate in the axe throwing
              and hereby assume the risks. I hereby hold the Jack's Axes - Axe Throwing LLC (Operator) harmless and indemnify them
              against any or all claims, action suits, procedures, cost expenses (including attorney’s fees and expenses), damages and
              liabilities arising out of, connected with, or resulting from axe throwing. Including without limitation, those resulting
              from the manufacture, selection delivery, possession, use or operation of such equipment.
            </p>
            <p>
              I understand that it is recommended that I have accidental medical coverage and agree that if I do not have accidental
              medical coverage, I will be financially responsible for any and all charges and fees incurred in the rendering of said
              treatment.
            </p>
            <p>
              In case of an injury, I authorize the staff of Jack's Axes - Axe Throwing LLC to render first aid and I hereby authorize the
              Jack's Axes - Axe Throwing LLC staff to act for me in case of an emergency. I also waive and release Jack's Axes - Axe
              Throwing LLC from any and all liability for any and all injuries and illness that occur while participating in axe throwing.
            </p>
            <p>
              I agree to obey the Safety Instructions and Rules and to further use the equipment so as not to injure myself or others. I
              agree that my right to participate in axe throwing and use the equipment may be terminated without refund if I fail to
              follow such Safety Instructions and Rules.
            </p>
            <p>
              I accept full responsibility for return of all equipment in good condition or to pay replacement cost upon termination of
              the game.
            </p>
            <p>
              I, on behalf of myself, my estate, heirs, executors, administrators and assigns do hereby indemnify the owners of Jack's
              Axes - Axe Throwing LLC, their suppliers, and their respective agents, officers and employees from any and all claims,
              actions, lawsuits, procedures, costs, expenses, damages and/or liabilities whatsoever connected with, or resulting
              from axethrowing or spectating and from the use of equipment or premises whether resulting from the negligence of any party or
              otherwise. I further agree to indemnify the same said parties against any and all liabilities that may arise between myself
              and a third party.
            </p>
            <p>
              Photo & Video Release: I hereby irrevocably grant Jack's Axes - Axe Throwing LLC, its successors and partners the right
              to record my likeness and/or voice on tape, film or digital media. I also allow them to edit such tape, film, or digital
              media at their discretion and to incorporate the same into video, TV, radio, web or print advertisement, or video for
              Jack's Axes - Axe Throwing LLC promotions without payment of fees.
            </p>
            <hr></hr>
            <Row>
              <Col sm='10'>
                <label for='understand'>
                  I have read and fully understand this “Axe Throwing Agreement and Liability Waiver” and recognize that it is legally
                  binding contract. If I have any doubts concerning any aspect of its content, I will not participate until I obtain legal advice.
                  I certify that I am at least 18 years of age (Minors see below) and in good health and do not suffer from a heart condition
                  or other aliments/conditions which could be exacerbated by the exertion involved in axe throwing and that I further intend
                  to be bound by this agreement.
                </label>
              </Col>
              <Col sm='2'>
                <Input id='understand' name='understand' type='checkbox' disabled={minor}></Input>
                {!minor && ' *'}
              </Col>
            </Row>
            <hr />
            <Row>
              <p class="info">Participant’s Information:</p>
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
                      id="emergancy"
                      name="emergancy"
                      placeholder="Emergancy Contact Number"
                      type="text"
                    />
                    <Label for="emergancy">
                      Emergancy Contact Number
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

                <Col lg='6' sm='12'>
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

                <Col lg='6' sm='12'>
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
                    <p>(typing your name above counts as your legal signature)</p>

                  </FormGroup>
                </Col>
              </Row>

              {minor && (
                <>
                  <hr />
                  <p class="info">FOR PARTICIPANTS OF MINORITY AGE</p>
                  <p>(under age 18 at the time of registration)</p>
                  <p>
                    This is to certify that I, as parent/guardian with legal responsibility for this participant, do consent and agree to his/her
                    release as provided above of all the releases, and for myself, my heirs, assigns, and next of kin. I release and agree
                    to indemnify and hold harmless Jack's Axes - Axe Throwing LLC from any and all liabilities incident to my minor child's
                    involvement or participation in these programs as provided above, EVEN IF ARISING FROM THEIR NEGLIGENCE, to
                    the fullest extent permitted by law.
                  </p>
                  <p>Please ensure the child's name is entered above as a “Participant.”</p>
                  <Row>
                    <Col sm='10'>
                      <label for='gunderstand'>
                        I declare I am the legal parent/guardian of this minor child.
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
                    <p class="info">Legal Parent/Guardian's Name:</p>
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
                        <p>(typing your name above counts as your legal signature)</p>
                      </FormGroup>
                    </Col>
                    <p class="info">Please Note: Waivers are kept on file and contract remains valid until written notice is received to terminate such agreement.</p>
                  </Row>

                </>
              )}
            </Row>
            <Button>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default Waiver