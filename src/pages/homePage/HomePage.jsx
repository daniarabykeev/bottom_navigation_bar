import React from 'react'
import Kuba from "../../assets/kuba.jpg"

const HomePage = () => {
  return (
    <div className='text-center'>
      <p className='text-xl'>"Карманный доктор / Pocket Doc"</p>
      <img src={Kuba} alt="" />
    </div>
  )
}

export default HomePage