import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Counter from './counter'
import Stopwatch from './Stopwatch'


const App = () => {
  return (
    <div id='app'>
      <Home />
      <Routes>
        <Route path='/Counter' element={<Counter />} ></Route>
        <Route path='/Stopwatch' element={<Stopwatch />}></Route>
      </Routes>
    </div>
  )
}

export default App