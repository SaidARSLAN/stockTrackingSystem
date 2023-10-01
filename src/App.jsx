import './App.css'
import Nav from './components/Nav'
import { Provider } from './context/MainContext'
import About from './sections/About'
import Companies from './sections/Companies'
import Hero from './sections/Hero'

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
      <section>
        <Companies />
      </section>
      </Provider>
    </main>
  )
}

export default App
