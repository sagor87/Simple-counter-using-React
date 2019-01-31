import React from 'react';

const Laps = (props)=>{
    return(
        <ul className="list-group list-item-flush">
            {props.laps.map((lap,index) => {
                return (
                    <li key={index} className="list-group-item">
                        <h5>
                            <span className ="text-dark">Minute: </span>
                            <span className ="text-danger">{lap.min}</span>
                            <span className ="text-dark">Second: </span>
                            <span className ="text-danger">{lap.sec}</span>
                            <span className ="text-dark">MiliSecond: </span>
                            <span className ="text-danger">{lap.mili}</span>
                        </h5>

                    </li>
                )
            })}

        </ul>
    )
}
export default Laps;