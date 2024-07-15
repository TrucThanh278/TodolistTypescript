import styles from './taskInput.module.scss'
export default function TaskInput() {
  return (
    <div>
        <h1 className={styles.title}>To do list TypeScript</h1>
        <form action="" className={styles.form}>
            <input type="text" placeholder='caption goes here'/>
            <button type='submit'>+</button>
        </form>
    </div>
  )
}
