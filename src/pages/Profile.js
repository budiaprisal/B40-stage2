import Icon from '../images/Icon.png'
import Container from 'react-bootstrap/Container'
import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import PP from '../images/Profilpartner.png'

function Profile() {
  return (
    <div style={{ backgroundColor: '#E5E5E5', height: '100vh' }}>
      <Container className="d-flex justify-content-center align-items-center mx-auto">
        <div className="m-5" style={{ width: '80%' }}>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <div className="d-flex flex-column">
                <h3 className="fw-bold mb-4">Profile Partner</h3>

                <img src={PP} width="150" alt="logo" className="mb-4" />
                <Link to="/EditProfile">
                  <Button
                    style={{ backgroundColor: '#433434', border: 'none' }}
                  >
                    Edit Profile
                  </Button>
                </Link>
              </div>
              <div className="ms-1" style={{ marginTop: '55px' }}>
                <h5 style={{ color: '#613D2B' }}>Full Name</h5>
                <p style={{ marginTop: '-12px' }}>Andi</p>
                <h5 style={{ color: '#613D2B' }}>Email</h5>
                <p style={{ marginTop: '-12px' }}>bensu@gmail.com</p>
                <h5 style={{ color: '#613D2B' }}>Phone</h5>
                <p style={{ marginTop: '-12px' }}>083896833122</p>
              </div>
            </div>
            <div style={{ width: '45%' }}>
              <h3 className="fw-bold mb-4">History Transaction</h3>
              <div
                style={{ backgroundColor: 'white' }}
                className="p-3 d-flex justify-content-between"
              >
                <div>
                  <p className="fw-bold">Geprek Bensu</p>
                  <p style={{ marginTop: '-12px', fontSize: '13px' }}>
                    <strong>Saturday</strong>, 12 March 2021
                  </p>
                  <p
                    style={{ fontSize: '13px', marginBottom: '0px' }}
                    className="fw-bold"
                  >
                    Total : Rp 45.000
                  </p>
                </div>
                <div>
                  <img src={Icon} width="130" alt="logo" />
                  <br></br>
                  <Button
                    className="py-0 px-5"
                    style={{
                      fontSize: '12px',
                      marginBottom: '-35px',
                      backgroundColor: '#E5FFF2',
                      color: '#00FF47',
                      border: 'none',
                    }}
                  >
                    Finished
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Profile
