import React from 'react'
import TaskbarButton from '@components/TaskbarButton/TaskbarButton'
import TaskbarSearchInput from '@components/TaskbarSearchInput/taskbarSearchInput'
import TaskbarShowDesktopButton from '@components/TaskbarShowDesktopButton/TaskbarShowDesktopButton'
import commentIcon from '@assets/images/comment.png'
import commonStyles from '../common.module.css'
import edgeIcon from '@assets/svg/edge_logo.svg'
import explorerIcon from '@assets/images/explorer.png'
import styles from './taskbar.module.css'
import windowsLogo from '@assets/svg/windows.svg'

interface TaskbarProps {}

export const Taskbar = ({}: TaskbarProps) => {
    return (
        <div className={styles.taskbar}>
            <div className={commonStyles.flex}>
                <TaskbarButton icon={windowsLogo} iconWidth="18px" />
                <TaskbarSearchInput />
                <div className={styles.iconsContainer}>
                    <TaskbarButton
                        icon={edgeIcon}
                        iconWidth={'25px'}
                        isActive
                    />
                    <TaskbarButton icon={explorerIcon} iconWidth={'24px'} />
                </div>
            </div>
            <div className={commonStyles.flex}>
                <div>Weather</div>
                <div>TrayIcons</div>
                <div>Hour</div>
                <TaskbarButton icon={commentIcon} iconWidth={'24px'} />
                <TaskbarShowDesktopButton />
            </div>
        </div>
    )
}
