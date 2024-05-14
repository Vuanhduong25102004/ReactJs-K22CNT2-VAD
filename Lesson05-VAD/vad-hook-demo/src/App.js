import React from 'react'
import VaduseState from './components/VaduseState'
import VaduseEffect from './components/VaduseEffect'
import VaduseContext from './components/VaduseContext'
import './App.css'

export default function App() {
  return (
    <div className='container border mt-3'>
      <h1 className='text-center'>Vũ Anh Dương - Hook</h1>
      <hr/>
      <VaduseState/>
      <hr/>
      <VaduseEffect/>
      <hr/>
      <VaduseContext/>
    </div>
  )
}
