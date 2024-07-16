
import styles from './taskList.module.scss'

interface TaskListProps{
  doneTaskList: boolean; 
}

export default function TaskList(props: TaskListProps) {
  const {doneTaskList} = props

  return (
    <div className='mb-2'>
        <h2 className={styles.tasksTitle}>
          {doneTaskList ? 'Hoàn thành' : 'Chưa hoàn thành'}
        </h2>
        <div className={styles.tasks}>
            <div className={styles.taskItem}>
                <input type="checkbox" className={styles.taskCheckbox}/>
                <span className={styles.taskName}>Làm đồ án</span>
                <div className={styles.taskActions}>
                    <button className={styles.taskBtn}>🖋</button>
                    <button className={styles.taskBtn}>🗑</button>
                </div>
            </div>
        </div>
    </div>
  )
}
