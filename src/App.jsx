import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import { Provider } from './context/MainContext'
import About from './sections/About'
import Hero from './sections/Hero'
import Learn from './sections/Learn'
import ChooseUs from './sections/ChooseUs'
import CoWorkers from './sections/CoWorkers'
import Footer from './sections/Footer'
import TopFiveCompanies from './sections/TopFiveCompanies'

function App() {

  return (
    <main className='w-full h-full overflow-x-hidden'>
      <Provider>
      <Nav />
      <section>
        <Hero />
      </section>
      <section>
        <TopFiveCompanies />
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
    </main>
  )
}

export default App
