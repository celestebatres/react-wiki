import React from 'react'
import Gender from './Category/Gender';
import Species from './Category/Species';
import Status from './Category/Status';

const Filters = ({setStatus, setPage, setGender, setSpecies}) => {
  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-2">Filter</div>
      <div style={{ cursor: 'pointer' }} className="text-center text-primary text-decoration-underline mb-3">Clear Filters</div>
      <div className="accordion accordion" id="accordionExample">
        <Status setPage={setPage} setStatus={setStatus}/>
        <Species setPage={setPage} setSpecies={setSpecies}/>
        <Gender setPage={setPage} setGender={setGender} />
      </div>

    </div>
  );
}

export default Filters;