import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import AppLayout from '../../shared/layout/AppLayout';
// import axios from 'axios';
import Loader from '../../shared/components/Loader';
import LoaderContentList from '../../shared/components/LoaderContentList';

import ProjectContext from '../context/projects/context';


const ProjectsPage = (props) => {
    const { projects, loading, getProjects } = useContext(ProjectContext);
    
    useEffect(() => {
        getProjects(); 
        // eslint-disable-next-line
    }, []) // run once

    // MOVED to global context: ProjectState (context/projexts/state.js)
    // const [projects, setProjects] = useState([]);
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     const getProjects = async () => {
    //         setLoading(true);
    
    //         const results = await axios.get(`http://localhost:3355/projects`);
    //         setProjects(results.data)   
    
    //         setLoading(false);
    //     };
    //     getProjects();
    // }, []); // run once only when mounted - like componentDidMount()
    // daca lipsesc [] atunci se ruleaza dupa fiecare render (loop)

    return (
        <AppLayout>
            <div className="page-content">
                <div className="container">
                    <div className="page-header">
                        <h1 className="page-title">Projects</h1>
                    </div>
                    <div className="row">
                        <div className="col col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">
                                        <Link to="/projects/add"
                                            className="btn btn-info text-white"> 
                                            Add new project</Link>
                                    </h3>
                                </div>
                                {/* { loading && 
                                    <Loader>
                                        <LoaderContentList />
                                    </Loader>
                                } */}
                                <Loader loading={loading} content={ <LoaderContentList/> }>
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
                                            {   projects && projects.map( project => (
                                                <tr key={project.id}>
                                                    <td className="">
                                                        <span className="text-muted">{project.code}</span></td>
                                                    <td className=""><a href="/" className="text-inherit">
                                                        {project.name}</a></td>
                                                    <td className="">Carlson Limited</td>
                                                    <td className="">15 Dec 2017</td>
                                                    <td className="">21 Jan 2052</td>
                                                    <td className="">
                                                        <span className="status-icon bg-success"></span> 
                                                        Active</td>
                                                    <td className="">{project.owner_name}</td>
                                                    <td className="text-right"><button className="btn btn-sm btn-secondary">Manage</button>
                                                        <div className="dropdown"><button className="btn btn-sm btn-secondary dropdown-toggle">Actions</button></div>
                                                    </td>
                                                    <td className=""><a href="/"   className="icon"><i className="fe fe-edit"></i></a></td>
                                                </tr>
                                                )
                                            )}

                                        </tbody>
                                    </table>
                                </div>
                                </Loader>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default ProjectsPage;