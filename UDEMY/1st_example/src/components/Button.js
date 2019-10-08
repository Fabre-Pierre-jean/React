import React from 'react';

const Button = ({vieillir, num}) => {
    return (
        <div className="container text-center">
            <button className="btn btn-success ml-5" onClick={vieillir}>Vieillir de { num }ans membre1</button>
        </div>
    );
};

export default Button;
