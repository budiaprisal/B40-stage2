import pizza from '../images/pizza.png'
import line from '../images/line.jpg'
import Near from './Near'
import Restaurant from './Restaurant'
import Burger from './Burger'
function Header() {
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
                className="m-5 align-self-start"
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

      <Restaurant />
      <Near />
    </div>
  )
}

export default Header
