import React, { Fragment } from 'react';

const Membre2 = ({nom, age, children, hideName}) => {
    return (
        <Fragment>
            <ul>
                <li>{ nom } : { age }</li>
                <p>{ children }</p>
            </ul>
            <button className="btn btn-danger ml-5 mb-2" onClick={hideName}>hide name</button>
            <br/>
        </Fragment>
    );
};

export default Membre2;
