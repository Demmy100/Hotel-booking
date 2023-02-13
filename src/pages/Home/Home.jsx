import React from 'react'
import Calendar from '../../components/calendar/Calendar'
import FirstNav from '../../components/firstNav/FirstNav'
import HeaderSlider from '../../components/headerSlider/HeaderSlider'
import MainNav from '../../components/mainNav/MainNav'

const Home = () => {
  return (
    <div className='homeContainer'>
      <FirstNav/>
      <MainNav/>
      <HeaderSlider/>
      <Calendar/>
    </div>
  )
}

export default Home
