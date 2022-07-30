import './App.css';
import {Header} from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";

function App() {

    let todos = [{
        sno: 1, title: "Learn React", desc: "Learn React and its ecosystem",
    },

        {
            sno: 2, title: "Learn Angular", desc: "Learn Angular and its ecosystem",
        },
        {
            sno: 3, title: "Learn Node", desc: "Learn Node and its ecosystem"
        }];
    return (<>
        <Header title="To-Do List" searchBar={true}/>
        <Todos todos={todos}/>
        <Footer/>
    </>);
}

export default App;
