import styles from './taskbarShowDesktopButton.module.css'

type TTaskbarShowDesktopButtonProps = {}

const TaskbarShowDesktopButton = ({}: TTaskbarShowDesktopButtonProps) => {
    return (
        <button
            className={styles.taskbarShowDesktopButton}
            aria-label="Volver al escritorio"
        />
    )
}

export default TaskbarShowDesktopButton
