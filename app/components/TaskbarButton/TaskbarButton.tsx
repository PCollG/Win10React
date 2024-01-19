import Image from 'next/image'
import styles from './taskbarButton.module.css'

type TTaskbarButtonProps = {
    icon: any
    iconWidth?: string
    iconHeight?: string
    isActive?: boolean
}

const TaskbarButton = ({
    icon,
    iconHeight = 'auto',
    iconWidth = 'auto',
    isActive,
}: TTaskbarButtonProps) => {
    return (
        <button
            className={`${styles.taskbarButton} ${isActive && styles.active}`}
        >
            <Image
                src={icon}
                alt="Windows logo"
                className={styles.icon}
                style={{ width: iconWidth, height: iconHeight }}
            />
        </button>
    )
}

export default TaskbarButton
