import React from 'react'
import Hero from '../sections/Hero'
import ChooseUs from '../sections/ChooseUs'
import Footer from '../sections/Footer'
import { Provider } from '../context/MainContext'

const MainPage = () => {

  return (
    <Provider >
        <section>
        <Hero />
      </section>
      <section>
        <ChooseUs />
      </section>
      <Footer />
      </Provider>
)
}

export default MainPage