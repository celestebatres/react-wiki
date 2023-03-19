import React from 'react';
import styles from "./Cards.module.scss";

const Cards = ({ results }) => {
  let display;

  if (results) {
    display = results.map(x => {
      let { id, name, image, location, status } = x;
      return (
        <div className="col-4 position-relative mb-4" key={id}>
          <div className={`${styles.card}`}>
            <img className={` ${styles.img} img-fluid`} src={image} alt="" />
            <div style={{padding: "10px"}} className="content">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6">Last Location</div>
                <div className="fs-5">{location.name}</div>
              </div>
            </div>
            {/* Hora de asignar colores a status de cada personaje */}
            {(()=>{
              if(status === "Dead"){
                return(
                  <div className={` ${styles.badge} position-absolute badge bg-danger`}>{status}</div>
                )
              }else if(status === "Alive"){
                return(
                  <div className={` ${styles.badge} position-absolute badge bg-success`}>{status}</div>
                )
              }else{
                return(
                  <div className={` ${styles.badge} position-absolute badge bg-secondary`}>{status}</div>
                )
              }
            })()

            }
            {/* <div className={` ${styles.badge} position-absolute badge bg-danger`}>{status}</div> */}
          </div>
        </div>)
    });
  } else {
    display = "No Characters Found :c";
  }

  return (
    //<div className='col-4'>Card</div>
    <>
      {display}
    </>
  )
}

export default Cards