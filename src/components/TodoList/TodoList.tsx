import { useState } from 'react';
import TaskInput from "../TaskInput"
import TaskList from "../TaskList"
import styles from "./todoList.module.scss"
import { Todo } from '../../@types/todo.type';
export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (name: string) => {
    const todo: Todo = {
      id: new Date().toISOString(),
      name,
      done: false,
    }
    setTodos((prev)=> [...prev, todo])
  }

  // console.log(todos)

  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput addTodo={addTodo}/>
        <TaskList doneTaskList={false}/>
        <TaskList doneTaskList/>
      </div>
    </div>
  )
}
