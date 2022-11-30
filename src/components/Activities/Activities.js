
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Profile from '../Profile/Profile';
import './Activities.css';
const Activities = ({ timeCart, addBreakHandler }) => {

   let totalTime = 0;
   for (const equipment of timeCart) {
      totalTime = totalTime + equipment.time * equipment.quantity;
      const gymDuration = document.getElementById('gymDuration');
      gymDuration.style.color = 'aqua';
      gymDuration.style.fontSize = 'larger'
      gymDuration.innerText = totalTime;
   }
   const brakeTime = {
      first: 10,
      second: 20,
      third: 30,
      fourth: 40,
      fifth: 50
   };
   const { first, second, third, fourth, fifth } = brakeTime;

   // Toast
   const toastNotify = () => toast("🦄 Task successfully complete !");
   toast.success('Correct Answer!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
   });

   

   return (
      <div className='activities-bg'>
         <Profile></Profile>
         <div className='break-div'>
            <h3>Add A Break</h3>
            <div className='d-flex div-bg evenly'>
               <button onClick={() => addBreakHandler(first)} className='circle-btn digit'>10s</button>
               <button onClick={() => addBreakHandler(second)} className='circle-btn digit'>20s</button>
               <button onClick={() => addBreakHandler(third)} className='circle-btn digit'>30s</button>
               <button onClick={() => addBreakHandler(fourth)} className='circle-btn digit'>40s</button>
               <button onClick={() => addBreakHandler(fifth)} className='circle-btn digit'>50s</button>
            </div>
         </div>

         <div>
            <h4>Exercise Details</h4>
            <div className='div-bg d-flex between'>
               <h5>Exercise time</h5>
               <h5 className='muted'><small id='gymDuration'>200</small> seconds</h5>
            </div>
            <div className='div-bg d-flex between'>
               <h5>Break time</h5>
               <h5 className='muted'><small id='breakDuration'> 15</small> seconds</h5>
            </div>
         </div>
         <button onClick={toastNotify} className='activity-btn '>Activity Completed</button>
         <ToastContainer />

      </div>
   );
};

export default Activities;