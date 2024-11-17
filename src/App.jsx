import React from 'react'
import Left from './Component/Left'
import Navbar from './Component/navbar'
import Right from './Component/Right'
import Middle from './Component/Middle'
const App = () => {
  return (
    <>
      <Navbar/>
      <div className='flex'>
        <Left/>
        <Middle/>
        <Right/>
      </div>
      
    </>
  )
}

export default App