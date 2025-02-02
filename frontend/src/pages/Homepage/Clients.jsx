import React from 'react'
import client_img1 from '../../assets/Homepage/client-img1.png'
import client_img2 from '../../assets/Homepage/client-img2.png'
import client_img3 from '../../assets/Homepage/client-img3.png'
import client_img4 from '../../assets/Homepage/client-img4.png'
import client_img5 from '../../assets/Homepage/client-img5.png'


export default function Clients() {
  return (
    <section className="w-full flex flex-col justify-center items-center mb-10 py-20">
      <div className="w-full max-w-[1200px] flex flex-col justify-center items-center">
        <h1 className='text-3xl font-bold mb-5'>OUR VALUED CUSTOMERS</h1>
        <div className="flex justify-center w-[90%] flex-wrap items-center">
        <img src={client_img1} alt="" />
        <img src={client_img2} alt="" />
        <img src={client_img3} alt="" />
        <img src={client_img4} alt="" />
        <img src={client_img5} alt="" />

        </div>
      </div>
    </section>
  )
}