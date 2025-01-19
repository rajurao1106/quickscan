import React from 'react'
import Hero from './Hero'
import WhyChooseUs from './WhyChooseUs'
import Clients from './Clients'
import CollectReviews from './CollectReviews'
import FAQ from './FAQ'
import Navbar from '../Navbar'
import NavbarUser from '../NavbarUser'

export default function HomepageUser() {
  return (
    <div>
      <Hero/>
      <WhyChooseUs/>
      <Clients/>
      <CollectReviews/>
      <FAQ/>
    </div>
  )
}
