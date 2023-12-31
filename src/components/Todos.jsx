import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { removeTodo } from '../features/todo/todoSlice'


const Todos = () => {
    const todos = useSelector(state => state.todos) //initial state 
    const dispatch = useDispatch()

    return (
        <>
            {/* //we cannot do like this  */}
            {/* Kyu k ya immediately call ho jaye ga (parenthesis ki waj se ) but ham just reference dena chahty Ha to ham use aik callback k through bhej dete ha  */}
            {/* <button onClick={dispatch()}>X</button> */}
            <div>Todos</div>
            {todos.map((todo) => (
                <p key={todo.id}>
                    {todo.text}
                    <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                </p>
            ))}
        </>

    )
}

export default Todos
