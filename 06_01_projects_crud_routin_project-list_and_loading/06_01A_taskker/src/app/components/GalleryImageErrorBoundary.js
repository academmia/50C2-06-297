import React, { Component } from 'react';
import GalleryItemImage from './GalleryItemImage';

class GalleryImageErrorBoundary extends Component {
    
    constructor(props) {
		super(props);
		this.state = {
			hasError: false
		};
    }
    
	componentDidCatch(error, info) {
		this.setState({
			hasError: true
		});
	}

    render() {
        if(this.state.hasError) {
            return (
                <GalleryItemImage imageUrl="images/no-image-default.jpg" />
            )
        }

        return this.props.children;
    }
}

export default GalleryImageErrorBoundary;