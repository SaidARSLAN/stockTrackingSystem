import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import SignUp from './pages/SignUp'
import MainPage from './pages/MainPage'
import SignIn from './pages/SignIn'
import Profile from './pages/Profile'

function App() {

  return (
    <main className='w-full h-full overflow-x-hidden'>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="signin" element={<SignIn />} />
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </main>
  )
}

export default App
