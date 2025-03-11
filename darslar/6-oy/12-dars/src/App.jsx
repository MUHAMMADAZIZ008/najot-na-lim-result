import { useState } from 'react'
import Header from './page/header'
import {Routes, Route} from 'react-router-dom'
import Home from './page/home'
import About from './page/about'
import Contact from './page/contact'

function App() {
  const [count, setCount] = useState(0)

  return <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='*' element={<h1>PAGE NOT FOUND</h1>}/>
    </Routes>
  </>
}

export default App
