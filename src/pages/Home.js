import pizza from '../images/pizza.png'
import line from '../images/line.jpg'
import BK from '../images/BK.png'
import Sbux from '../images/sbux.png'
import KFC from '../images/kfc.png'
import Jco from '../images/jco.png'
import Geprek from '../images/geprek.png'
import Nasgor from '../images/nasgor.png'
import Pecel from '../images/pecel.png'
import Kopi from '../images/kopi.png'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const FeatureData = [
  {
    title: 'Burger King',
    imgUrl: BK,
  },

  {
    title: 'Starbucks',
    imgUrl: Sbux,
  },
  {
    title: 'KFC',
    imgUrl: KFC,
  },
  {
    title: 'Jco',
    imgUrl: Jco,
  },
]

const DataNear = [
  {
    title: '  Geprek Bensu',
    imgUrl: Geprek,
    jarak: '0.2 KM',
  },

  {
    title: '  Nasi Goreng Mas Rony',
    imgUrl: Nasgor,
    jarak: '0.6 KM',
  },
  {
    title: ' Pecel Ayam Prambanan',
    imgUrl: Pecel,
    jarak: '0.6 KM',
  },
  {
    title: ' Kopi Kenangan',
    imgUrl: Kopi,
    jarak: '0.7 KM',
  },
]
function Home() {
  return (
    <div style={{ backgroundColor: '#E5E5E5' }}>
      <div className="d-flex justify-content-center align-items-center mx-auto bgyellow">
        <div className="m-5">
          <h1 className="fw-bold"> Are You Hungry ?</h1>
          <h1 className="fw-bold"> Express Home Delivery</h1>
          <div>
            <div className="d-flex">
              <img
                src={line}
                width="200px"
                alt="line"
                className="m-5 align-self-start ms-2"
              />
              <p style={{ width: '250px' }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Mollitia, odio id. Quasi tenetur ratione, voluptatum vitae
                expedita optio?
              </p>
            </div>
          </div>
        </div>
        <img src={pizza} width="400px" alt="pizza" className="m-5" />
      </div>
      <div className="my-4 mx-auto" style={{ width: '75%' }}>
        <div>
          <h3 className="fw-bold">Popular Restaurant</h3>
        </div>

        <div className="d-flex justify-content-evenly ">
          {FeatureData.map((item) => {
            return (
              <div
                className="my-5 p-3 rounded shadow"
                style={{
                  backgroundColor: 'white',
                  width: '23%',
                }}
              >
                <img src={item.imgUrl} alt="" />
                <span className="fw-bold ms-3" style={{ fontSize: '18px' }}>
                  {item.title}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="my-4 mx-auto" style={{ width: '75%' }}>
        <div>
          <h3 className="fw-bold">Restaurant Near You</h3>
        </div>

        <div className="d-flex justify-content-evenly  ">
          {DataNear.map((item) => {
            return (
              <div className="my-5 p-2 rounded ">
                <Card
                  style={{
                    width: '14rem',
                    borderRadius: '5px',
                    backgroundColor: '#FFFFFF',
                  }}
                >
                  <Card.Body>
                    <Link
                      to="/Menu"
                      style={{ textDecoration: 'none', textColor: 'none' }}
                    >
                      <Card.Img variant="top" src={item.imgUrl} />
                    </Link>
                    <Card.Title
                      className="my-3 fw-bold"
                      style={{ fontSize: '15px ' }}
                    >
                      {item.title}
                    </Card.Title>

                    <Card.Subtitle className=" text-muted">
                      {item.jarak}
                    </Card.Subtitle>
                  </Card.Body>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
