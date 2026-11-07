import React from 'react'
import Navbar from '@/tem-five/Navbar'
import Hero from '@/tem-five/Hero'
import About from '@/tem-five/About'
import Services from '@/tem-five/Services'
import WhyChooseUs from '@/tem-five/WhyChooseUs'
import LocationMap from '@/tem-five/LocationMap'
import Footer from '@/tem-five/Footer'
import ScrollToTop from '@/tem-five/ScrollToTop'
import FloatingWhatsApp from '@/tem-five/FloatingWhatsApp'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <LocationMap />
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </main>
  )
}
