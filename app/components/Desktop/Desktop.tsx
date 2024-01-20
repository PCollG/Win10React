import React from 'react'
import { Taskbar } from '@components/Taskbar/Taskbar'
import styles from './desktop.module.css'

interface DesktopProps {}

export const Desktop = ({}: DesktopProps) => {
    return (
        <div className={styles.desktop}>
            <Taskbar />
        </div>
    )
}
