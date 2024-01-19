import React from 'react'
import styles from './taskbar.module.css'

interface TaskbarProps {}

export const Taskbar = ({}: TaskbarProps) => {
    return (
        <div className={styles.taskbar}>
            <div className={styles.flex}>
                <div>Start button</div>
                <div>Search bar</div>
                <div>Icons</div>
            </div>
            <div className={styles.flex}>
                <div>Weather</div>
                <div>TrayIcons</div>
                <div>Hour</div>
                <div>Notifications</div>
                <div>DesktopButton</div>
            </div>
        </div>
    )
}
