import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Hotels from './pages/Hotels/Hotels'
import List from './pages/List/List'
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/hotels' element={<Hotels/>} />
          <Route path='/hotels:id' element={<List/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
