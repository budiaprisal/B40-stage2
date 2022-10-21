import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const DataNear = [
  {
    id: 1,
    username: 'jedeye__',
    image:
      'https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',
    follower: '1.1m',
    following: '1.2k',
  },
]
function Home() {
  return (
    <div style={{ backgroundColor: '#E5E5E5' }}>
      <div className="my-4 mx-auto" style={{ width: '75%' }}>
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
                      to="/Detail"
                      style={{ textDecoration: 'none', textColor: 'none' }}
                    >
                      <Card.Img variant="top" src={item.image} />
                    </Link>
                    <Card.Title
                      className="my-3 fw-bold"
                      style={{ fontSize: '15px ' }}
                    >
                      {item.username}
                    </Card.Title>

                    <Card.Subtitle className=" text-muted">
                      {item.following}
                    </Card.Subtitle>
                    <Card.Subtitle className=" text-muted">
                      {item.follower}
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
