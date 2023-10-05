import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Learn from '../sections/Learn'
import ChooseUs from '../sections/ChooseUs'
import CoWorkers from '../sections/CoWorkers'
import Footer from '../sections/Footer'
import { Provider } from '../context/MainContext'

const MainPage = () => {
  return (
    <Provider >
        <section className='w-full h-full heroBackground'>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section className='flex items-center justify-center w-full'>
        <Learn />
      </section>
      <section className='flex items-center justify-center w-full'>
        <ChooseUs />
      </section>
      <section>
        <CoWorkers />
      </section>
      <Footer />
      </Provider>
)
}

export default MainPage