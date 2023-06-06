import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navigation from './components/Navigation'

function App() {

  return (
    <main className='main'>
      <Navigation />
      <Outlet />
      <Footer />
    </main>
  )
}

export default App
