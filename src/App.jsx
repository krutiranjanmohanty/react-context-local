import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ContextProvider } from './contexts'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos , setTodos] = useState([])


  let addTodo =(todo)=>{
   setTodos((prev)=>
    [...prev , {id:Date.now(), ...todo}]
   )
   console.log()
  }

  let updateTodo =(id,todo)=>{
    setTodos((prev)=>prev.map((prevtodo)=>(prevtodo.id === id ? todo : prevtodo)))
  }

  let deleteTodo = (id)=>{
 setTodos((prev)=>prev.filter((prevtodo)=>(prevtodo.id !== id)))
  }

  let toggleCompleted = (id)=>{
     setTodos((prev)=>prev.map((prevtodo)=>prevtodo.id === id ? {...prevtodo, completed : !prevtodo.completed} : prevtodo))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <ContextProvider value={{addTodo,updateTodo,todos,toggleCompleted,deleteTodo}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
            </ContextProvider>
  )
}

export default App
