// import React from 'react';

function LoggerComponent (props) {
  console.log(props);
     
    return (
        <div className="log-comp">
            <p>{props.message}</p>
        </div>
    );

}

export default LoggerComponent;