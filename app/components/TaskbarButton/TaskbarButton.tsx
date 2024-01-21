'use client'

import Image from 'next/image'
import powerIcon from '@assets/svg/power.svg'
import styles from './taskbarButton.module.css'

type TTaskbarButtonProps = {
    value?: string
    icon?: any
    iconWidth?: string
    iconHeight?: string
    isActive?: boolean
    onClick?: () => void
    style?: any
}

const TaskbarButton = ({
    icon = powerIcon,
    iconHeight = 'auto',
    iconWidth = 'auto',
    isActive,
    onClick,
    style,
    value,
}: TTaskbarButtonProps) => {
    return (
        <button
            className={`${styles.taskbarButton} ${isActive && styles.active}`}
            style={{ ...style }}
            onClick={onClick}
        >
            <div className={styles.iconCont}>
                <Image
                    src={icon}
                    alt="Windows logo"
                    className={styles.icon}
                    style={{ width: iconWidth, height: iconHeight }}
                />
            </div>
            {value && <span className={styles.buttonText}>{value}</span>}
        </button>
    )
}

export default TaskbarButton
