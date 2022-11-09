import type { ReactElement } from 'react'
import Layout from '../components/Layouts/Master'
import type { NextPageWithLayout } from './_app'
import Subheader from '../components/Subheader/Subheader'
import ListBox1 from '../components/ListBox/ListBox1'
import Link from 'next/link'
import { useEffect } from 'react'

const Page: NextPageWithLayout = () => {
    useEffect( () => {
        const body = document.querySelector("body");
        document.body.classList.add("asd");
        return () => {
            body?.classList.remove("asd");
        }
    });
  return (
    <main className="">
        {/* <Subheader
        className="bg-lightblue">
          <div className="container container-fluid container-640 d-flex align-items-center justify-content-between">
            <div>
              Create an assessment (Step 1 of 3)
            </div>
          </div>
        </Subheader> */}
        <div className="heading">
            <div className="container container-fluid container-1200">
                <h1>Assessment creation</h1>
            </div>
        </div>
        <div className="content">
            <div className="container container-fluid container-1200">
                <div className="layout-1">
                    <div className="sidebar">
                        <div className="menu menu-column menu-rounded menu-sub-indention">
                            <div className="menu-item menu-accordion">
                                <Link href="/" className="menu-link">
                                    <span className="menu-icon"></span>
                                    <span className="menu-title">General</span>
                                </Link>
                            </div>
                            <div className="menu-item menu-accordion">
                                <Link href="/" className="menu-link">
                                    <span className="menu-icon"></span>
                                    <span className="menu-title">Assessment type</span>
                                </Link>
                            </div>
                            <div className="menu-item menu-accordion">
                                <Link href="/" className="menu-link">
                                    <span className="menu-icon"></span>
                                    <span className="menu-title">Assessment questionnaire</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="primary">
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
                                        {/* <dl className="form-group">
                                            <dt className="input-label">
                                                <label>
                                                    <span className="fw-600">Description</span>
                                                    <span className="note">(optional)</span>
                                                </label>
                                            </dt>
                                            <dd>
                                                <input type="text" name="new_name" defaultValue="" className="form-control long " id="rename-field"  autoCapitalize="off" autoComplete="off" spellCheck="false"/>
                                            </dd>
                                        </dl> */}
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                Please use 48 characters at maximum.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="separator-2"></div>
                    <dl className="form-group">
                        <dt className="input-label">
                            <label>
                                <span className="fw-600">Assessment category</span>
                            </label>
                        </dt>
                        <dd>
                            <ListBox1 />
                        </dd>
                    </dl>
                {/* <div className="separator-2"></div>
                <div className="d-flex align-items-center justify-content-between">
                    <div></div>
                    <div>
                        <Link href="/assessment-gate/quality-management" className="btn btn-blue btn-large">
                            Continue
                        </Link>
                    </div>
                </div> */}
                {/* <div className="card card-1">
                    <div className="card-header">
                        <div className="header-title">creating new assessment (Step 1 of 5)</div>
                    </div>
                    <div className="card-body">
                        <h1 className="mb-5">Let's start with a name for your assessment </h1>
                        <div className="form-group d-flex flex-column ">
                            <dt className="input-label">
                                <label className="rename-field">
                                    Assessment name
                                </label>
                            </dt>
                            <dd>
                                <input type="text" name="new_name" defaultValue="" className="form-control short " id="rename-field"  autoCapitalize="off" autoComplete="off" spellCheck="false"/>
                            </dd>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </main>
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