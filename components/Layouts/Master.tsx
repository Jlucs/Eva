import React from 'react'
import Header from '../Header/Header'
import Link from 'next/link'
import Aside from '../Aside/Aside'  
import Footer from '../Footer/Footer'  


type Props = {
  children?: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
        <Header/>
        <Aside/>
        <div className="wrapper">
          <div className="app-content d-flex flex-column-fluid flex-column">
            <main>
             {children}
            </main>
            <Footer/>
          </div>
        </div>
    </>
  )
}