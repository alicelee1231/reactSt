import React from "react";

function Clock(props){
    return(
        <div>
            <h1>안녕, 하하하하</h1>
            <h2>현재 시각 : {new Date().toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock;