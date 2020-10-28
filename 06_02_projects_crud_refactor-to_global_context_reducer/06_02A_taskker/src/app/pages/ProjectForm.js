import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import AppLayout from '../../shared/layout/AppLayout';

const ProjectForm = (props) => {

    const [navToList, setNavToList] = useState(false);


    const saveAndClose = () => {
        // saveProject()
        
        props.history.push('/projects')
    }


    const activateNavToList = () => {
        setNavToList(true);
    }
    if (navToList) return <Redirect to="/projects" />
    return (
        <AppLayout>
            <div className="page-content">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col col-md-10">
                            <form className="card">
                                <div className="card-header d-flex justify-content-between">
                                        <h3 className="mt-2" style={{ display: 'inline-block'}}>Project Add</h3>
                                        <button onClick={ activateNavToList } 
                                            className="btn btn-info"> Back to list </button>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col col-md-9">
                                            <div className="form-group">
                                                <label className="form-label">Name</label>
                                                <input className="form-control" type="text" /></div> 
                                        </div>
                                        <div className="col col-md-3">
                                            <div className="form-group">
                                                <label className="form-label">Code</label>
                                                <input className="form-control" type="text" /></div>
                                        </div>
                                        <div className="col col-md-12">
                                            <div className="form-group">
                                                <label className="form-label">Description</label>
                                                <input className="form-control" type="text" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer text-right">
                                    <button className="btn btn-primary">
                                        Save</button>
                                    <button onClick={ saveAndClose }
                                        className="btn btn-primary ml-3">
                                        Save and close</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default ProjectForm;