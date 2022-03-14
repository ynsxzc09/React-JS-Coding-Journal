import React, { useState } from 'react';
import "./App.css";

const App = () => {

   const [list, setList] = useState('');
   const [date, setDate] = useState('');

   const handle = () => {
      localStorage.setItem('list', list);
      localStorage.setItem('date', date);
   };
   const remove = () => {
      localStorage.removeItem('list');
      localStorage.removeItem('date');
   };
   return (
      <div className="app">
      <div className="container">
      <form onClick={handle} className="form">
         <input
          type="text"
            value={list}
            onChange={(e) => setList(e.target.value)}
            className="list"
         />
         <input
          type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="date"
         />
         <div>
            <button className="submit">Submit</button>
         </div>
         <div>
            <button onClick={remove} className="remove">Remove</button>
         </div>
         </form>
         <section className="result">
            <div>
            <p>{localStorage.getItem('date')} {localStorage.getItem('list')} </p>
            </div>
         </section>
         </div>
      </div>
   );
};
export default App;