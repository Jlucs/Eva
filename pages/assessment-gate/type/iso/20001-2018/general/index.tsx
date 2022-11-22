import type { ReactElement } from 'react'
import Layout from '../../../../../../components/Layouts/Master'
import type { NextPageWithLayout } from './../../../../../_app'
import Subheader from '../../../../../../components/Subheader/Subheader'
import ListBox1 from '../../../../../../components/ListBox/ListBox1'
import Link from 'next/link'
import { useEffect } from 'react'
import Sidebar from '../../../../../../components/Sidebar/Sidebar1'
import DropDown1 from '../../../../../../components/Dropdown/Dropdown1'
import DropDown2 from '../../../../../../components/Dropdown/Dropdown2'
import DropDown3 from '../../../../../../components/Dropdown/Dropdown3'
import Header from '../../../../../../components/Header/Header'

const Page: NextPageWithLayout = () => {
    useEffect( () => {
        const body = document.querySelector("body");
        document.body.classList.add("asd");
        return () => {
            body?.classList.remove("asd");
        }
    });
  return (
    <>
        <Header>
            <div className="breadcrumb-separator">
                <svg fill="none" height="32" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="32"><path d="M16.88 3.549L7.12 20.451"></path></svg>
            </div>
            <div className="breadcrumb-item">
                New assessment
            </div>
        </Header>
        <div className="heading">
            <div className="container container-fluid container-1200">
                <h1>New assessment (step 3 of 4)</h1>
            </div>
        </div>
        <div className="content">
            <div className="container container-fluid container-1200">
                <div className="layout-1">
                    <Sidebar/>
                    <section className="primary">
                        <div className="card card-2">
                            <div className="card-body">
                                <div>
                                    <h4>Asessment type</h4>
                                    <p>Select which field to assess.</p>
                                </div>
                                <div>
                                    <DropDown1 dropDownState="ISO"></DropDown1>
                                </div>
                            </div>
                        </div>
                        <div className="card card-2">
                            <div className="card-body">
                                <div>
                                    <h4>ISO Version</h4>
                                    <p>Select which ISO version to assess.</p>
                                </div>
                                <div>
                                    <DropDown2 dropDownState="20001-2018"></DropDown2>
                                </div>
                            </div>
                        </div>
                        <div className="card card-2">
                            <div className="card-body">
                                <div>
                                    <h4>Assessment method</h4>
                                    <p>select which assessment method you would like to use.</p>
                                </div>
                                <div>
                                    <DropDown3 dropDownState="General ISO 20001 maturity"></DropDown3>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 d-flex justify-content-between">
                            <div></div>
                            <div><Link href="/assessment-gate/quiz/general" className="btn btn-primary btn-blue">Next</Link></div>
                        </div>
                    </section>
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