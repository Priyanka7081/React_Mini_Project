import React from "react";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({items, onDelete, onUpdate}){
    if(!items || items.length == 0) return <p className="empty"> no expense</p>

    return(
        <ul className="list">
            {items.map((item) =>(
                <ExpenseItem key={item.id} item = {item} onDelete={onDelete} onUpdate= {onUpdate} />
           ) )}
        </ul>
    )
}