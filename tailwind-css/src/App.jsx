import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './component/navbar/Navbar'
import Products from './component/products/Products'

function App() {
  return (
    <div className="App md:mx-10">
      <Navbar></Navbar>
      <h1 className='text-7xl text-purple-400'>Hello From Tailwind and React</h1>
      <Products></Products>
    </div>
  )
}

export default App
