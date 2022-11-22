import type { ReactElement } from 'react'
import Layout from '../components/Layouts/Master'
import type { NextPageWithLayout } from './_app'
import Link from 'next/link'
import Subheader from '../components/Subheader/Subheader'
import Modal1 from '../components/Modals/Modal1'
import { useEffect } from 'react'
import Header from '../components/Header/Header'
import ActionDropdown from '../components/Dropdown/ActionDropdown'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import ReactTooltip from 'react-tooltip';


type Props = {
    value: number;
}

// Import react-circular-progressbar module and styles
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  
  import ProgressProvider from "./../ProgressProvider";

const Page: NextPageWithLayout = () => {
    useEffect( () => {
        const body = document.querySelector("body");
        document.body.classList.add("subheader-enabled", "aside-enabled");
        return () => {
            body?.classList.remove("subheader-enabled", "aside-enabled");
        }
    });
  return (
    <>
        <Subheader className='d-flex'>
          <div className="container container-fluid container-1200 d-flex align-items-center justify-content-between">
            <div>
              Welcome back, Andrew!
            </div>
          </div>
        </Subheader>
        <div className="container container-fluid container-1200">
            <div className="utility utility-1">
                <div className="searchbar">
                    <input placeholder="Search..." />
                    <span className="">
                        <svg data-testid="geist-icon" fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20"><path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"></path><path d="M16 16l4.5 4.5"></path></svg>
                    </span>
                </div>
                <ActionDropdown dropDownState="Add New..." />
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <Link href="/" className="card card-3">
                        <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <div className="symbol symbol-34px bg-black symbol-round mr-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z" fill="currentColor"></path>
                                            <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                    <div className="d-flex justify-content-start flex-column">
                                        <div className="fw-500 text-black fsize-16">First-assessment</div>
                                        <div className="text-muted">Quality management</div>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-wrapper pb-danger">
                                <ProgressBar label="Stroke width">
                                    <ProgressProvider valueStart={0} valueEnd={1}>
                                        {(value: number) => <CircularProgressbar value={value} maxValue={5} text={`${1}`} strokeWidth={5} />}
                                    </ProgressProvider>
                                </ProgressBar>
                                <div className="pb-text"><span>1</span></div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="text-black fw-500">ISO-20001-2018</div>
                            <div className="text-black">General maturity</div>
                        </div>
                        <div className="card-footer">
                            <div className="text-muted">5d. ago</div>
                            <div></div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-4">
                    <Link href="/" className="card card-3">
                        <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <div className="symbol symbol-34px bg-black symbol-round mr-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z" fill="currentColor"></path>
                                            <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                    <div className="d-flex justify-content-start flex-column">
                                        <div className="fw-500 text-black fsize-16">First-assessment</div>
                                        <div className="text-muted">Quality management</div>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-wrapper pb-warning">
                                <ProgressBar label="Stroke width">
                                    <ProgressProvider valueStart={0} valueEnd={2}>
                                        {(value: number) => <CircularProgressbar value={value} maxValue={5} text={`${2}`} strokeWidth={5} />}
                                    </ProgressProvider>
                                </ProgressBar>
                                <div className="pb-text"><span>2</span></div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="text-black fw-500">ISO-20001-2018</div>
                            <div className="text-black">General maturity</div>
                        </div>
                        <div className="card-footer">
                            <div className="text-muted">5d. ago</div>
                            <div></div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-4">
                    <Link href="/assessments/first-assessment" className="card card-3">
                        <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <div className="symbol symbol-34px bg-black symbol-round mr-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z" fill="currentColor"></path>
                                            <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                    <div className="d-flex justify-content-start flex-column">
                                        <div className="fw-500 text-black fsize-16">First-assessment</div>
                                        <div className="text-muted">Quality management</div>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-wrapper pb-success">
                                <ProgressBar label="Stroke width">
                                    <ProgressProvider valueStart={0} valueEnd={3}>
                                        {(value: number) => <CircularProgressbar value={value} maxValue={5} text={`${3}`} strokeWidth={5} />}
                                    </ProgressProvider>
                                </ProgressBar>
                                <div className="pb-text pb-danger"><span>3</span></div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="text-black fw-500">ISO-20001-2018</div>
                            <div className="text-black">General maturity</div>
                        </div>
                        <div className="card-footer">
                            <div className="text-muted">5d. ago</div>
                            <div></div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-4">
                    <Link href="/" className="card card-3">
                        <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <div className="symbol symbol-34px bg-black symbol-round mr-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z" fill="currentColor"></path>
                                            <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                    <div className="d-flex justify-content-start flex-column">
                                        <div className="fw-500 text-black fsize-16">First-assessment</div>
                                        <div className="text-muted">Quality management</div>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-wrapper pb-success">
                                <ProgressBar label="Stroke width">
                                    <ProgressProvider valueStart={0} valueEnd={4}>
                                        {(value: number) => <CircularProgressbar value={value} maxValue={5} text={`${4}`} strokeWidth={5} />}
                                    </ProgressProvider>
                                </ProgressBar>
                                <div className="pb-text"><span>4</span></div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="text-black fw-500">ISO-20001-2018</div>
                            <div className="text-black">General maturity</div>
                        </div>
                        <div className="card-footer">
                            <div className="text-muted">5d. ago</div>
                            <div></div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-4">
                    <Link href="/" className="card card-3">
                        <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <div className="symbol symbol-34px bg-black symbol-round mr-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z" fill="currentColor"></path>
                                            <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                    <div className="d-flex justify-content-start flex-column">
                                        <div className="fw-500 text-black fsize-16">First-assessment</div>
                                        <div className="text-muted">Quality management</div>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-wrapper pb-success">
                                <ProgressBar label="Stroke width">
                                    <ProgressProvider valueStart={0} valueEnd={5}>
                                        {(value: number) => <CircularProgressbar value={value} maxValue={5} text={`${5}`} strokeWidth={5} />}
                                    </ProgressProvider>
                                </ProgressBar>
                                <div className="pb-text"><span>5</span></div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="text-black fw-500">ISO-20001-2018</div>
                            <div className="text-black">General maturity</div>
                        </div>
                        <div className="card-footer">
                            <div className="text-muted">5d. ago</div>
                            <div></div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-4">
                    <Link href="/" className="card card-3">
                        <div className="card-header">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <div className="symbol symbol-34px bg-black symbol-round mr-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z" fill="currentColor"></path>
                                            <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                    <div className="d-flex justify-content-start flex-column">
                                        <div className="fw-500 text-black fsize-16">First-assessment</div>
                                        <div className="text-muted">Quality management</div>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-wrapper pb-success">
                                <ProgressBar label="Stroke width">
                                    <ProgressProvider valueStart={0} valueEnd={0}>
                                        {(value: number) => <CircularProgressbar value={value} maxValue={5} text={`${5}`} strokeWidth={5} />}
                                    </ProgressProvider>
                                </ProgressBar>
                                <div className="pb-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M640 255.1C640 269.3 629.3 280 616 280h-120.8l-57.5 122.2c-4.375 9.125-13.5 14.75-24 13.63c-10-.875-18.5-8-21-17.87l-70-268.6L247.5 492.9C245.2 503.8 235.9 511.6 224.8 512H224c-10.75 0-20.25-7.25-23.12-17.62L141.8 280H23.1C10.75 280 0 269.3 0 256S10.75 232 23.1 232H160c10.79 0 20.25 7.206 23.12 17.61l37.5 136L296.5 19.12C298.8 8.25 308.4 .25 319.5 0H320c10.88 0 20.5 7.375 23.25 18l79.25 303.9l35.75-76.12C462.2 237.4 470.8 232 480 232h136C629.3 232 640 242.7 640 255.1z"/></svg>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="text-black fw-500">ISO-20001-2018</div>
                            <div className="text-black">General maturity</div>
                        </div>
                        <div className="card-footer">
                            <div className="text-muted">5d. ago</div>
                            <div></div>
                        </div>
                    </Link>
                </div>
            </div>
            {/* <div className="action-list list-header">
                <div className="action">
                <Link href="/assessment-gate">
                    <div className="action-start-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z" fill="currentColor"></path>
                            <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <div className="action-text">
                        New assessment
                    </div>
                    <div className="action-end-icon">
                        <svg className="svg" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 5V0h1v5h5v1H6v5H5V6H0V5h5z" fillRule="nonzero" fillOpacity="1" fill="#000" stroke="none"></path>
                        </svg>
                    </div>
                </Link>
                </div>
                <div className="action">
                    <Link href="/">
                        <div className="action-start-icon icon-purple">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.3" d="M8.9 21L7.19999 22.6999C6.79999 23.0999 6.2 23.0999 5.8 22.6999L4.1 21H8.9ZM4 16.0999L2.3 17.8C1.9 18.2 1.9 18.7999 2.3 19.1999L4 20.9V16.0999ZM19.3 9.1999L15.8 5.6999C15.4 5.2999 14.8 5.2999 14.4 5.6999L9 11.0999V21L19.3 10.6999C19.7 10.2999 19.7 9.5999 19.3 9.1999Z" fill="currentColor"></path>
                                <path d="M21 15V20C21 20.6 20.6 21 20 21H11.8L18.8 14H20C20.6 14 21 14.4 21 15ZM10 21V4C10 3.4 9.6 3 9 3H4C3.4 3 3 3.4 3 4V21C3 21.6 3.4 22 4 22H9C9.6 22 10 21.6 10 21ZM7.5 18.5C7.5 19.1 7.1 19.5 6.5 19.5C5.9 19.5 5.5 19.1 5.5 18.5C5.5 17.9 5.9 17.5 6.5 17.5C7.1 17.5 7.5 17.9 7.5 18.5Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <div className="action-text">
                            New benchmark
                        </div>
                        <div className="action-end-icon">
                            <svg className="svg" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 5V0h1v5h5v1H6v5H5V6H0V5h5z" fillRule="nonzero" fillOpacity="1" fill="#000" stroke="none"></path>
                            </svg>
                        </div>
                    </Link>
                </div>
                <div className="action">
                    <Link href="/">
                        <div className="action-start-icon icon-black">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.0021 10.9128V3.01281C13.0021 2.41281 13.5021 1.91281 14.1021 2.01281C16.1021 2.21281 17.9021 3.11284 19.3021 4.61284C20.7021 6.01284 21.6021 7.91285 21.9021 9.81285C22.0021 10.4129 21.5021 10.9128 20.9021 10.9128H13.0021Z" fill="currentColor"></path>
                                <path opacity="0.3" d="M11.0021 13.7128V4.91283C11.0021 4.31283 10.5021 3.81283 9.90208 3.91283C5.40208 4.51283 1.90209 8.41284 2.00209 13.1128C2.10209 18.0128 6.40208 22.0128 11.3021 21.9128C13.1021 21.8128 14.7021 21.3128 16.0021 20.4128C16.5021 20.1128 16.6021 19.3128 16.1021 18.9128L11.0021 13.7128Z" fill="currentColor"></path>
                                <path opacity="0.3" d="M21.9021 14.0128C21.7021 15.6128 21.1021 17.1128 20.1021 18.4128C19.7021 18.9128 19.0021 18.9128 18.6021 18.5128L13.0021 12.9128H20.9021C21.5021 12.9128 22.0021 13.4128 21.9021 14.0128Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <div className="action-text">
                            Performance analyzer
                        </div>
                        <div className="action-end-icon">
                            <svg className="svg" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 5V0h1v5h5v1H6v5H5V6H0V5h5z" fillRule="nonzero" fillOpacity="1" fill="#000" stroke="none"></path>
                            </svg>
                        </div>
                    </Link>
                </div>
            </div> */}
        </div>
    </>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Page