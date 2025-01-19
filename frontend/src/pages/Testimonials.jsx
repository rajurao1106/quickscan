import React from 'react'
import testimonial1 from '../assets/Testimonials/testimonial1.jpeg'
import testimonial2 from '../assets/Testimonials/testimonial2.jpeg'
import testimonial3 from '../assets/Testimonials/testimonial3.jpeg'
import testimonial4 from '../assets/Testimonials/testimonial4.jpeg'

export default function Testimonials() {
  return (
    <section className='w-full flex flex-col justify-center items-center'>
      <div className="w-full max-w-[1200px] flex flex-col justify-center items-center pt-[5rem]">
        <h1 className='text-4xl font-bold mb-5'>Public Cheers for Us!</h1>
        <div className="w-full flex flex-wrap justify-center items-center">
        <img src={testimonial1} alt="" className='w-[16rem] rounded-xl m-5'/>
            <img src={testimonial2} alt="" className='w-[16rem] rounded-xl m-5'/>
            <img src={testimonial3} alt="" className='w-[16rem] rounded-xl m-5'/>
            <img src={testimonial4} alt="" className='w-[16rem] rounded-xl m-5'/>
            <img src={testimonial1} alt="" className='w-[16rem] rounded-xl m-5'/>
            <img src={testimonial2} alt="" className='w-[16rem] rounded-xl m-5'/>
            <img src={testimonial3} alt="" className='w-[16rem] rounded-xl m-5'/>
            <img src={testimonial4} alt="" className='w-[16rem] rounded-xl m-5'/>
            <img src={testimonial1} alt="" className='w-[16rem] rounded-xl m-5'/>
            <img src={testimonial2} alt="" className='w-[16rem] rounded-xl m-5'/>
            <img src={testimonial3} alt="" className='w-[16rem] rounded-xl m-5'/>
            <img src={testimonial4} alt="" className='w-[16rem] rounded-xl m-5'/>
            <img src={testimonial1} alt="" className='w-[16rem] rounded-xl m-5'/>
            <img src={testimonial2} alt="" className='w-[16rem] rounded-xl m-5'/>
            <img src={testimonial3} alt="" className='w-[16rem] rounded-xl m-5'/>
            <img src={testimonial4} alt="" className='w-[16rem] rounded-xl m-5'/>
            
        </div>
      </div>
    </section>
  )
}
