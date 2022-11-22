import type { ReactElement } from 'react'
import Layout from '../../components/Layouts/Master'
import type { NextPageWithLayout } from './../_app'
import Subheader from '../../components/Subheader/Subheader'
import ListBox1 from '../../components/ListBox/ListBox1'
import Link from 'next/link'
import { useEffect } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar1'
import DropDown1 from '../../components/Dropdown/Dropdown1'
import Header from '../../components/Header/Header'

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
                            <DropDown1 dropDownState="Select your assessment type"></DropDown1>
                          </div>
                      </div>
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