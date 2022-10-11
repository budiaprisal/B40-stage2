import Geprek from '../images/geprek.png'
import Nasgor from '../images/nasgor.png'
import Pecel from '../images/pecel.png'
import Kopi from '../images/kopi.png'
import Card from 'react-bootstrap/Card'

function Near() {
  return (
    <div className="my-4 mx-auto" style={{ width: '75%' }}>
      <div>
        <h3 className="fw-bold">Restaurant Near You</h3>
      </div>
      <div className="d-flex justify-content-evenly ">
        <div className="my-5 p-2 rounded">
          <Card
            style={{
              width: '14rem',
              borderRadius: '5px',
              backgroundColor: '#FFFFFF',
            }}
          >
            <Card.Body>
              <Card.Img variant="top" src={Geprek} />
              <Card.Title
                className="my-3 fw-bold"
                style={{ fontSize: '15px ' }}
              >
                Geprek Bensu
              </Card.Title>
              <Card.Subtitle className=" text-muted">0,2 KM</Card.Subtitle>
            </Card.Body>
          </Card>
        </div>
        <div className="my-5 p-2 rounded">
          <Card
            style={{
              width: '14rem',
              borderRadius: '5px',
              backgroundColor: '#FFFFFF',
            }}
          >
            <Card.Body>
              <Card.Img variant="top" src={Nasgor} />
              <Card.Title
                className="my-3 fw-bold "
                style={{ fontSize: '15px ' }}
              >
                Nasi Goreng Mas Rony
              </Card.Title>
              <Card.Subtitle className=" text-muted">0,6 KM</Card.Subtitle>
            </Card.Body>
          </Card>
        </div>
        <div className="my-5 p-2 rounded">
          <Card
            style={{
              width: '14rem',
              borderRadius: '5px',
              backgroundColor: '#FFFFFF',
            }}
          >
            <Card.Body>
              <Card.Img variant="top" src={Pecel} />
              <Card.Title
                className="my-3 fw-bold"
                style={{ fontSize: '15px ' }}
              >
                Pecel Ayam Prambanan
              </Card.Title>
              <Card.Subtitle className=" text-muted">0,6 KM</Card.Subtitle>
            </Card.Body>
          </Card>
        </div>
        <div className="my-5 p-2 rounded">
          <Card
            style={{
              width: '14rem',
              borderRadius: '5px',
              backgroundColor: '#FFFFFF',
            }}
          >
            <Card.Body>
              <Card.Img variant="top" src={Kopi} />
              <Card.Title
                className="my-3 fw-bold"
                style={{
                  fontSize: '18px ',
                  fontFamily: 'Abhaya Libre ExtraBold',
                  fontStyle: 'normal',
                  fontWeight: '400px',
                }}
              >
                Kopi Kenangan
              </Card.Title>
              <Card.Subtitle className=" text-muted">1,6 KM</Card.Subtitle>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}
export default Near
