import React from 'react'
import Kfc from '../images/kfc.png'
import Jco from '../images/jco.png'
import Pizza from '../images/pizza.png'

const FeatureData = [
  {
    title: 'Quick Delivery',
    imgUrl: Kfc,
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consectetur porro excepturi neque. Quisquam laboriosam amet quis quibusdam modi, nostrum numquam corporis eveniet corrupti. Culpa asperiores laudantium corporis delectus a!',
  },

  {
    title: 'Borzo Delivery',
    imgUrl: Jco,
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consectetur porro excepturi neque. Quisquam laboriosam amet quis quibusdam modi, nostrum numquam corporis eveniet corrupti. Culpa asperiores laudantium corporis delectus a!',
  },
  {
    title: 'Speedy Delivery',
    imgUrl: Pizza,
    desc:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consectetur porro excepturi neque. Quisquam laboriosam amet quis quibusdam modi, nostrum numquam corporis eveniet corrupti. Culpa asperiores laudantium corporis delectus a!',
  },
]
function Burger() {
  return (
    <div>
      {FeatureData.map((item, index) => {
        return (
          <div lg="4" md="4" key={index}>
            <img src={item.imgUrl} />
            <h5>{item.title}</h5>
            <p>{item.desc}</p>
          </div>
        )
      })}
    </div>
  )
}
export default Burger
