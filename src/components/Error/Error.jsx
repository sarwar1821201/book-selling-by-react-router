import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
 
    const {error, status}=useRouteError();

    return (
        <div>
           <h1>Error From : {error.message}  </h1>
        </div>
    );
};

export default Error;