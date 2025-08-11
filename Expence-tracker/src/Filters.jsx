// import React from "react";

// export default function Filters({expenses, Filters, setFilters}){
//     const months = Array.from(new set(expenses.map((e)=> e.date.slice(0,7)))).sort().reverse();
//     const categories = Array.from(new Set(expenses.map((e) =>e.category)))

//     return(
//         <div className="filters">
//             <select
//             value={Filters.month}
//             onChange={(e) => setFilters((prev) =>({...prev,month: e.target.value}))}>

//                 <option value="all">All Months</option>
//                 {months.map((m)=>{
//                     <option key={m} value={m}>
//                     {m}
//                     </option>
//                 })}

//             </select>

//             <select
//             value={Filters.category}
//             onChange={(e)=>setFilters((prev)=>({...prev, category: e.target.value}))}
//             >
//                   <option value="all">All categories</option>
//                 {categories.map((c)=>{
//                     <option key={c} value={c}>
//                     {c}
//                     </option>
//                 })}


//             </select>

//             <button 
//             className="btn"
//             onClick={() =>setFilters({month:"all",category:"all"})}>
//                 Reset

//             </button>
//         </div>
//     )
    
// }
import React from "react";

export default function Filters({ expenses, filters, setFilters }) {
  const months = Array.from(new Set(expenses.map((e) => e.date.slice(0, 7))))
    .sort()
    .reverse();

  const categories = Array.from(new Set(expenses.map((e) => e.category)));

  return (
    <div className="filters">
      <select
        value={filters.month}
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, month: e.target.value }))
        }
      >
        <option value="all">All Months</option>
        {months.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>

      <select
        value={filters.category}
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, category: e.target.value }))
        }
      >
        <option value="all">All categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <button
        className="btn"
        onClick={() => setFilters({ month: "all", category: "all" })}
      >
        Reset
      </button>
    </div>
  );
}
