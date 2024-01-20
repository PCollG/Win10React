import DateComponent from './DateComponent'
import Hour from './Hour'
import styles from './taskbarDate.module.css'

type TTaskbarDateProps = {}

const TaskbarDate = ({}: TTaskbarDateProps) => {
    return (
        <div className={styles.taskbarDate}>
            <Hour />
            <DateComponent />
        </div>
    )
}

export default TaskbarDate
