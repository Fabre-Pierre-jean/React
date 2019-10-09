import React, { Fragment } from 'react';

const Membre = ({nom, age, children, hideName, handleChange}) => {
    return (
        <Fragment>
            <ul>
                <li>{ nom } : { age }</li>
                <p>{ children }</p>
            </ul>
            <input value={nom} onChange={handleChange} type="text"/><br/>
            <button className="btn btn-danger ml-5 mt-3 mb-2" onClick={hideName}>hide name</button>
            <br/>
        </Fragment>
    );
};

export default Membre;
