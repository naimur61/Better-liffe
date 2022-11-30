import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Equipment from '../Equipment/Equipment';
import { AddBrakeTime, AddToDB, GetBrakeTime, GetToDB } from '../FakeDB/FakeDB';
import Header from '../Header/Header';
import './Equipments.css'

const Equipments = () => {
   const [equipments, setEquipments] = useState([]);
   const [equipmentCart, setEquipmentCart] = useState([]);

   useEffect(() => {
      fetch('equipments.json')
         .then(res => res.json())
         .then(data => setEquipments(data))
   }, [])

   useEffect(() => {
      const storedCart = GetToDB();
      const savedCart = [];
      for (const id in storedCart) {
         const addedEquipment = equipments.find(equipment => equipment.id === id);
         if (addedEquipment) {
            const quantity = storedCart[id]
            addedEquipment.quantity = quantity;
            savedCart.push(addedEquipment)
         }
      }
      setEquipmentCart(savedCart)
   }, [equipments]);

   useEffect(() => {
      const time = GetBrakeTime();
      if (time) {
         addBreakHandler(time)
      }
   }, [])

   // exercise handler 
   const addToActivities = (selectedEquipment) => {
      let newEquipmentCart = [];
      const exist = equipmentCart.find(equipment => equipment.id === selectedEquipment.id);
      if (!exist) {
         selectedEquipment.quantity = 1;
         newEquipmentCart = [...equipmentCart, selectedEquipment];
      }
      else {
         const rest = equipmentCart.filter(equipment => equipment.id !== selectedEquipment.id);
         selectedEquipment.quantity = selectedEquipment.quantity + 1;
         newEquipmentCart = [...rest, exist]
      }


      setEquipmentCart(newEquipmentCart);
      AddToDB(selectedEquipment.id)
   }

   // break handler 
   const addBreakHandler = (time) => {
      const breakDuration = document.getElementById('breakDuration');
      breakDuration.style.color = 'aqua';
      breakDuration.style.fontSize = 'larger'
      breakDuration.innerText = time;
      AddBrakeTime(time)
   }


   return (
      <div className='wrapper'>
         <div>
            <Header></Header>
            <div className='product-container'>
               {
                  equipments.map(product => <Equipment
                     product={product}
                     addToActivities={addToActivities}
                     key={product.id}
                  ></Equipment>)
               }
            </div>
         </div>
         <div className='col2'>
            <Activities
               timeCart={equipmentCart}
               addBreakHandler={addBreakHandler}
            ></Activities>
         </div>
      </div>
   );
};

export default Equipments;

