import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Products from './Products'
import Navbar from './Navbar'
import Footer from './Footer'

function App() {
 
  return (
    <>
      <Navbar/>
<Products/>
      <Footer/>
    </>
  )
}

export default App
