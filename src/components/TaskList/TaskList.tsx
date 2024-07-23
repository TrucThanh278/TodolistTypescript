
import { Todo } from '../../@types/todo.type';
import styles from './taskList.module.scss'

interface TaskListProps{
  doneTaskList?: boolean;
  todos: Todo[];
  handleDoneTodo: (id: string, status: boolean) => void;
  startEditTodo: (id: string) => void
}

export default function TaskList(props: TaskListProps) {
  const {doneTaskList, todos, handleDoneTodo, startEditTodo} = props

  return (
    <div className='mb-2'>
        <h2 className={styles.tasksTitle}>
          {doneTaskList ? 'Hoàn thành' : 'Chưa hoàn thành'}
        </h2>
        <div className={styles.tasks}>

          {todos.map((todo) =>
            <div className={styles.taskItem} key={todo.id}>
              <input type="checkbox" className={`${styles.taskCheckbox} ${todo.done ? styles.taskNameDone : ''}` } checked={todo.done} onChange={(e) => handleDoneTodo(todo.id, e.target.checked)}/>
              <span className={styles.taskName}>{todo.name}</span>
              <div className={styles.taskActions}>
                  <button className={styles.taskBtn} onClick={() => startEditTodo(todo.id)}>🖋</button>
                  <button className={styles.taskBtn}>🗑</button>
              </div>
          </div>
          )}
        </div>
    </div>
  )
}
