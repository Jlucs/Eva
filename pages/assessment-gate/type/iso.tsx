import type { ReactElement } from 'react'
import Layout from '../../../components/Layouts/Master'
import type { NextPageWithLayout } from './../../_app'
import Subheader from '../../../components/Subheader/Subheader'
import ListBox1 from '../../../components/ListBox/ListBox1'
import Link from 'next/link'
import { useEffect } from 'react'
import Sidebar from '../../../components/Sidebar/Sidebar1'
import DropDown1 from '../../../components/Dropdown/Dropdown1'
import DropDown2 from '../../../components/Dropdown/Dropdown2'

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
                <h1>New assessment (step 3 of 6)</h1>
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
                            <div className="card-footer">
                                Please use 48 characters at maximum.
                            </div>
                        </div>
                        <div className="card card-2">
                            <div className="card-body">
                                <div>
                                    <h4>ISO Version</h4>
                                    <p>Select which ISO version to assess.</p>
                                </div>
                                <div>
                                    <DropDown2 dropDownState="Select iso version"></DropDown2>
                                </div>
                            </div>
                            <div className="card-footer">
                                Please use 48 characters at maximum.
                            </div>
                        </div>
                    </section>
                </div>
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