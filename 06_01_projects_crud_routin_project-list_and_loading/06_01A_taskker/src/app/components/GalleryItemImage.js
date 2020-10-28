import React from 'react';

const GalleryItemImage = ({ imageUrl }) => {
    return (
        <a href="/" className="mb-3">
            <img src={ imageUrl.toLowerCase() } alt="" className="rounded" />
        </a>
    )
}

export default GalleryItemImage;