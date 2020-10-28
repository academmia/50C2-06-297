
import React from 'react';
import AppLayout from '../../shared/layout/AppLayout';

import { items } from '../../data/gallery';
import GalleryItemImage from '../components/GalleryItemImage';
import GalleryImageErrorBoundary from '../components/GalleryImageErrorBoundary';

const GalleryPage = (props) => {

    return (
        <AppLayout>
            <div className="my-3 my-md-5">
                <div className="container">
                    <div className="page-header">
                        <h1 className="page-title"> Gallery </h1>
                        <div className="page-subtitle"> Error boundary </div>
                    </div>
                    <div className="row row-cards">

                        { 
                            items.map( (item, i) => (
                                <div key={i} className="col-sm-6 col-lg-4">
                                    <div className="card p-3">
                                        <GalleryImageErrorBoundary>
                                            <GalleryItemImage imageUrl={ item.imageUrl } />
                                        </GalleryImageErrorBoundary>
                                    <div className="d-flex align-items-center px-2">
                                        <div>
                                            <div> { item.name } </div>
                                        </div>
                                        <div className="ml-auto text-muted">
                                            <a href="/" className="icon">
                                                <i className="fe fe-eye mr-1"></i> { item.views }</a>
                                            <a href="/" className="icon d-none d-md-inline-block ml-3">
                                                <i className="fe fe-heart mr-1"></i> { item.likes }</a>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            ))

                        }

                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default GalleryPage;

