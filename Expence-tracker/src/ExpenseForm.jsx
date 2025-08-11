import React,{ useState , useEffect} from "react";
const categories = ["Food","Transport","Bills","Shopping","Others"];

export default function ExpenseForm ({onSubmit,initial}){
    const [title,setTitle] = useState(initial?.title || "");
    const [amount,setAmount] = useState(initial?.amount ?? "");
    const [date,setDate] = useState(initial?.date ||new Date().toISOString().slice(0,10));
    const [category,setCategory] = useState(initial?.category || "Food");


    useEffect(()=>{
        if(initial) {
            setTitle(initial.title || "");
            setAmount(initial.amount ?? "");
            setDate(initial.date || new Date().toISOString.slice(0,10));
            setCategory(initial.category || "Food");
        }
    },[initial]);

    const submit = (e) => {
        e.preventDefault();
        if(!title.trim() || amount === " " || isNaN(Number(amount))) {
            return alert ("Please Enter a Valid Title and Amount.");

        }
        onSubmit ({ title: title.trim(),amount:Number(amount),date,category});
        //reset only when not editing (no'initial')
        if (!initial){
            setTitle(" ");
            setAmount(" ");
            setDate(new Date().toISOString.slice(0,10));
            setCategory("Food")
        } 
    };

    return (
        <form className="form" onSubmit={submit}>
            <input className="input"
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            placeholder="Title (e.g Coffee)"
            />
            <input
            className="input"
            value={amount}
            onChange={(e)=> setAmount(e.target.value)}
            placeholder = "Amount"
            type="number"
            min="0"
            step="0.01"
            />
            <input
            className="input"
            value={date}
            onChange={(e)=> setDate(e.target.value)}
            type="date"
           />

           <select className="input" value ={category} onChange={(e)=> setCtegory(e.target.value)}   >
            {categories.map((c)=>(
                <option key = {c} value ={c}>
                    {c}

                </option>
            ))}
            </select>   
            <button className="btn" type="submit">
                {initial ? "Save" : "Add Expense"}
                </button> 
        </form>


    );

}