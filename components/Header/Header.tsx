import React, { useState } from 'react'
import { useEffect } from 'react'
import Link from 'next/link'

type Props = {
           
}

export default function Header({}: Props) {

  return (
    <header className="header">

        <div className="container container-fluid d-flex flex-row align-items-stretch justify-content-between">
          
          <div id="begin" className="d-flex align-items-center">
              <Link href="/" className="header-logo">EVA</Link>
          </div>

          <div id="center" className="d-flex align-items-center justify-content-center">
            {/* <div className="searchbox">
                <form className="search-form">
                    <div className="search-container">
                        <div className="search-input">
                            <input placeholder="Search"/>
                        </div>
                        <div className="search-icon">
                        <svg aria-hidden="true" className="s-input-icon s-input-icon__search svg-icon iconSearch" width="18" height="18" viewBox="0 0 18 18"><path d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"></path></svg>
                        </div>
                    </div>
                </form>
            </div> */}
          </div>

          <div id="end">
            <div className="d-flex flex-stretch flex-shrink-0">
              <div className="d-flex flex-stretch">
                <div className="header-search d-flex align-items-stretch">
                  <div className="d-flex align-items-center">
                    <div className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px">
                      <span className="svg-icon svg-icon-1">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor"></rect>
                          <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-stretch ms-lg-3">
                <div className="header-search d-flex align-items-stretch">
                  <div className="d-flex align-items-center">
                    <div className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px">
                      <span className="svg-icon svg-icon-1">
                        <svg width="24" height="24" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"><g><path d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z" ></path></g></svg>
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