import Container from 'react-bootstrap/Container'
import React from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Map from '../images/map.png'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom'

function EditProfile() {
  const values = []
  const [fullscreen, setFullscreen] = useState(true)
  const [show, setShow] = useState(false)

  function handleShow(breakpoint) {
    setFullscreen(breakpoint)
    setShow(true)
  }
  return (
    <div>
      <Container
        className="d-flex justify-content-center align-items-center mx-auto"
        style={{ marginTop: '10px' }}
      >
        <div className="m-5" style={{ width: '90%' }}>
          <div>
            <h3 className="fw-bold mb-4">Edit Profile Partner </h3>
            <div>
              <div className="d-flex justify-content-between">
                <InputGroup className="mb-3" style={{ width: '69%' }}>
                  <Form.Control
                    placeholder="Full Name"
                    aria-label="FullName"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>

                <InputGroup className="mb-3" style={{ width: '30%' }}>
                  <Form.Control
                    placeholder="Attach Image"
                    aria-label="Image"
                    type="textfile"
                    img
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </div>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Phone"
                  aria-label="Phone"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <div className="d-flex justify-content-between">
                <InputGroup className="mb-3" style={{ width: '69%' }}>
                  <Form.Control
                    placeholder="Location"
                    aria-label="Location"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <Button
                  className="mb-3 "
                  onClick={handleShow}
                  style={{ width: '30%', backgroundColor: '#433434' }}
                >
                  Select On Map <img src={Map} alt="map"></img>
                </Button>
                <>
                  {values.map((v, idx) => (
                    <Button
                      key={idx}
                      className="me-2 mb-2"
                      onClick={() => handleShow(v)}
                    >
                      Full screen
                      {typeof v === 'string' && `below ${v.split('-')[0]}`}
                    </Button>
                  ))}
                  <Modal
                    show={show}
                    fullscreen={fullscreen}
                    onHide={() => setShow(false)}
                  >
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body>
                      <iframe
                        style={{ width: '100%', height: '100%' }}
                        src="https://maps.google.com/maps?q=Dumbways%20&t=&z=17&ie=UTF8&iwloc=&output=embed"
                      ></iframe>{' '}
                    </Modal.Body>
                  </Modal>
                </>
              </div>
            </div>
            <Link to="/IncomeTransaction">
              <Button
                className="mt-5"
                style={{
                  width: '30%',
                  backgroundColor: '#433434',
                  float: 'right',
                }}
              >
                Save
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default EditProfile
