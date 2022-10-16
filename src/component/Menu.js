import Geprek from '../images/geprek.png'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const FeatureData = [
  {
    title: 'Paket Geprek',
    imgUrl: Geprek,
    price: 'Rp.15.000',
  },

  {
    title: 'Paket Geprek pedas',
    imgUrl: Geprek,
    price: 'Rp.15.000',
  },
  {
    title: 'Paket Geprek biasa',
    imgUrl: Geprek,
    price: 'Rp.15.000',
  },

  {
    title: 'Paket Geprek biasa',
    imgUrl: Geprek,
    price: 'Rp.15.000',
  },

  {
    title: 'Paket Geprek biasa',
    imgUrl: Geprek,
    price: 'Rp.15.000',
  },
  {
    title: 'Paket Geprek biasa',
    imgUrl: Geprek,
    price: 'Rp.15.000',
  },
  {
    title: 'Paket Geprek biasa',
    imgUrl: Geprek,
    price: 'Rp.15.000',
  },
  {
    title: 'Paket Geprek biasa',
    imgUrl: Geprek,
    price: 'Rp.15.000',
  },
]

function Menu() {
  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center mx-auto"
        style={{ marginTop: '10px' }}
      >
        <div className="m-5" style={{ width: '70%' }}>
          <h2 className="fw-bold mb-4">Geprek Bensu, Menus</h2>
          <div className="d-flex justify-content-between flex-wrap">
            {FeatureData.map((item) => {
              return (
                <Card style={{ width: '14rem' }} className="p-2 mb-3">
                  <Card.Img variant="top" src={item.imgUrl} />
                  <Card.Body className="py-3 px-1">
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text className="text-danger">{item.price}</Card.Text>
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
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
