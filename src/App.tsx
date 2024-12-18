import { Routes, Route } from 'react-router'
import Welcome from './pages/Welcome'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path='/welcome' element={<Welcome/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
  )
}

export default App
