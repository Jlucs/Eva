import React, { useState } from 'react'
import { useEffect } from 'react'
import Link from 'next/link'

type Props = {
  children?: React.ReactNode;       
  nav? : React.ReactNode; 
}



export default function Header({children}: Props) {
  return (
    <header className="header">

        <div className="container container-fluid d-flex flex-row align-items-stretch justify-content-between">
          
          <div id="begin" className="d-flex align-items-center">
            <div className="breadcrumb">
              <div className="breadcrumb-item">
                <Link href="/" className="header-logo">
                  <img src="/images/logo.png" alt="aldameiry logo"/>
                </Link>
              </div>
              {children}
            </div>
          </div>

          <div id="center" className="d-flex align-items-center justify-content-center">
            <div className="searchbox">
              <form className="search-form">
                <div className="search-container">
                  <input placeholder="Search or jump to..."/>
                </div>
              </form>
            </div>
          </div>

          <div id="end">
            <div className="d-flex flex-stretch flex-shrink-0">
              <div className="d-flex flex-stretch">
                <div className="header-search d-flex align-items-stretch">
                  <div className="d-flex align-items-center">
                    <div className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px">
                      <span className="svg-icon svg-icon-1">
                        <svg focusable="false" viewBox="0 0 24 24">
                          <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-stretch ms-lg-3">
                <div className="header-search d-flex align-items-stretch">
                  <div className="d-flex align-items-center">
                    <button className="avatar-btn">
                      <div className="avatar">
                        <span>A</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>  
            </div>
          </div>
          
        </div>

    </header>
  )
}