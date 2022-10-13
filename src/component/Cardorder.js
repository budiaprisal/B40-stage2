import React from 'react'
import Map from '../images/map.png'
import Minus from '../images/-.png'
import Bin from '../images/bin.png'
import Plus from '../images/+.png'
import Geprek from '../images/geprek.png'
import Container from 'react-bootstrap/Container'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { useState } from 'react'
import Kk from '../images/maps.png'
import Modal from 'react-bootstrap/Modal'

function Cardorder() {
  const [counter, setCounter] = useState(0)
  const [counter1, setCounter1] = useState(0)
  const [qty, setQty] = useState(0)

  const [harga, setHarga] = useState(0)
  const [harga1, setHarga1] = useState(0)
  const [subTotal, setSubTotal] = useState(0)
  const [total, setTotal] = useState(0)

  function Add() {
    return (
      setCounter(counter + 1),
      setHarga(harga + 15000),
      setSubTotal(subTotal + 15000),
      setQty(qty + 1),
      setTotal(total + 15000)
    )
  }

  function Add1() {
    return (
      setCounter1(counter1 + 1),
      setHarga1(harga1 + 15000),
      setSubTotal(subTotal + 15000),
      setQty(qty + 1),
      setTotal(total + 15000)
    )
  }

  function Less() {
    if (counter > 0) {
      return (
        setCounter(counter - 1),
        setHarga(harga - 15000),
        setSubTotal(subTotal - 15000),
        setQty(qty - 1),
        setTotal(total - 15000)
      )
    }
  }

  const values = []
  const [fullscreen, setFullscreen] = useState(true)
  const [show, setShow] = useState(false)

  function handleShow(breakpoint) {
    setFullscreen(breakpoint)
    setShow(true)
  }

  function Less1() {
    if (counter1 > 0) {
      return (
        setCounter1(counter1 - 1),
        setHarga1(harga1 - 15000),
        setSubTotal(subTotal - 15000),
        setQty(qty - 1),
        setTotal(total - 15000)
      )
    }
  }

  function Delete() {
    return (
      setCounter(counter * 0),
      setHarga(harga * 0),
      setSubTotal(subTotal - 15000 * counter),
      setQty(qty - counter),
      setTotal(total - 15000 * counter)
    )
  }

  function Delete1() {
    return (
      setCounter1(counter1 * 0),
      setHarga1(harga1 * 0),
      setSubTotal(subTotal - 15000 * counter1),
      setQty(qty - counter1),
      setTotal(total - 15000 * counter1)
    )
  }

  return (
    <div>
      <Container
        className="d-flex justify-content-center align-items-center mx-auto"
        style={{ marginTop: '10px' }}
      >
        <div className="m-5" style={{ width: '90%' }}>
          <h3 className="fw-bold mb-4">Geprek Bensu</h3>
          <div>
            <p>Delivery Location</p>
            <div className="mb-4 ">
              <InputGroup
                className="mb-3 d-flex justify-content-between "
                style={{ width: '100%' }}
              >
                <Form.Control
                  placeholder="Recipient's Location"
                  aria-label="Recipient's location"
                  aria-describedby="basic-addon2"
                  className="py-2 me-4"
                />

                <Button
                  onClick={handleShow}
                  style={{
                    width: '20%',
                    backgroundColor: '#433434',
                    border: 'none',
                  }}
                >
                  Select on map <img src={Map} alt="map"></img>
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
                      <img
                        src={Kk}
                        alt="maps"
                        style={{ width: '100%', height: '100%' }}
                      />
                    </Modal.Body>
                  </Modal>
                </>
              </InputGroup>
            </div>
            <p>Review Your Order</p>
            <div className="d-flex">
              <div style={{ width: '60%' }}>
                <hr style={{ opacity: '100%' }}></hr>
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <img
                      src={Geprek}
                      style={{
                        width: '100px',
                        height: '100px',
                        objectFit: 'cover',
                      }}
                      alt="geprek"
                    ></img>
                    <div className="align-self-center">
                      <p className="ms-3">Paket Geprek</p>

                      <Button
                        style={{
                          width: '0px',
                          height: '0px',
                          backgroundColor: '#EFEFEF',
                          border: 'none',
                          marginTop: '-30px',
                          marginLeft: '5px',
                          marginRight: '15px',
                        }}
                        onClick={() => {
                          Less()
                        }}
                      >
                        <img src={Minus} alt="geprek"></img>
                      </Button>
                      <span>{counter}</span>
                      <Button
                        style={{
                          width: '0px',
                          height: '0px',
                          backgroundColor: '#EFEFEF',
                          border: 'none',
                          marginTop: '-30px',
                          marginLeft: '5px',
                        }}
                        onClick={() => {
                          Add()
                        }}
                      >
                        <img src={Plus} alt="geprek"></img>
                      </Button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-end">
                    <div>
                      <p className="text-danger">Rp{harga}</p>
                      <img
                        src={Bin}
                        alt="sampah"
                        className="ms-5"
                        onClick={() => {
                          Delete()
                        }}
                      ></img>
                    </div>
                  </div>
                </div>
                <hr style={{ opacity: '100%' }}></hr>
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    <img
                      src={Geprek}
                      style={{
                        width: '100px',
                        height: '100px',
                        objectFit: 'cover',
                      }}
                      alt="geprek"
                    ></img>
                    <div className="align-self-center">
                      <p className="ms-3">Paket Geprek</p>

                      <Button
                        style={{
                          width: '0px',
                          height: '0px',
                          backgroundColor: '#EFEFEF',
                          border: 'none',
                          marginTop: '-30px',
                          marginLeft: '5px',
                          marginRight: '15px',
                        }}
                        onClick={() => {
                          Less1()
                        }}
                      >
                        <img src={Minus} alt="geprek"></img>
                      </Button>
                      <span>{counter1}</span>
                      <Button
                        style={{
                          width: '0px',
                          height: '0px',
                          backgroundColor: '#EFEFEF',
                          border: 'none',
                          marginTop: '-30px',
                          marginLeft: '5px',
                        }}
                        onClick={() => {
                          Add1()
                        }}
                      >
                        <img src={Plus} alt="geprek"></img>
                      </Button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-end">
                    <div>
                      <p className="text-danger">Rp{harga1}</p>
                      <img
                        src={Bin}
                        alt="sampah"
                        className="ms-5"
                        onClick={() => {
                          Delete1()
                        }}
                      ></img>
                    </div>
                  </div>
                </div>
                <hr style={{ opacity: '100%' }}></hr>
              </div>
              <div style={{ width: '40%' }} className="ms-5 ">
                <hr style={{ opacity: '100%' }}></hr>
                <div className="d-flex justify-content-between">
                  <div>
                    <p>Subtotal</p>
                    <p>Qty</p>
                    <p>Ongkir</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p className="text-danger">Rp{subTotal}</p>
                    <p>{qty}</p>
                    <p className="text-danger">Rp10.000</p>
                  </div>
                </div>
                <hr style={{ marginTop: '-3px', opacity: '100%' }}></hr>
                <div className="d-flex justify-content-between">
                  <p className="text-danger">Total</p>
                  <p className="text-danger">Rp{total + 10000}</p>
                </div>
              </div>
            </div>
            <Button
              style={{
                float: 'right',
                backgroundColor: '#433434',
                border: 'none',
              }}
              className="px-5"
            >
              Order
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Cardorder
