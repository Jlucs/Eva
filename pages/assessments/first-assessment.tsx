import type { ReactElement} from 'react'
import Layout from '../../components/Layouts/Master'
import type { NextPageWithLayout } from './../_app'
import Link from 'next/link'
import Subheader from '../../components/Subheader/Subheader'
import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import dynamic from 'next/dynamic'
const ReactTooltip = dynamic(() => import('react-tooltip'), { ssr : false });


// Import react-circular-progressbar module and styles
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  
  import ProgressProvider from "./../../ProgressProvider";

  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  import faker from 'faker';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    indexAxis: 'y' as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
    plugins: {
      title: {
        display: true,
        text: 'Level Overview',
      },
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false, // <-- this option disables tooltips
      }
    },
  };
  
  const labels = ['Level 5: Optimizing process', 'Level 4: Predictable process', 'Level 3: Established process', 'Level 2: Managed process', 'Level 1: Performed process'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'My First Dataset',
        data: [5, 4, 3, 2, 1],
        backgroundColor: [
            'rgba(201, 203, 207, 0.2)',
            'rgba(201, 203, 207, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(201, 203, 207, 0.2)',
            'rgba(201, 203, 207, 0.2)',
          ],
          borderColor: [
            'rgb(201, 203, 207)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)',
            'rgb(201, 203, 207)',
            'rgb(201, 203, 207)',
          ],
      },
    ],
  };

const Page: NextPageWithLayout = () => {
    useEffect( () => {
        const body = document.querySelector("body");
        document.body.classList.add("assessment-page");
        return () => {
            body?.classList.remove("assessment-page");
        }
    });
  return (
    <>
        <Header>
            <div className="breadcrumb-separator">
                <svg fill="none" height="32" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="32"><path d="M16.88 3.549L7.12 20.451"></path></svg>
            </div>
            <Link href="/" className="breadcrumb-item">
                Assessments
            </Link>
            <div className="breadcrumb-separator">
                <svg fill="none" height="32" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="32"><path d="M16.88 3.549L7.12 20.451"></path></svg>
            </div>
            <div className="breadcrumb-item">
                First-assessment
            </div>
        </Header>
        <div className="heading heading-lg">
            <div className="heading-content">
                <div className="container container-fluid container-1200">
                    <h1>First-assessment</h1>
                </div>
                {/* <div className="container container-fluid container-1200">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>asd</div>
                        <div>asd</div>
                    </div>
                </div> */}
            </div>
        </div>
        <div className="container container-fluid container-1200 mt-5">
            <div className="row">
                <div className="col-lg-4">
                    <div className="card card-4">
                        <div className="card-body">
                            <h3 className="text-center mb-5">Assessment Index Score</h3>
                            <div className="pb-wrapper pb-lg pb-success text-center">
                                <ProgressBar label="Stroke width">
                                    <ProgressProvider valueStart={0} valueEnd={3}>
                                        {(value: number) => <CircularProgressbar value={value} maxValue={5} text={`${2}`} strokeWidth={5} />}
                                    </ProgressProvider>
                                </ProgressBar>
                                <div className="pb-text"><span>3</span></div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center mt-4">
                                <span>
                                    <div className="pill pill-1">48 Data Points</div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="card card-4">
                        <div className="card-header">
                            <div className="d-flex align-items-stretch">
                                <h3 className="header-title">Gaps</h3>
                                <a data-tip="gap tooltip" className="tooltip-container">
                                    <span>
                                        <svg height="16" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                                    </span>
                                </a>
                                <ReactTooltip place="top" type="dark" effect="solid" />
                            </div>
                            <div></div>
                        </div>
                        <div className="card-body">
                            <div>
                                <div>
                                    <p>Continuous Trend Analysis</p>
                                </div>
                                <div>
                                    <p>Repeated incidents are not identified</p>
                                </div>
                                <div>
                                    <p>Knowledge articles</p>
                                </div>
                                <div>
                                    <p>Service Improvement Initiatives</p>
                                </div>
                                <div>
                                    <p>Reports are generated manually (Meaningful  dashboard for management )</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card card-4">
                        <div className="card-header">
                            <div className="d-flex align-items-stretch">
                                <h3 className="header-title">Score Level Overview (3)</h3>
                                <a data-tip="Score level overview defines your actual level within a datapoint" className="tooltip-container">
                                    <span>
                                        <svg height="16" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                                    </span>
                                </a>
                                <ReactTooltip place="top" type="dark" effect="solid" />
                            </div>
                        </div>
                        <div className="card-body">
                            <Bar options={options} data={data} />
                        </div>
                        <div className="card-footer">
                            You have placed level 3: established process
                        </div>
                    </div>
                </div>
            </div>
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