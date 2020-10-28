import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import AppLayout from '../../shared/layout/AppLayout';
import axios from 'axios';

// setOptions({ workerSrc: '/pdf.worker.min.js' })

class DocManager extends Component {

    state = {
        file: null,
        uploadedDocs: [],
        viewDoc: null,
        viewDoc2: null,
        viewDocBlob: null,
        viewDocObjectUrl: null,
        
        numPages: null,
        pageNumber: 1,
    }

    onFileChange = (ev) => {
        ev.preventDefault();
        let files;
        if (ev.dataTransfer) {
           files = ev.dataTransfer.files;
        } else if (ev.target) {
           files = ev.target.files;
        }

        this.setState(() => ({ file: files[0] }),
        () => {
            console.log('Uploading file: ', this.state.file);
            if(['application/pdf'].indexOf(this.state.file.type) === -1) {
                console.log('Only files of type: pdf');
                return;
            }
            this.uploadDoc();
        });
    }

    uploadDoc = () => {
        let fd = new FormData();
        fd.append('document', this.state.file);

        axios.post('http://localhost:3344/upload/doc', fd)
            .then( resp => {
                console.log('Uploaded doc: ', resp.data);
                let doc = { ...resp.data, fullUrl: `http://localhost:3344/${resp.data.url}` }
                this.setState((prevState)=>({ 
                    uploadedDocs: [ ...prevState.uploadedDocs, doc ] 
                }))
            } )
    }

    downloadFile = (doc) => {
        axios.get(doc.fullUrl, { responseType: 'blob' })
            .then( resp => {
                window.URL.revokeObjectURL(this.state.viewDocObjectUrl);
                let viewDocObjectUrl = window.URL.createObjectURL(resp.data);
                this.setState(()=>({
                    viewDocObjectUrl: viewDocObjectUrl, 
                    viewDocBlob: resp.data 
                }))
            } )
    }

    viewOnline = (doc) => {
        this.setState( () => ({ 
            viewDoc2: null,
            viewDoc: doc 
        }), () => {
                this.downloadFile(this.state.viewDoc)
        } )
    }

    viewOnline2 = (doc) => {
        this.setState( () => ({ 
            viewDoc2: doc,
            viewDoc: null
         }))
    }

    componentDidMount = () => {
        
        let uploadedDocs = JSON.parse(localStorage.getItem('uploadedDocs')) || []
        if (uploadedDocs && Array.isArray(uploadedDocs) && uploadedDocs.length) 
            this.setState(() => ({ uploadedDocs: uploadedDocs }));
    }

    componentWillUnmount() {
        localStorage.setItem("uploadedDocs", JSON.stringify(this.state.uploadedDocs))
    }

    // react-pdf
    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
      }

    render() {
        const { uploadedDocs, viewDoc, viewDocObjectUrl, 
                viewDoc2, numPages } = this.state;
        return (
            <AppLayout>
                <div className="my-3 my-md-5">
                    <div className="container">
                        <div className="page-header">
                        <h1 className="page-title">
                            Document Manager
                        </h1>
                        </div>
                        <div className="row row-cards">
                        <div className="col-lg-3">
                            <div className="card">
                                <div className="m-5 d-flex align-items-center">
                                    <label htmlFor="uploadDoc"
                                        className="btn btn-primary btn-block">
                                        <i className="fe fe-plus"></i> 
                                        Upload document</label>
                                </div>
                                    <input type="file" name="uploadDoc" id="uploadDoc"
                                        onChange={ this.onFileChange }/>
                            </div>  
                        </div>
                        <div className="col-lg-9">
                            <div className="card">
                            <table className="table card-table table-vcenter">
                                <tbody>
                                {   uploadedDocs && Array.isArray(uploadedDocs) && 
                                    uploadedDocs.length > 0 &&
                                    uploadedDocs.map( doc => (
                                    <tr key={doc.name}>
                                        <td>
                                            { doc.name }
                                        </td>
                                        <td className="text-right text-muted d-none d-md-table-cell text-nowrap">
                                            { doc.size } Kb</td>
                                        <td className="text-right text-muted d-none d-md-table-cell text-nowrap">
                                            { doc.type || 'document' }</td>
                                        <td className="text-right">
                                            <button onClick={ () => { this.viewOnline(doc) } } 
                                                className="btn btn-sm btn-info">
                                                View</button>
                                            <button onClick={ () => { this.viewOnline2(doc) } } 
                                                className="btn btn-sm btn-info ml-3">
                                                View 2</button>
                                            <a  href={ doc.fullUrl } target="blank" download
                                                className="btn btn-sm btn-info ml-3">
                                                Download</a>
                                        </td>
                                    </tr>
                                    ))
                                }    
    
                            </tbody></table>
                            </div>
    
                            {   viewDoc &&
                                <div className="card d-flex align-items-center">
                                    <div className="card-header">
                                        <h6> { viewDoc.name } </h6>
                                    </div>
                                    <div style={ { width: '100%' }} 
                                        className="card-body">
                                        { viewDocObjectUrl && 
                                        <iframe id="viewpdf" title="viewPDF"
                                            style={ { width: '100%', height: '90vh' }}
                                            src={ viewDocObjectUrl } />
                                        }
                                    </div>
                                </div>
                            }

                            {   viewDoc2 &&
                                <div className="card d-flex align-items-center">
                                    <div className="card-header">
                                        <h6> { viewDoc2.name } </h6>
                                    </div>
                                    <Document
                                        file={ viewDoc2.fullUrl }
                                        onLoadSuccess={this.onDocumentLoadSuccess}
                                        >
                                    {
                                        Array.from( new Array(numPages),
                                            (el, index) => (
                                                <Page
                                                    key={`page_${index + 1}`}
                                                    pageNumber={index + 1}/>
                                            )
                                        )
                                    }
                                    </Document>
                                </div>
                            }
    
                        </div>
                        </div>
                    </div>
                </div>
            </AppLayout>
        )
    }
}

export default DocManager;