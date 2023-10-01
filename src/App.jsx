import './App.css'
import Nav from './components/Nav'
import Hero from './sections/Hero'

function App() {

  return (
    <main className='w-full h-full bg-black'>
      <Nav />
      <section>
        <Hero />
      </section>
    </main>
  )
}

export default App
