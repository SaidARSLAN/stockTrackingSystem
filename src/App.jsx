import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import MainPage from './pages/MainPage'

function App() {


  return (
    <main className='heroBackground overflow-x-hidden'>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </main>
  )
}

export default App
