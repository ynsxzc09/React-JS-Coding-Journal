import React, { useEffect, useState } from 'react';
import "./App.css";


const getStorage = () => {
   const data = JSON.parse(localStorage.getItem('notes'))
   if (data) { return data
   } else {
      return localStorage.setItem('notes', JSON.stringify([]))
   }
}

const App = () => {

   const [list, setList] = useState('');
   const [date, setDate] = useState('');
   const [invalid, setInvalid] = useState('')
   const [journal, setJournal] =useState(getStorage());

   const handle = (e) => {
      e.preventDefault();
      // localStorage.setItem('list', list);
      // localStorage.setItem('date', date);
      if (list && date) {
         const notes ={id : new Date().getTime().toString(), list, date}
         setJournal((journal)=> {
           return[...journal, notes]
         })
         setList('');
         setDate('');
        } else {
         setInvalid('Please Enter value')
         return setTimeout(() => {setInvalid('')
            
         }, 2000);
        }
   };
      useEffect(()=> {
         localStorage.setItem('notes', JSON.stringify(journal));
      }, [journal])


   const remove = (e) => {
      const {id} = e.target
      const newList = journal.filter((item) => item.id !== id);
      setJournal(newList)
      console.log(id)
   };

   return (
      <div className="app">
      <div className="container">
      <form  className="form">
      <h3>{invalid}</h3>
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
       
         </form>
         <section className="result">
         {
            journal.map((notes)=> {
        const {id,list,date} = notes
        return (
        <div key={id}>
            <p>{date} {list}</p>
            <div>
            <button onClick={remove} className="remove" id={id}>Remove</button>
         </div>
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