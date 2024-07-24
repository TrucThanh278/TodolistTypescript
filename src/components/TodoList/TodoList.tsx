import { useEffect, useState } from 'react';
import TaskInput from "../TaskInput"
import TaskList from "../TaskList"
import styles from "./todoList.module.scss"
import { Todo } from '../../@types/todo.type';
export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null)
  const doneTodos = todos.filter(todos => todos.done)
  const notDoneTodos = todos.filter(todo => !todo.done)

  useEffect(() => {
    const todoString = localStorage.getItem('todos')
    const todoObj = JSON.parse(todoString || '[]')
    setTodos(todoObj)
  }, [])

  const addTodo = (name: string) => {
    const todo: Todo = {
      id: new Date().toISOString(),
      name,
      done: false,
    }
    setTodos((prev)=> [...prev, todo])

    const todoString = localStorage.getItem('todos')
    const todoObj = JSON.parse(todoString || '[]')
    const newTodoObj = [...todoObj, todo]
    localStorage.setItem('todos', JSON.stringify(newTodoObj))
  }

  //This status is the status of the checkbox
  const handleDoneTodo = (id: string, status: boolean) =>{
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return {...todo, done: status } //Use checkbox status for done attribute of task
        }
        return todo
      })
    })
  }

  const startEditTodo = (id: string) => {
    const editTodo = todos.find(todo => todo.id === id)
    if(editTodo){
      setCurrentTodo(editTodo)
    }
  }

  const editTodo = (name: string) => {
    setCurrentTodo((prev) => {
      if (prev) {
        return {...prev, name }
      }
      return null
    })
  }

  const finishEditTodo = () =>{
    const handler = (todoObj : Todo[]) => {
      return todoObj.map(todo => {
        if (todo.id === (currentTodo as Todo).id) {
          return currentTodo as Todo
        }
        return todo
      })
    }


    setTodos(handler)
    setCurrentTodo(null)

    const todoString = localStorage.getItem('todos')
    const todoObj: Todo[] = JSON.parse(todoString || '[]')
    const newTodoObj = handler(todoObj)
    localStorage.setItem('todos', JSON.stringify(newTodoObj))
  }

  const deleteTodo = (id: string) => {
    if(currentTodo) {
      setCurrentTodo(null)
    }
    setTodos(prev => {
      const indexDeleteTodo = prev.findIndex(todo => todo.id === id)
      if(indexDeleteTodo > -1) {
        const result = [...prev]
        result.splice(indexDeleteTodo, 1)
        return result
      }
      return prev
    })
  }

  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput addTodo={addTodo} currentTodo={currentTodo} editTodo={editTodo} finishEditTodo={finishEditTodo} />
        <TaskList todos={notDoneTodos} handleDoneTodo={handleDoneTodo} startEditTodo={startEditTodo} deleteTodo={deleteTodo}/>
        <TaskList doneTaskList todos={doneTodos} handleDoneTodo={handleDoneTodo} startEditTodo={startEditTodo} deleteTodo={deleteTodo}/>
      </div>
    </div>
  )
}
