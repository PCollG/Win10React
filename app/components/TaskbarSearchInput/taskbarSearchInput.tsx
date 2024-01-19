import Image from 'next/image'
import search from '@assets/svg/search.svg'
import styles from './taskbarSearchInput.module.css'

type TTaskbarSearchInputProps = {}

const TaskbarSearchInput = ({}: TTaskbarSearchInputProps) => {
    return (
        <div className={styles.taskbarSearchInput}>
            <div className={styles.iconContainer}>
                <Image
                    src={search}
                    alt="Windows logo"
                    className={styles.icon}
                />
            </div>
            <input type="text" className={styles.input} placeholder="Buscar" />
        </div>
    )
}

export default TaskbarSearchInput
