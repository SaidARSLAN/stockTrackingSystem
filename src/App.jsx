import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import { Provider } from './context/MainContext'
import About from './sections/About'
import Hero from './sections/Hero'
import Learn from './sections/Learn'
import ChooseUs from './sections/ChooseUs'

function App() {

  return (
    <main className='w-full h-full overflow-x-hidden'>
      <Provider>
      <Nav />
      <section>
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
      </Provider>
    </main>
  )
}

export default App
