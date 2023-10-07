import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import MainPage from './pages/MainPage'
import { InformationProvider } from './context/InformationContext'
import Wallet from './pages/Wallet'

function App() {


  return (
    <InformationProvider>
    <main className='heroBackground overflow-x-hidden'>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </main>
    </InformationProvider>
  )
}

export default App
