import { useContext, createContext } from "react";

export const TodoContext = createContext({
todos:[
    {
        id:1,
        todo:"new todo",
        completed : false,
    }
    ],
    addTodo : (todo)=>{},
    deleteTodo : (id)=>{},
    updateTodo : (id,todo)=>{},
    toggleCompleted : (id)=>{}
})

export const useTodo =()=>{
    return useContext(TodoContext)
}
export const ContextProvider = TodoContext.Provider