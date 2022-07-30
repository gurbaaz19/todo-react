import './App.css';
import {Header} from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import React, {useState} from "react";
import {AddTodo} from "./MyComponents/AddTodo";

function App() {

    const onDelete = (todo) => {
        console.log("Delete", todo);

        setTodos(todos.filter((item) => {
            return item !== todo;
        }))
    }

    const onAdd = (title,desc) => {
        // console.log("Add", title,desc);
        const newTodo = {
            sno: todos.length+1,
            title: title,
            desc: desc,
        }
        setTodos([...todos, newTodo]);
        console.log("Add", newTodo);
    }

    const [todos, setTodos] = useState([{
        sno: 1, title: "Learn React", desc: "Learn React and its ecosystem",
    },

        {
            sno: 2, title: "Learn Angular", desc: "Learn Angular and its ecosystem",
        }, {
            sno: 3, title: "Learn Node", desc: "Learn Node and its ecosystem"
        }]);

    return (<>
        <Header title="To-Do List" searchBar={false}/>
        <AddTodo onAdd={onAdd}/>
        <Todos todos={todos} onDelete={onDelete}/>
        <Footer/>
    </>);
}

export default App;
