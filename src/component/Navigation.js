import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Icon from '../images/Icon.png'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Register from '../images/Register.png'
import Login from '../images/Login.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import Export from '../images/export.png'

import FP from '../images/fotoprofile.png'
import Partner from '../images/partner.png'
import Profile from '../images/profile.png'
import Cart from '../images/cart.png'
import Dropdown from 'react-bootstrap/Dropdown'
import Product from '../images/product.png'
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

const Navigation = (props) => {
  const [isLoggedin, setIsLoggedin] = useState(false)
  const [admin, setAdmin] = useState(false)

  return (
    <Navbar style={{ backgroundColor: '#FFC700' }} expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img
              src={Icon}
              width="125"
              height="40"
              className="d-inline-block align-top"
              alt="ok"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto justify-content-right"
            style={{ maxHeight: '50px' }}
            navbarScroll
          ></Nav>
          {isLoggedin ? (
            <User logout={() => setIsLoggedin(!isLoggedin)} />
          ) : admin ? (
            <Admin logoutAdmin={() => setAdmin(!admin)} />
          ) : (
            <GuestPage
              login={() => setIsLoggedin(!isLoggedin)}
              loginAdmin={() => setAdmin(!admin)}
            />
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

//LOGIN ADMIN

function Admin(props) {
  const navigate = useNavigate()
  const handleProfile = (e) => {
    e.preventDefault()
    navigate('/Profile')
  }
  const handleAddproduk = (e) => {
    e.preventDefault()
    navigate('/Addproduk')
  }
  return (
    <div className="d-flex">
      <Dropdown>
        <Dropdown.Toggle variant="transparent" id="dropdown-basic">
          <img src={Partner} alt="" />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={handleProfile}>
            <img style={{ marginRight: '5px' }} src={Profile} alt="" />
            Profile
          </Dropdown.Item>

          <Dropdown.Item onClick={handleAddproduk}>
            <img style={{ marginRight: '5px' }} src={Product} alt="" />
            Add Product
          </Dropdown.Item>

          <Dropdown.Item onClick={props.logoutAdmin}>
            <img style={{ marginRight: '5px' }} src={Export} alt="" />
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

//LOGIN ADMIN

function GuestPage(props) {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [show1, updateShow] = useState(false)
  const handleClose1 = () => updateShow(false)
  const handleShow1 = () => updateShow(true)

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const account = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const submit = (e) => {
    e.preventDefault()

    if (form.email === 'admin@mail.com') {
      return props.loginAdmin()
    } else if (form.email === 'user@mail.com') {
      return props.login()
    } else {
      alert('email salah')
    }
  }

  return (
    <div>
      <div>
        <div>
          <button className="btn btn-dark  px-5 me-3" onClick={handleShow1}>
            Register
          </button>

          <button className="btn btn-dark px-5" onClick={handleShow}>
            Login
          </button>
        </div>
        <Modal show={show1} onHide={handleClose1}>
          <Modal.Header closeButton>
            <Modal.Title>
              <img src={Register} alt="Register" />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlEmail">
                <Form.Control type="email" placeholder="Email" autoFocus />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlPassword"
              >
                <Form.Control
                  type="password"
                  placeholder="Password"
                  autoFocus
                  rows={3}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlFullName"
              >
                <Form.Control
                  type="FullName"
                  placeholder="FullName"
                  autoFocus
                  rows={3}
                />
              </Form.Group>
              <Form.Select size="md" className="mb-3">
                <option>Jenis Kelamin</option>
                <option>Laki-laki</option>
                <option>Wanita</option>
              </Form.Select>
              <Form.Group className="mb-3" controlId="exampleForm.ControlPhone">
                <Form.Control
                  type="Phone"
                  placeholder="Phone"
                  autoFocus
                  rows={3}
                />
              </Form.Group>

              <Form.Select size="md" className="mb-3">
                <option>As User</option>
                <option>Medan</option>
                <option>Palembang</option>
              </Form.Select>

              <Button
                className="mb-3 w-100"
                variant="dark"
                size="lg"
                onClick={handleClose1}
              >
                Register
              </Button>
              <p className="text-center">
                Already have an account ? klik{' '}
                <a
                  href="#"
                  onClick={() => {
                    handleShow()
                    handleClose1()
                  }}
                >
                  here
                </a>
              </p>
            </Form>
          </Modal.Body>
        </Modal>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <img src={Login} alt="Login" />
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email </Form.Label>
              <Form.Control
                name="email"
                value={form.email}
                onChange={account}
                type="email"
                placeholder="Email"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                autoFocus
                rows={3}
              />
            </Form.Group>

            <Button
              className="mb-3 w-100"
              onClick={submit}
              variant="dark"
              size="lg"
            >
              Login
            </Button>
            <p className="text-center">
              Dont Have an account ? klik{' '}
              <a
                href="#"
                onClick={() => {
                  handleShow1()
                  handleClose()
                }}
              >
                here
              </a>
            </p>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

// LOGIN USERR

function User(props) {
  const navigate = useNavigate()

  const handleProfile = (e) => {
    e.preventDefault()
    navigate('/ProfileUser')
  }
  const handleAddproduk = (e) => {
    e.preventDefault()
    navigate('/Addproduk')
  }

  return (
    <div className="d-flex">
      <Link to="/Cardorder">
        <div>
          <img className="me-4 mt-3" src={Cart} alt="" />
        </div>
      </Link>
      <div class=" position-relative" style={{ top: '25px', right: '17px' }}>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-circle  bg-danger">
          2<span class="visually-hidden"></span>
        </span>
      </div>

      <Dropdown>
        <Dropdown.Toggle variant="transparent" id="dropdown-basic">
          <img src={FP} alt="" />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={handleProfile}>
            <img style={{ marginRight: '5px' }} src={Profile} alt="" />
            Profile
          </Dropdown.Item>

          <Dropdown.Item
            onClick={() => {
              props.logout()
            }}
          >
            <img style={{ marginRight: '5px' }} src={Export} alt="" />
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
// LOGIN USERR

export default Navigation
