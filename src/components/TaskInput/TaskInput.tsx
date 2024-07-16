import { useState } from 'react'
import styles from './taskInput.module.scss'
import { Todo } from '../../@types/todo.type'

interface taskInputProps {
  addTodo: (name:string) => void
}

export default function TaskInput(props: taskInputProps) {
  const {addTodo} = props
  const [name, setName] = useState<string>("")

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addTodo(name)
    setName("")
  }

  const onChangeInput = (event:React.ChangeEvent<HTMLInputElement>) => {
    const {value} = event.target
    setName(value)
  }

  return (
    <div>
        <h1 className={styles.title}>To do list TypeScript</h1>
        <form action="" className={styles.form} onSubmit={handleSubmit}>
            <input type="text" placeholder='caption goes here' value={name} onChange={ onChangeInput }/>
            <button type='submit'>+</button>
        </form>
    </div>
  )
}
