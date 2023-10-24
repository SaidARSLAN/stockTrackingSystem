import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import MainPage from './pages/MainPage'
import { InformationProvider } from './context/InformationContext'
import Register from './pages/Register'

function App() {


  return (
    <InformationProvider>
    <main className='heroBackground overflow-x-hidden'>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </main>
    </InformationProvider>
  )
}

export default App
