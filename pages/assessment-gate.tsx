import type { ReactElement } from 'react'
import Layout from '../components/Layouts/Master'
import type { NextPageWithLayout } from './_app'
import Subheader from '../components/Subheader/Subheader'
import ListBox1 from '../components/ListBox/ListBox1'
import Link from 'next/link'
import { useEffect } from 'react'
import Sidebar from '../components/Sidebar/Sidebar1'
import Switch from '../components/Switch/Switch'
import Header from '../components/Header/Header'
import ReactTooltip from 'react-tooltip';

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
                <h1>New assessment (step 1 of 4)</h1>
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
                                    <div className="form-group d-flex flex-column ">
                                        <dt className="input-label">
                                            <h4 className="rename-field">
                                                Assessment name
                                            </h4>
                                            <p>This is your URL namespace for the assessment within Aldameiry.</p>
                                        </dt>
                                        <dd>
                                            <div className="input-group">
                                                <div className="label">
                                                    <span>assessments/</span>
                                                </div>
                                                <div className="input-wrapper">
                                                    <input type="text" name="new_name" defaultValue="" className="form-control long " id="rename-field"  autoCapitalize="off" autoComplete="off" spellCheck="false"/>
                                                </div>
                                            </div>
                                        </dd>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                Please use 48 characters at maximum.
                            </div>
                        </div>
                        <div className="card card-2">
                            <div className="card-body">
                                <div>
                                    <div className="form-group d-flex flex-column ">
                                       
                                        <h4 className="rename-field">
                                            Aldameiry Smart analyzer
                                        </h4>
                                        <p>Enable smart analyzer for this assessment.</p>
                                        <div className="mt-2">
                                            <div></div>
                                            <div><Switch/></div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                Smart analyzer is optional, but strongly recommended for more in depth analytics.
                            </div>
                        </div>
                        <div className="mt-3 d-flex justify-content-between">
                            <div></div>
                            <div><Link href="/assessment-gate/category" className="btn btn-primary btn-blue">Next</Link></div>
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