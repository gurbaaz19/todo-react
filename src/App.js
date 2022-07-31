import './App.css';
import {Header} from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import React, {useEffect, useState} from "react";
import {AddTodo} from "./MyComponents/AddTodo";
import {HashRouter, Route, Routes} from "react-router-dom";
import {About} from "./MyComponents/About";

function App() {
    let initTodo;
    if (localStorage.getItem("todos") === null) {
        initTodo = [];
    } else {
        initTodo = JSON.parse(localStorage.getItem("todos"));
    }

    const onDelete = (todo) => {

        setTodos(todos.filter((item) => {
            return item !== todo;
        }));
    }

    const onAdd = (title, desc) => {

        let sno = 0;
        if (todos.length > 0) {
            sno = todos[todos.length - 1].sno + 1;
        }
        const newTodo = {
            sno: sno,
            title: title,
            desc: desc,
        }
        setTodos([...todos, newTodo]);

        localStorage.setItem("todos", JSON.stringify(todos));

    }

    const [todos, setTodos] = useState(initTodo);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (<>
        <HashRouter>
            <Header title="To-Do List" searchBar={false}/>
            <Routes>
                <Route exact path="/" element={<><AddTodo onAdd={onAdd}/>
                    <Todos todos={todos} onDelete={onDelete}/>
                </>}/>
                <Route exact path={"/about"} element={<About/>}/>
            </Routes>
            <Footer/>
        </HashRouter>
    </>);
}

export default App;
