import type { ReactElement } from 'react'
import Layout from '../../../../../../components/Layouts/Master'
import type { NextPageWithLayout } from './../../../../../_app'
import Subheader from '../../../../../../components/Subheader/Subheader'
import ListBox1 from '../../../../../../components/ListBox/ListBox1'
import Link from 'next/link'
import { useEffect } from 'react'
import Sidebar from '../../../../../../components/Sidebar/Sidebar1'
import Switch from '../../../../../../components/Switch/Switch'
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
                <h1>New assessment (step 3.5 of 4)</h1>
            </div>
        </div>
        <div className="content">
            <div className="container container-fluid container-1200">
                <div className="layout-1">
                    <Sidebar/>
                    <section className="primary">
                      <h4 className="mb-5">Select functional activities to assess</h4>
                      <div className="card card-2">
                        <div className="card-header">
                          Develop BCM Program Framework
                        </div>
                        <div className="card-body p-0">
                          <div className="switch-list">
                            <div className="list-item">
                              <div>Develop BCM Program Policy</div>
                              <div>
                                <Switch/>
                              </div>
                            </div>
                            <div className="list-item">
                              <div>Develop BCM Program Scope</div>
                              <div>
                                <Switch/>
                              </div>
                            </div>
                            <div className="list-item">
                              <div>Establish Program Governance and Management Structure</div>
                              <div>
                                <Switch/>
                              </div>
                            </div>
                            <div className="list-item">
                              <div>Establish BCM Program Practices</div>
                              <div>
                                <Switch/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card card-2">
                        <div className="card-header">
                          Manage Impacts & Risks
                        </div>
                        <div className="card-body p-0">
                          <div className="switch-list">
                            <div className="list-item">
                              <div>Analyze Business Impacts</div>
                              <div>
                                <Switch/>
                              </div>
                            </div>
                            <div className="list-item">
                              <div>Analyze Risks</div>
                              <div>
                                <Switch/>
                              </div>
                            </div>
                            <div className="list-item">
                              <div>Develop Risk Treatment</div>
                              <div>
                                <Switch/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card card-2">
                        <div className="card-header">
                          Develop BCM Response
                        </div>
                        <div className="card-body p-0">
                          <div className="switch-list">
                            <div className="list-item">
                              <div>Develop BCM Response </div>
                              <div>
                                <Switch/>
                              </div>
                            </div>
                            <div className="list-item">
                              <div>Develop Recovery Strategies</div>
                              <div>
                                <Switch/>
                              </div>
                            </div>
                            <div className="list-item">
                              <div>Develop Recovery Procedures and Plans</div>
                              <div>
                                <Switch/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card card-2">
                        <div className="card-header">
                          Validate BCM Plans
                        </div>
                        <div className="card-body p-0">
                          <div className="switch-list">
                            <div className="list-item">
                              <div>Train Staff and Recovery Teams</div>
                              <div>
                                <Switch/>
                              </div>
                            </div>
                            <div className="list-item">
                              <div>Exercise BCM Plans</div>
                              <div>
                                <Switch/>
                              </div>
                            </div>
                            <div className="list-item">
                              <div>Capture BCM Improvement Opportunities</div>
                              <div>
                                <Switch/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card card-2">
                        <div className="card-header">
                          Maintain the BCM Program
                        </div>
                        <div className="card-body p-0">
                          <div className="switch-list">
                            <div className="list-item">
                              <div>Assess the BCM Program Against Current Business Practices</div>
                              <div>
                                <Switch/>
                              </div>
                            </div>
                            <div className="list-item">
                              <div>Ensure BCM Comparison Against Recognized Benchmarks</div>
                              <div>
                                <Switch/>
                              </div>
                            </div>
                            <div className="list-item">
                              <div>Implement Corrective Actions and Continual Improvement</div>
                              <div>
                                <Switch/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card card-2">
                        <div className="card-header">
                          Integrate Disaster Recovery
                        </div>
                        <div className="card-body p-0">
                          <div className="switch-list">
                            <div className="list-item">
                              <div>Operate IT DR Management Program</div>
                              <div>
                                <Switch/>
                              </div>
                            </div>
                            <div className="list-item">
                              <div>Build IT DR Plans and Runbooks</div>
                              <div>
                                <Switch/>
                              </div>
                            </div>
                            <div className="list-item">
                              <div>Develop a Robust Testing Protocol</div>
                              <div>
                                <Switch/>
                              </div>
                            </div>
                            <div className="list-item">
                              <div>Develop IT DR Runbooks Update PRocess</div>
                              <div>
                                <Switch/>
                              </div>
                            </div>
                            <div className="list-item">
                              <div>Align Business Priorities With IT DR Capabilities</div>
                              <div>
                                <Switch/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="row">
                        <div className="col-lg-4">
                          <div className="checkgroup">
                            <input type="checkbox" id="1" value="1" />
                            <div className="card">
                              <div className="card-body">
                                <h5>Develop BCM Program Policy</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      <div className="mt-5 d-flex justify-content-between">
                          <div></div>
                          <div><Link href="/assessment-gate/quiz/functional" className="btn btn-primary btn-blue">Apply & Proceed</Link></div>
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