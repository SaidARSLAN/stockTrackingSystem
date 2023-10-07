import React from 'react'
import Hero from '../sections/Hero'
import ChooseUs from '../sections/ChooseUs'
import Footer from '../sections/Footer'
import { Provider } from '../context/MainContext'
import MarketPlace from '../sections/MarketPlace'
import Create from '../sections/Create'
const MainPage = () => {

  return (
    <Provider >
        <section className='py-12'>
        <Hero />
      </section>
      <MarketPlace />
      <section>
      </section>
      <section className='lg:py-36'>
        <ChooseUs />
      </section>
      <section className='py-24 w-full'>
        <Create />
      </section>
      <Footer />
      </Provider>
)
}

export default MainPage