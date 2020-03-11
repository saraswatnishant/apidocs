import React from 'react';

const PageTitle = (props) => {
    let { title, description } = props;
    return (
        <div className='page-title'>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default PageTitle;