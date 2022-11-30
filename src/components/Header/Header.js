import { faCircleCheck, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'

const Header = () => {
   return (
      <div>
         <h2 className='head-title'>
            <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
            <span>Beater Life</span>
         </h2>
         <h3 className='title'><FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon> Select & start your gym session.</h3>
      </div>
   );
};

export default Header;