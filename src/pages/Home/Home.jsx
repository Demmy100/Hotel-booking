import React from 'react'
import About from '../../components/about/About'
import Calendar from '../../components/calendar/Calendar'
import FirstNav from '../../components/firstNav/FirstNav'
import Footer from '../../components/footer/Footer'
import Gallery from '../../components/gallery/Gallery'
import HeaderSlider from '../../components/headerSlider/HeaderSlider'
import Hotel from '../../components/hotel/Hotel'
import MainNav from '../../components/mainNav/MainNav'

const Home = () => {
  return (
    <div className='homeContainer'>
      <FirstNav/>
      <MainNav/>
      <HeaderSlider/>
      <Calendar/>
      <About/>
      <Hotel/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default Home
