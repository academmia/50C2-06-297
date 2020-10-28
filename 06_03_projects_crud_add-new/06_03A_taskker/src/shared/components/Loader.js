import React, { Fragment } from 'react';

const Loader = ({loading, content, children}) => {
    const loadingContent = (
    <div className="dimmer active m-5">
        <div className="loader"></div>
        <div className="dimmer-content">
            {   content ? content :
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
                </p>
            }
        </div>
    </div>)

    return (
        <Fragment>
            {  (loading === true) 
            ? loadingContent 
            : children  
            }
        </Fragment>
    )
}

export default Loader;