import React from 'react'
import FilterBTN from '../FilterBTN';

const Status = ({setStatus, setPage}) => {
    let status = ["Alive", "Dead", "Unknown"]

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingStatus">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseStatus" aria-expanded="false" aria-controls="collapseStatis">
                    Status
                </button>
            </h2>
            <div id="collapseStatus" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body d-flex flex-wrap gap-3">
                    {status.map( (items, index) => (
                    <FilterBTN 
                    task={setStatus}
                    key={index} name="status" index={index} items={items} setPage={setPage}/>))}

                </div>
            </div>
        </div>
    )
}

export default Status