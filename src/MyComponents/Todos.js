import React from "react";
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
    let containerStyle = {
        minHeight: "80vh",
        margin: "60px auto",
    }

    let titleStyle = {
        display:"none",
    }

    if(props.todos.length > 0){
        titleStyle.display = "block";
    }
    return (<div className="container" style={containerStyle}>
        <h2 className="text-center py-3" style={titleStyle}>To-Do List</h2>
        {props.todos.length === 0 ?
            <h2 className="text-center py-5">No To-Do Items</h2>
            :
            props.todos.map((todo) => {
            return < TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
        })}
    </div>)
}