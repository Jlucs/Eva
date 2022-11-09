import type { ReactElement } from 'react'
import Layout from '../../../components/Layouts/Master'
import type { NextPageWithLayout } from '../../_app'
import Subheader from '../../../components/Subheader/Subheader'
import ListBox2 from '../../../components/ListBox/ListBox2'
import Link from 'next/link'
import { useEffect } from 'react'
import Sidebar from '../../../components/Sidebar/Sidebar1'
import { Tab } from '@headlessui/react'

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
        <div className="heading">
            <div className="container container-fluid container-1440">
                <h1>New assessment (step 4 of 4)</h1>
            </div>
        </div>
        <div className="content">
            <div className="container container-fluid container-1440">
                <h3 className="mb-5">ISO - 20001-2018 (General Maturity) Assessment</h3>
                <div className="table">
                    <div className="row no-gutters">
                        <div className="col col-12 col-padded col-bordered" style={{ background: "#fafafa" }}>
                        Identify I&T services.
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col col-1 col-padded col-bordered" style={{ background: "#fafafa" }}>
                            <div className="card text-center fw-500">
                                Nr.
                            </div>
                        </div>
                        <div className="col col-8 col-padded col-bordered" style={{ background: "#fafafa" }}>
                            <div className="card text-center fw-500">
                                Activities
                            </div>
                        </div>
                        <div className="col col-3 col-padded col-bordered" style={{ background: "#fafafa" }}>
                            <div className="card text-center fw-500">
                                Score Definition
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col col-12">
                            <div className="row no-gutters">
                                <div className="col col-padded col-bordered col-1 d-flex align-items-center justify-content-center">
                                    <div className="card">
                                        1.
                                    </div>
                                </div>
                                <div className="col col-padded col-bordered col-8">
                                    <div className="card">
                                        <p>Assess current I&T services and service levels to identify gaps between existing services and the business activities they support. Identify areas for improvement of existing services and service level options.</p>
                                    </div>
                                </div>
                                <div className="col col-padded col-bordered col-3 d-flex align-items-center justify-content-center">
                                    <div className="card">
                                        <ListBox2/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col col-12">
                            <div className="row no-gutters">
                                <div className="col col-padded col-bordered col-1 d-flex align-items-center justify-content-center">
                                    <div className="card">
                                        2.
                                    </div>
                                </div>
                                <div className="col col-padded col-bordered col-8">
                                    <div className="card">
                                        <p>Analyze, study and estimate future demand and confirm capacity of existing I&T-enabled services.</p>
                                    </div>
                                </div>
                                <div className="col col-padded col-bordered col-3 d-flex align-items-center justify-content-center">
                                    <div className="card">
                                        <ListBox2/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col col-12">
                            <div className="row no-gutters">
                                <div className="col col-padded col-bordered col-1 d-flex align-items-center justify-content-center">
                                    <div className="card">
                                        3.
                                    </div>
                                </div>
                                <div className="col col-padded col-bordered col-8">
                                    <div className="card">
                                        <p>Analyze business process activities to identify the need for new or redesigned I&T services.</p>
                                    </div>
                                </div>
                                <div className="col col-padded col-bordered col-3 d-flex align-items-center justify-content-center">
                                    <div className="card">
                                        <ListBox2/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col col-12">
                            <div className="row no-gutters">
                                <div className="col col-padded col-bordered col-1 d-flex align-items-center justify-content-center">
                                    <div className="card">
                                        4.
                                    </div>
                                </div>
                                <div className="col col-padded col-bordered col-8">
                                    <div className="card">
                                        <p>Compare identified requirements to existing service components in the portfolio. If possible, package existing service components (I&T services, service level options and service packages) into new service packages to meet identified business requirements.</p>
                                    </div>
                                </div>
                                <div className="col col-padded col-bordered col-3 d-flex align-items-center justify-content-center">
                                    <div className="card">
                                        <ListBox2/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col col-12">
                            <div className="row no-gutters">
                                <div className="col col-padded col-bordered col-1 d-flex align-items-center justify-content-center">
                                    <div className="card">
                                        5.
                                    </div>
                                </div>
                                <div className="col col-padded col-bordered col-8">
                                    <div className="card">
                                        <p>Regularly review the portfolio of I&T services with portfolio management and business relationship management to identify obsolete services. Agree on retirement and propose change.</p>
                                    </div>
                                </div>
                                <div className="col col-padded col-bordered col-3 d-flex align-items-center justify-content-center">
                                    <div className="card">
                                        <ListBox2/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col col-12">
                            <div className="row no-gutters">
                                <div className="col col-padded col-bordered col-1 d-flex align-items-center justify-content-center">
                                    <div className="card">
                                        6.
                                    </div>
                                </div>
                                <div className="col col-padded col-bordered col-8">
                                    <div className="card">
                                        <p>Where possible, match demands to service packages and create standardized services to obtain overall efficiencies.</p>
                                    </div>
                                </div>
                                <div className="col col-padded col-bordered col-3 d-flex align-items-center justify-content-center">
                                    <div className="card">
                                        <ListBox2/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="table mt-5">
                    <div className="row no-gutters">
                        <div className="col col-12 col-padded col-bordered" style={{ background: "#fafafa" }}>
                        Catalog I&T-enabled services.
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col col-1 col-padded col-bordered" style={{ background: "#fafafa" }}>
                            <div className="card text-center fw-500">
                                Nr.
                            </div>
                        </div>
                        <div className="col col-8 col-padded col-bordered" style={{ background: "#fafafa" }}>
                            <div className="card text-center fw-500">
                                Activities
                            </div>
                        </div>
                        <div className="col col-3 col-padded col-bordered" style={{ background: "#fafafa" }}>
                            <div className="card text-center fw-500">
                                Score Definition
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col col-12">
                            <div className="row no-gutters">
                                <div className="col col-padded col-bordered col-1 d-flex align-items-center justify-content-center">
                                    <div className="card">
                                        1.
                                    </div>
                                </div>
                                <div className="col col-padded col-bordered col-8">
                                    <div className="card">
                                        <p>Publish in catalogues relevant live I&T-enabled services, service packages and service level options from the portfolio.</p>
                                    </div>
                                </div>
                                <div className="col col-padded col-bordered col-3 d-flex align-items-center justify-content-center">
                                    <div className="card">
                                        <ListBox2/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col col-12">
                            <div className="row no-gutters">
                                <div className="col col-padded col-bordered col-1 d-flex align-items-center justify-content-center">
                                    <div className="card">
                                        2.
                                    </div>
                                </div>
                                <div className="col col-padded col-bordered col-8">
                                    <div className="card">
                                        <p>Continually ensure that the service components in the portfolio and the related service catalogues are complete and up to date.</p>
                                    </div>
                                </div>
                                <div className="col col-padded col-bordered col-3 d-flex align-items-center justify-content-center">
                                    <div className="card">
                                        <ListBox2/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col col-12">
                            <div className="row no-gutters">
                                <div className="col col-padded col-bordered col-1 d-flex align-items-center justify-content-center">
                                    <div className="card">
                                        3.
                                    </div>
                                </div>
                                <div className="col col-padded col-bordered col-8">
                                    <div className="card">
                                        <p>Inform business relationship management of any updates to the service catalogues.</p>
                                    </div>
                                </div>
                                <div className="col col-padded col-bordered col-3 d-flex align-items-center justify-content-center">
                                    <div className="card">
                                        <ListBox2/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="table">
                    <div className="row no-gutters">
                        <div className="col col-padded col-bordered col-2" style={{ background: "#fafafa" }}>
                            <div className="card text-center fw-500">
                                Area Name
                            </div>
                        </div>
                        <div className="col col-5 col-padded col-bordered" style={{ background: "#fafafa" }}>
                            <div className="card text-center fw-500">
                                Activities
                            </div>
                        </div>
                        <div className="col col-5 col-padded col-bordered" style={{ background: "#fafafa" }}>
                            <div className="card text-center fw-500">
                                Score Definition
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col col-padded col-bordered col-2 d-flex align-items-center">
                            <div className="card">
                                <p>Identify I&T services.</p>
                            </div>
                        </div>
                        <div className="col col-10">
                            <div className="row no-gutters">
                                <div className="col col-padded col-bordered col-6">
                                    <div className="card">
                                        <p>1.  Assess current I&T services and service levels to identify gaps between existing services and the business activities they support. Identify areas for improvement of existing services and service level options.</p>
                                    </div>
                                </div>
                                <div className="col col-padded col-bordered col-6">
                                    <div className="card">
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="row no-gutters">
                                <div className="col col-padded col-bordered col-6">
                                    <div className="card">
                                        <p>2.  Analyze, study and estimate future demand and confirm capacity of existing I&T-enabled services.</p>
                                    </div>
                                </div>
                                <div className="col col-padded col-bordered col-6">
                                    <div className="card">
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="row no-gutters">
                                <div className="col col-padded col-bordered col-6">
                                    <div className="card">
                                        <p>3.  Analyze business process activities to identify the need for new or redesigned I&T services.</p>
                                    </div>
                                </div>
                                <div className="col col-padded col-bordered col-6">
                                    <div className="card">
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="row no-gutters">
                                <div className="col col-padded col-bordered col-6">
                                    <div className="card">
                                        <p>4.  Compare identified requirements to existing service components in the portfolio. If possible, package existing service components (I&T services, service level options and service packages) into new service packages to meet identified business requirements.</p>
                                    </div>
                                </div>
                                <div className="col col-padded col-bordered col-6">
                                    <div className="card">
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="row no-gutters">
                                <div className="col col-padded col-bordered col-6">
                                    <div className="card">
                                        <p>5.  Regularly review the portfolio of I&T services with portfolio management and business relationship management to identify obsolete services. Agree on retirement and propose change.</p>
                                    </div>
                                </div>
                                <div className="col col-padded col-bordered col-6">
                                    <div className="card">
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="row no-gutters">
                                <div className="col col-padded col-bordered col-6">
                                    <div className="card">
                                        <p>6.  Where possible, match demands to service packages and create standardized services to obtain overall efficiencies.</p>
                                    </div>
                                </div>
                                <div className="col col-padded col-bordered col-6">
                                    <div className="card">
                                    
                                    </div>
                                </div>
                            </div>
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