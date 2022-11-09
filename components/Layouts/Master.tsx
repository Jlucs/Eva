import React from 'react'
import Header from '../Header/Header'
import Link from 'next/link'

type Props = {
  children?: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
        <Header/>
        <div className="wrapper">
            {children}
        </div>
    </>
  )
}