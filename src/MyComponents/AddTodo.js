import React, {useState} from "react";

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Please enter the Title and Description");
            return;
        }
        props.onAdd(title, desc);
    }
    return (<div className="container my-3">
        <h3>Add To-Do</h3>
        <form onSubmit={submit}>
            <div className="form-group mb-3">
                <label>Title</label>
                <input type="text" className="form-control" value={title} onChange={(e) => {
                    setTitle(e.target.value)
                }} id="title" name="title" placeholder="Enter Title"/>
            </div>
            <div className="form-group mb-3">
                <label>Description</label>
                <textarea className="form-control" value={desc} onChange={(e) => {
                    setDesc(e.target.value)
                }} id="desc" name="desc" placeholder="Enter Description"/>
            </div>
            <button className="btn btn-sm btn-success">Add</button>
        </form>
    </div>)
}