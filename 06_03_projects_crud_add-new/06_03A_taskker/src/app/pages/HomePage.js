import React, { Component } from 'react';
import AppLayout from '../../shared/layout/AppLayout';
import { SettingsContext } from '../settings-context';


class HomePage extends Component {

    state = {

    }

    componentDidMount() {
        // send API request using global settings: baseAPI
        console.log('Settings context: ', this.context);
    }

    render() {
        return (
            <AppLayout>
                <div className="page-content">
                    <div className="container">
                        <div className="page-header">
                            <h1 className="page-title">Dashboard</h1>
                        </div>
                        <div className="row row row-cards">
                
                            <div className="col col-sm-6 col-lg-3">
                                <div className="card p-3">
                                    <div className="d-flex align-items-center"><span className="stamp stamp-md bg-blue mr-3"><i className="fe fe-plus"></i></span>
                                        <div>
                                            <div className="h4 m-0"><a href="/" >7 <small>New Tasks</small></a></div><small className="sm text-muted">72 total</small></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-sm-6 col-lg-3">
                                <div className="card p-3">
                                    <div className="d-flex align-items-center"><span className="stamp stamp-md bg-green mr-3"><i className="fe fe-star"></i></span>
                                        <div>
                                            <div className="h4 m-0"><a href="/" >4 <small>Closed Tasks</small></a></div><small className="sm text-muted">from 2 projects</small></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-sm-6 col-lg-3">
                                <div className="card p-3">
                                    <div className="d-flex align-items-center"><span className="stamp stamp-md bg-yellow mr-3"><i className="fe fe-activity"></i></span>
                                        <div>
                                            <div className="h4 m-0"><a href="/" >2 <small>Active Projects</small></a></div><small className="sm text-muted">12 total</small></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-sm-6 col-lg-3">
                                <div className="card p-3">
                                    <div className="d-flex align-items-center"><span className="stamp stamp-md bg-red mr-3"><i className="fe fe-alert-octagon"></i></span>
                                        <div>
                                            <div className="h4 m-0"><a href="/" >4 <small>New Bugs</small></a></div><small className="sm text-muted">27 total</small></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                
                        <div className="row row-cards row-deck">
                            <div className="col col-12">
                                <div className="card">
                                    <div className="table-responsive">
                                        <table className="table card-table table-hover table-outline table-vcenter text-nowrap">
                                            <thead className="">
                                                <tr className="">
                                                    <th className="text-center w-1"><i className="icon-people"></i></th>
                                                    <th className="">Task</th>
                                                    <th className="">Completed</th>
                                                    <th className="text-center">Status</th>
                                                    <th className="">Project</th>
                                                    <th className="text-center">Assignee</th>
                                                    <th className="text-center"><i className="icon-settings"></i></th>
                                                </tr>
                                            </thead>
                                            <tbody className="">
                                                <tr className="">
                                                    <td className="text-center"><span className="avatar d-block" 
                                                        style={{ backgroundImage: `url('./images/faces/female/25.jpg')` }}><span className="avatar-status bg-green"></span></span>
                                                    </td>
                                                    <td className="">
                                                        <div>Task One</div>
                                                        <div className="sm text-muted">Created: Mar 19, 2018</div>
                                                    </td>
                                                    <td className="">
                                                        <div className="clearfix">
                                                            <div className="float-left"><strong>42%</strong></div>
                                                            <div className="float-right"><small className="sm text-muted">deadline: Mar 19, 2052</small></div>
                                                        </div>
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar bg-yellow" 
                                                                style={{ width: `42%` }}></div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center"> Working </td>
                                                    <td className="">
                                                        <div className="sm text-muted">Asignee</div>
                                                        <div>James Hansen</div>
                                                    </td>
                                                    <td className="text-center">Project One</td>
                                                    <td className="text-center">
                                                        <div className="dropdown"><a href="/"   className=""><i className="fe fe-more-vertical"></i> </a></div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Projects</h3>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table card-table table-vcenter text-nowrap">
                                            <thead className="">
                                                <tr className="">
                                                    <th className="w-1">Code</th>
                                                    <th className="">Project</th>
                                                    <th className="">Client</th>
                                                    <th className="">Created</th>
                                                    <th className="">Deadline</th>
                                                    <th className="">Status</th>
                                                    <th className="">Owner</th>
                                                    <th className=""></th>
                                                    <th className=""></th>
                                                </tr>
                                            </thead>
                                            <tbody className="">
                                                <tr className="">
                                                    <td className=""><span className="text-muted">001401</span></td>
                                                    <td className=""><a href="invoice.html" className="text-inherit">Design Works</a></td>
                                                    <td className="">Carlson Limited</td>
                                                    <td className="">15 Dec 2017</td>
                                                    <td className="">21 Jan 2052</td>
                                                    <td className=""><span className="status-icon bg-success"></span> Active</td>
                                                    <td className="">James Hansen</td>
                                                    <td className="text-right"><button className="btn btn-sm btn-secondary">Manage</button>
                                                        <div className="dropdown"><button className="btn btn-sm btn-secondary dropdown-toggle">Actions</button></div>
                                                    </td>
                                                    <td className=""><a href="/"   className="icon"><i className="fe fe-edit"></i></a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AppLayout>
                
        )
    }

}

HomePage.contextType = SettingsContext;

export default HomePage;
