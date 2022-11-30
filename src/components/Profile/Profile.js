import React from 'react';
import { faLocation, faLocationArrow, faLocationDot, faLocationPin, faLocationPinLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dp from './dp/look.jpg'

import './Profile.css'

const Profile = () => {
   return (
      <div>
         <div className='profile'>
            <div><img className='dp' src={dp} alt="" />
            </div>
            <div>
               <h3>Naimur Rahman</h3>
               <p><small className='muted'><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Pabna, Rajshahi</small></p>
            </div>
         </div>
         <div className='my-details'>
            <div>
               <h3>50
                  <h6 className="muted d-inline"> kg</h6></h3>
               <h5 className="light-muted">Weight</h5>
            </div>
            <div>
               <h3>6.5
                  <h6 className="muted d-inline"> ft</h6></h3>
               <h5 className="light-muted">Height</h5>
            </div>
            <div>
               <h3>25
                  <h6 className="muted d-inline"> yrs</h6></h3>
               <h5 className="light-muted">Age</h5>
            </div>
         </div>
      </div>
   );
};

export default Profile;