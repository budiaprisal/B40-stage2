import Container from 'react-bootstrap/Container'
import React from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

function Addproduk() {
  return (
    <div style={{ backgroundColor: '#E5E5E5', height: '100vh' }}>
      <Container className="d-flex justify-content-center align-items-center mx-auto">
        <div className="m-5" style={{ width: '90%' }}>
          <div>
            <h3 className="fw-bold mb-4">Add Product</h3>
            <div>
              <div className="d-flex justify-content-between">
                <InputGroup className="mb-3" style={{ width: '69%' }}>
                  <Form.Control
                    placeholder="Title"
                    aria-label="Title"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <InputGroup className="mb-3" style={{ width: '30%' }}>
                  <Form.Control
                    placeholder="Attach Image"
                    aria-label="Image"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </div>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Price"
                  aria-label="Price"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
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
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Addproduk
