import Image from 'next/image'
import search from '@assets/svg/search.svg'
import styles from './taskbarShowDesktopButton.module.css'

type TTaskbarShowDesktopButtonProps = {}

const TaskbarShowDesktopButton = ({}: TTaskbarShowDesktopButtonProps) => {
    return <button className={styles.taskbarShowDesktopButton} />
}

export default TaskbarShowDesktopButton
