import React from "react";
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
    return (
        <div className="container">
            <h3>To-Do List</h3>
            <TodoItem todo={props.todos[0]}/>
        </div>
    )}