import React from 'react'
import FilterBTN from '../FilterBTN'

const Gender = ({setPage, setGender}) => {
    let gender = ["Female", "Male", "Genderless", "Unknown"]

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Gender
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body d-flex flex-wrap gap-3">
                    {gender.map( (items, index) => (
                    <FilterBTN key={index} name="gender" index={index} items={items} setPage={setPage} task={setGender} />))}
                </div>
            </div>
        </div>
    )
}

export default Gender