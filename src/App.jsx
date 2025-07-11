import { useState } from 'react'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Sports from './Components/Sports'
import Playground from './Components/Playground'
import InterestedField from './Components/InterestedField'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/about' element={<Hero/>}/>
        <Route path='/sports' element={<><Sports/><Playground/></>}/>
        <Route path='/explore' element={<><Sports/><Playground/><InterestedField/></>}/>
        <Route path='/playground' element={<Playground/>}/>
        <Route path='/interested-field' element={<InterestedField/>}/>
      </Routes>
      </Router>
    </>
  )
}

export default App
