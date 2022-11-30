
const AddToDB = (id) => {
   // console.log(id);
   let timeCart = {};

   // get the stored info from localStorage
   const storedCart = localStorage.getItem('Exercise time');
   if (storedCart) {
      timeCart = JSON.parse(storedCart);
   }


   // add time 
   const quantity = timeCart[id];
   if (quantity) {
      const newQuantity = quantity + 1;
      timeCart[id] = newQuantity;
   } else {
      timeCart[id] = 1;
   }
   localStorage.setItem('Exercise time', JSON.stringify(timeCart));
};
const GetToDB = () => {
   let timeCart = {};

   // get the stored info from localStorage
   const storedCart = localStorage.getItem('Exercise time');
   if (storedCart) {
      timeCart = JSON.parse(storedCart);
      return timeCart;
   }
}

const AddBrakeTime = (time) => {
   localStorage.setItem('brake-time', time);

}
const GetBrakeTime = () => {
   const time = localStorage.getItem('brake-time');
   return time;
}

export { AddToDB, GetToDB, AddBrakeTime, GetBrakeTime };