import './App.css'
import Nav from './components/Nav'
import About from './sections/About'
import Hero from './sections/Hero'

function App() {

  return (
    <main className='w-full h-full overflow-x-hidden'>
      <Nav />
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
    </main>
  )
}

export default App
