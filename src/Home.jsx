import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div id='home'>
        <h1>Welcome to Snow's Fun page</h1>
        <Link to={"/Counter"}>Counter</Link>
        <Link to={"/Stopwatch"}>Stopwatch</Link>
    </div>
  )
}

export default Home