import React from 'react'
import Nav from './Nav'
import Header from './Header'
import './assets/common/main.scss'
import './assets/common/media.scss'
import Intro from './Intro'
import SectionFilms from './SectionFilms'
const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Intro />
      <SectionFilms />
    </>      
  )
}

export default App

