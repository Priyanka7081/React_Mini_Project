// import React,{useState} from 'react'
// import useLocalStorage from "./useLocalStorage";
// import ExpenseFrom from "./ExpenseForm";
// import ExpenseList from "./ExpenseList";
// import Filters from "./Filters";



// const App = () => {
//   const [expenses, setExpenses] = useLocalStorage("expenses",[
//     {
//       id:1,title:"Groceries",amount:420, date:"2025-08-01",category:"Food"
//     }

    
//   ])
//   const[filters,setFilters] = useState({month:'all',category:'all'});

//   const addExpenses = (exp) =>{
//     setExpenses((prev) =>[{...exp,id:Date.now()},...prev]);
//   };
//   const updateExpenses = (id, update) =>{
//     setExpenses((prev) =>prev.map((e)=>(e.id ===id?{...e,...update}
//       :e
//     )));
//   };
//   const deleteExpenses = (id)=>{
//     setExpenses((prev) => prev.filter((e)=>e.id !==id));
//   };
//   const filtered = expenses.filter((e)=>{
//     if(filters.month !=="all"){
//       const m =e.date.slice(0,7);
//       if(m !== filters.month)return false;
//     }
//     if(filters.category!=="all" && e.category!== filters.category)
//       return false;
//     return true;
//   });

//   const Total = filtered.reduce((s,e) =>s+Number(e.amount),0);
  
//   return (
//    <div className='container'>
//     <header className='header'>
//       <h1>Personal Expense Tracker</h1>
//       <div className='total'>Total:{Total}</div>

//     </header>
//     <main>
//       <ExpenseFrom onSubmit={addExpenses} />
//       <Filters expenses={expenses} filters = {filters} setFilters={setFilters} />
//       <ExpenseList items= {filtered} onDelete={deleteExpenses} onUpdate={updateExpenses}/>
//     </main>
//     <footer className='footer'>
//       <small> Saved in LocalStorage # Simple Demo App</small>
//     </footer>

//    </div>
//   )
// }

// export default App
import React, { useState } from 'react';
import useLocalStorage from "./useLocalStorage";
import ExpenseForm from "./ExpenseForm.jsx";
import ExpenseList from "./ExpenseList.jsx";
import Filters from "./Filters.jsx";

const App = () => {
  const [expenses, setExpenses] = useLocalStorage("expenses", [
    { id: 1, title: "Groceries", amount: 420, date: "2025-08-01", category: "Food" }
  ]);

  const [filters, setFilters] = useState({ month: 'all', category: 'all' });

  const addExpenses = (exp) => {
    setExpenses((prev) => [{ ...exp, id: Date.now() }, ...prev]);
  };

  const updateExpenses = (id, update) => {
    setExpenses((prev) => prev.map((e) => (e.id === id ? { ...e, ...update } : e)));
  };

  const deleteExpenses = (id) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  const filtered = expenses.filter((e) => {
    if (filters.month !== "all") {
      const m = e.date.slice(0, 7);
      if (m !== filters.month) return false;
    }
    if (filters.category !== "all" && e.category !== filters.category) return false;
    return true;
  });

  const Total = filtered.reduce((s, e) => s + Number(e.amount), 0);

  return (
    <div className='container'>
      <header className='header'>
        <h1>Personal Expense Tracker</h1>
        <div className='total'>Total: {Total}</div>
      </header>
      <main>
        <ExpenseForm onSubmit={addExpenses} />
        <Filters expenses={expenses} filters={filters} setFilters={setFilters} />
        <ExpenseList items={filtered} onDelete={deleteExpenses} onUpdate={updateExpenses} />
      </main>
      <footer className='footer'>
        <small>Saved in LocalStorage # Simple Demo App</small>
      </footer>
    </div>
  );
};

export default App;
