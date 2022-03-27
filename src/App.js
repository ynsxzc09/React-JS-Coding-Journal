import React, { useState } from 'react';
import "./App.css";

const App = () => {

   const [list, setList] = useState('');
   const [date, setDate] = useState('');
   const [journal, setJournal] =useState([]);

   const handle = (e) => {
      e.preventDefault();
      localStorage.setItem('list', list);
      localStorage.setItem('date', date);
      if (list && date) {
         const notes ={id : new Date().getTime().toString(), list, date}
         setJournal((journal)=> {
           return[...journal, notes]
         })
         setList('');
         setDate('');
        } else {
          console.log('empty values')
        }
   };

   const remove = (id) => {
      localStorage.removeItem('list');
      localStorage.removeItem('date');
      let newList = journal.filter((list) => list.id !== id);
    setJournal(newList);

   };

   return (
      <div className="app">
      <div className="container">
      <form  className="form">
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
            <button className="submit" onClick={handle} >Submit</button>
         </div>
         <div>
            <button onClick={remove} className="remove">Remove</button>
         </div>
         </form>
         <section className="result">
         {
            journal.map((notes,index)=> {
        const {id,list,date} = notes
        return (
        <div key={id}>
            <p>{date} {list}</p>
        </div>
        );
      })
         }
         </section>
         </div>
      </div>
   );
};
export default App;