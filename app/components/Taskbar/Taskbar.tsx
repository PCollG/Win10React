'use client'

import React from 'react'
import StartMenu from '@components/StartMenu/StartMenu'
import TaskbarButton from '@components/TaskbarButton/TaskbarButton'
import TaskbarDate from '@components/TaskbarDate/TaskbarDate'
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
    const [isOpenStartMenu, setIsOpenStartMenu] = React.useState(false)

    return (
        <>
            {isOpenStartMenu && <StartMenu />}
            <div className={styles.taskbar}>
                <div className={commonStyles.flex}>
                    <TaskbarButton
                        icon={windowsLogo}
                        iconWidth="18px"
                        onClick={() => setIsOpenStartMenu(!isOpenStartMenu)}
                    />
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
                    {/* <div>Weather</div> */}
                    {/* <div>TrayIcons</div> */}
                    <TaskbarDate />
                    <TaskbarButton icon={commentIcon} iconWidth={'24px'} />
                    <TaskbarShowDesktopButton />
                </div>
            </div>
        </>
    )
}
