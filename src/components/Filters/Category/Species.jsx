import React from 'react'
import FilterBTN from '../FilterBTN'

const Species = ({setPage, setSpecies}) => {
    let species = [
        "Human",
        "Alien",
        "Humanoid",
        "Poopybutthole",
        "Mythological",
        "Unknown",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
        "Planet",
      ];

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingSpecies">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSpecies" aria-expanded="false" aria-controls="collapseSpecies">
                    Species
                </button>
            </h2>
            <div id="collapseSpecies" className="accordion-collapse collapse" aria-labelledby="headingSpecies" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body d-flex flex-wrap gap-3">
                    {species.map( (items, index) => (
                    <FilterBTN task={setSpecies} key={index} name="species" index={index} items={items} setPage={setPage}/>))}

                </div>
            </div>
        </div>
    )
}

export default Species