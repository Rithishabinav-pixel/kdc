import React from 'react'
import Header from './components/Header'
import AOSInit from './components/AOSInit'
import Footer from './components/Footer'

export default function Globalclient({child}) {


  return (
    <>
     <Header />

<AOSInit />
  
  {child}
  
<Footer />  
    </>
  )
}
