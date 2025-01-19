import React from 'react'
import Hero from './Hero'
import WhyChooseUs from './WhyChooseUs'
import Clients from './Clients'
import CollectReviews from './CollectReviews'
import FAQ from './FAQ'
import Navbar from '../Navbar'

export default function Homepage() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <WhyChooseUs/>
      <Clients/>
      <CollectReviews/>
      <FAQ/>
    </div>
  )
}
