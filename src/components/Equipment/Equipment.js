import React from 'react';
import './Equipment.css'

const Equipment = ({ addToActivities, product }) => {
   const { picture, id, name, about, time, age } = product;

   return (<div className='card-div'>
      <div className='card'>
         <img className='picture' src={picture} alt="" />
         <h4>{name}</h4>
         <small className='d-block muted'>{about.length > 70 ? about.slice(0, 70) + '...see more!' : about}</small>
         <small className='d-block '>For Age :  {age}</small>
         <small className='d-block '>Time required :  <strong>{time}s</strong></small>
         <button onClick={() => addToActivities(product)} className='btn'><strong className=''>Add to list</strong></button>
      </div>
   </div>
   );
};

export default Equipment;