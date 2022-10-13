import Kopi from '../images/kopi.png'
import Card from 'react-bootstrap/Card'

import Button from 'react-bootstrap/Button'

import 'bootstrap/dist/css/bootstrap.min.css'

function Menu2() {
  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center mx-auto"
        style={{ marginTop: '10px' }}
      >
        <div className="m-5" style={{ width: '70%' }}>
          <h2 className="fw-bold mb-4">Minuman Kopi, Menu</h2>
          <div className="d-flex justify-content-between flex-wrap">
            <Card style={{ width: '14rem' }} className="p-2 mb-3">
              <Card.Img variant="top" src={Kopi} />
              <Card.Body className="py-3 px-1">
                <Card.Title>KOpi Satu Hati</Card.Title>
                <Card.Text className="text-danger">Rp 15.000</Card.Text>
                <Button
                  style={{
                    marginBottom: '-10px',
                    width: '100%',
                    backgroundColor: '#FFC700',
                    border: 'none',
                  }}
                  className="py-1 text-dark"
                >
                  Order
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }} className="p-2 mb-3">
              <Card.Img variant="top" src={Kopi} />
              <Card.Body className="py-3 px-1">
                <Card.Title>KOpi Satu Galau</Card.Title>
                <Card.Text className="text-danger">Rp 15.000</Card.Text>
                <Button
                  style={{
                    marginBottom: '-10px',
                    width: '100%',
                    backgroundColor: '#FFC700',
                    border: 'none',
                  }}
                  className="py-1 text-dark"
                >
                  Order
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }} className="p-2 mb-3">
              <Card.Img variant="top" src={Kopi} />
              <Card.Body className="py-3 px-1">
                <Card.Title>Kopi Kita</Card.Title>
                <Card.Text className="text-danger">Rp 15.000</Card.Text>
                <Button
                  style={{
                    marginBottom: '-10px',
                    width: '100%',
                    backgroundColor: '#FFC700',
                    border: 'none',
                  }}
                  className="py-1 text-dark"
                >
                  Order
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }} className="p-2 mb-3">
              <Card.Img variant="top" src={Kopi} />
              <Card.Body className="py-3 px-1">
                <Card.Title>Kopi Prmbanan</Card.Title>
                <Card.Text className="text-danger">Rp 15.000</Card.Text>
                <Button
                  style={{
                    marginBottom: '-10px',
                    width: '100%',
                    backgroundColor: '#FFC700',
                    border: 'none',
                  }}
                  className="py-1 text-dark"
                >
                  Order
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }} className="p-2 mb-3">
              <Card.Img variant="top" src={Kopi} />
              <Card.Body className="py-3 px-1">
                <Card.Title>Kopi</Card.Title>
                <Card.Text className="text-danger">Rp 15.000</Card.Text>
                <Button
                  style={{
                    marginBottom: '-10px',
                    width: '100%',
                    backgroundColor: '#FFC700',
                    border: 'none',
                  }}
                  className="py-1 text-dark"
                >
                  Order
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }} className="p-2 mb-3">
              <Card.Img variant="top" src={Kopi} />
              <Card.Body className="py-3 px-1">
                <Card.Title>Kopi </Card.Title>
                <Card.Text className="text-danger">Rp 15.000</Card.Text>
                <Button
                  style={{
                    marginBottom: '-10px',
                    width: '100%',
                    backgroundColor: '#FFC700',
                    border: 'none',
                  }}
                  className="py-1 text-dark"
                >
                  Order
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }} className="p-2 mb-3">
              <Card.Img variant="top" src={Kopi} />
              <Card.Body className="py-3 px-1">
                <Card.Title>Kopi Galau</Card.Title>
                <Card.Text className="text-danger">Rp 15.000</Card.Text>
                <Button
                  style={{
                    marginBottom: '-10px',
                    width: '100%',
                    backgroundColor: '#FFC700',
                    border: 'none',
                  }}
                  className="py-1 text-dark"
                >
                  Order
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '14rem' }} className="p-2 mb-3">
              <Card.Img variant="top" src={Kopi} />
              <Card.Body className="py-3 px-1">
                <Card.Title>Kopi Cinta</Card.Title>
                <Card.Text className="text-danger">Rp 15.000</Card.Text>
                <Button
                  style={{
                    marginBottom: '-10px',
                    width: '100%',
                    backgroundColor: '#FFC700',
                    border: 'none',
                  }}
                  className="py-1 text-dark"
                >
                  Order
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu2
