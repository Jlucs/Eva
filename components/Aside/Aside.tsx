import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router';

type Props = {

}

export default function Aside({}: Props) {
  const router = useRouter();
  return (
    <aside className="aside">
      <div className="aside-wrapper">
        <div className="menu menu-column menu-rounded menu-sub-indention px-3 mt-2">
          <div className={["menu-item", '', router.pathname == "/" ? "active" : ""].join(" ")}>
            <div className="menu-link">
              <div className="menu-icon">
                <svg viewBox="0 0 36 36" focusable="false" aria-hidden="true" role="img" className="">
                  <rect height="6" rx="1" ry="1" width="6" x="2" y="2"></rect>
                  <rect height="6" rx="1" ry="1" width="6" x="14" y="2"></rect>
                  <rect height="6" rx="1" ry="1" width="6" x="26" y="2"></rect>
                  <rect height="6" rx="1" ry="1" width="6" x="2" y="14"></rect>
                  <rect height="6" rx="1" ry="1" width="6" x="14" y="14"></rect>
                  <rect height="6" rx="1" ry="1" width="6" x="26" y="14"></rect>
                  <rect height="6" rx="1" ry="1" width="6" x="2" y="26"></rect>
                  <rect height="6" rx="1" ry="1" width="6" x="14" y="26"></rect>
                  <rect height="6" rx="1" ry="1" width="6" x="26" y="26"></rect>
                </svg>
              </div>
              <div className="menu-title">Home</div>
              <div className="menu-arrow"></div>
            </div>
          </div>
          {/* <div className="menu-item">
            <div className="menu-link">
              <div className="menu-icon">
                <svg viewBox="0 0 36 36" focusable="false" aria-hidden="true" role="img"><path d="M17.757 2H7a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V14.243a3 3 0 0 0-.879-2.121l-9.242-9.243A3 3 0 0 0 17.757 2zM28 14H18V4h.172L28 13.828zm0 18H8V4h8v11a1 1 0 0 0 1 1h11z"></path></svg>
              </div>
              <div className="menu-title">Assessments</div>
              <div className="menu-arrow"></div>
            </div>
          </div> */}
          <div className="menu-item">
            <div className="menu-link">
              <div className="menu-icon">
                <svg viewBox="0 0 36 36" focusable="false" aria-hidden="true" role="img"><path d="M2.71 13.286A15.983 15.983 0 0 1 29.879 7.3l3.268-3.445a.5.5 0 0 1 .853.352V16H22.788a.5.5 0 0 1-.354-.854l4.613-4.863a11.887 11.887 0 0 0-20.393 4.128.488.488 0 0 1-.594.334l-2.993-.816a.518.518 0 0 1-.357-.643zM13.222 20a.5.5 0 0 1 .354.854l-4.617 4.862a11.88 11.88 0 0 0 20.386-4.126.488.488 0 0 1 .594-.334l2.993.816a.518.518 0 0 1 .358.643A15.984 15.984 0 0 1 6.123 28.7l-3.269 3.446A.5.5 0 0 1 2 31.793V20z"></path></svg>
              </div>
              <div className="menu-title">Updates</div>
              <div className="menu-label">
                <div className="label-text">3</div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-separator"></div>
        <div className="menu menu-column menu-rounded menu-sub-indention px-3 mt-2">
          <div className="menu-item">
            <div className="menu-link">
              <div className="menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z"/></svg>
              </div>
              <div className="menu-title">Settings</div>
              <div className="menu-arrow"></div>
            </div>
          </div>
          <div className="menu-item">
            <div className="menu-link">
              <div className="menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216 192V224h24 48 24v24 88h8 24v48H296 216 192V336h24zm72-144H224V128h64v64z"/></svg>
              </div>
              <div className="menu-title">Help</div>
              <div className="menu-arrow"></div>
            </div>
          </div>
          <div className="menu-item">
            <div className="menu-link">
              <div className="menu-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L185.6 508.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V416H64c-35.3 0-64-28.7-64-64V64zM256 80c-13.3 0-24 10.7-24 24V216c0 13.3 10.7 24 24 24s24-10.7 24-24V104c0-13.3-10.7-24-24-24zm32 224c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z"/></svg>
              </div>
              <div className="menu-title">Send feedback</div>
              <div className="menu-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}