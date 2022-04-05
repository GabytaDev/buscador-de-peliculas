import * as React from 'react';
import "../styles/_Loader.scss"

const Loader = ({isLoading})=>{

    return (
        isLoading &&
        <div className='content-loader'>
            <div className="lds-dual-ring"></div>
        </div>
    )
}

export default Loader;