import BK from '../images/BK.png'
import Sbux from '../images/sbux.png'
import KFC from '../images/kfc.png'
import Jco from '../images/jco.png'

function Restaurant() {
  return (
    <div className="my-4 mx-auto" style={{ width: '75%' }}>
      <div>
        <h3 className="fw-bold">Popular Restaurant</h3>
      </div>
      <div className="d-flex justify-content-evenly ">
        <div
          className="my-5 p-3 rounded"
          style={{ backgroundColor: 'silver', width: '23%' }}
        >
          <img src={BK} alt="bk" />
          <span className="fw-bold ms-3" style={{ fontSize: '18px' }}>
            Burger King
          </span>
        </div>
        <div
          className="my-5 p-3 rounded"
          style={{ backgroundColor: 'silver', width: '23%' }}
        >
          <img src={Sbux} alt="bk" />
          <span className="fw-bold ms-3" style={{ fontSize: '18px' }}>
            Starbucks
          </span>
        </div>
        <div
          className="my-5 p-3 rounded"
          style={{ backgroundColor: 'silver', width: '23%' }}
        >
          <img src={KFC} alt="bk" />
          <span className="fw-bold ms-3" style={{ fontSize: '18px' }}>
            KFC
          </span>
        </div>
        <div
          className="my-5 p-3 rounded"
          style={{ backgroundColor: 'silver', width: '23%' }}
        >
          <img src={Jco} alt="bk" />
          <span className="fw-bold ms-3" style={{ fontSize: '18px' }}>
            Jco
          </span>
        </div>
      </div>
    </div>
  )
}
export default Restaurant
