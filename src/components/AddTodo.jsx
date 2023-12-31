import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../features/todo/todoSlice";
const AddTodo = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    
    const addTodoHandler = (event) => {
        event.preventDefault();
        dispatch(addTodo(input));
        //this addTodo is a reducer and we pass input which is a payload and according to that payload value the state will be changes in the store 
        //Or Jab mujhe acccess krna ha input ko selctor se To action.payload mn hi vo value ha wahn se la sakta hu  
        setInput("");
    };
    
    return (
        <div>
            <form onSubmit={addTodoHandler}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">TODO</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter task"
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddTodo;
