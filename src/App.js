import './App.css';
import {Header} from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import {useState} from "react";

function App() {

    const onDelete = (todo) => {
        console.log("Delete", todo);

        setTodos(todos.filter((item) => {
            return item !== todo;
        }))
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
        <Header title="To-Do List" searchBar={true}/>
        <Todos todos={todos} onDelete={onDelete}/>
        <Footer/>
    </>);
}

export default App;
