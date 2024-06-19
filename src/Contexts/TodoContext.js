import { useContext,createContext } from "react";

export const TodoContext =createContext({
    todos:[
        {id:1,
        Todo:"message",
        completed:false}
    ],
    addTodo:(Todo)=>{},
    DelTodo:(id)=>{},
    UpTodo:(Todo,id)=>{},
    ToggleComp:(id)=>{}
})

export const useTodo=()=>{
    return useContext(TodoContext)
}

export const TodoProvider =TodoContext.Provider
