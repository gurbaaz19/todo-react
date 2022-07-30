import React from "react";
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
    let containerStyle = {
        minHeight: "80vh",
        margin:"60px auto",
    }

    return (<div className="container" style={containerStyle}>
            <h3 className="text-center">To-Do List</h3>
        {props.todos.length===0? "No To-Do Items" :
            props.todos.map((todo) => {
                return < TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            })}
        </div>)
}