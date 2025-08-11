import React,{ useState } from "react";
import ExpenseForm from "./ExpenseForm";

export default function ExpenseItem({item,onDelete,onUpdate}) {
     const[editing,setEditing] = useState(false);

     return (
        <li className = "card">
            {editing ? (
                <div>
                    <ExpenseForm
                    initial = {item}
                    onSubmit = {(upd) => {
                        onUpdate(item.id,upd);
                        setEditing(false);

                    }}
                    />
                    <div className = "row">
                        <button className = "btn small" onClick={() => setEditing(false)}>
                            Cancel
                        </button>

                    </div>
                </div>
            ):(
                <div className = "row space-between">
                    <div>
                        <div className = "title">{item.title}</div>
                        <div className = "meta">
                            {item.amount} # {item.category} # <small>{item.date}</small>
                        </div>
                    </div>
                    <div className = "actions">
                        <button className = "btn small" onClick={() => setEditing(true)}>
                            Edit
                        </button>
                        <button className = "btn small danger"
                        onClick={() => {
                            if(window.confirm("Delete this expense?")) onDelete(item.id);
                        }}

                      >
                        Delete
                        </button>  
                               
                    </div>
                </div>
            )}
        </li>
    );
}
