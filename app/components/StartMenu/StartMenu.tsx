import TaskbarButton from '@components/TaskbarButton/TaskbarButton'
import edgeIcon from '@assets/svg/edge_logo.svg'
import powerIcon from '@assets/svg/power.svg'
import styles from './startMenu.module.css'

type TStartMenuProps = {}

const StartMenu = ({}: TStartMenuProps) => {
    return (
        <div className={styles.startMenu}>
            <div className={styles.systemButtons}>
                <div>
                    <TaskbarButton icon={powerIcon} />
                </div>
                <div>
                    <TaskbarButton icon={powerIcon} />
                    <TaskbarButton icon={powerIcon} />
                    <TaskbarButton icon={powerIcon} />
                    <TaskbarButton icon={powerIcon} />
                </div>
            </div>
            <div className={styles.programsButtons}>
                {[...Array(300)].map((_, i) => (
                    <TaskbarButton
                        icon={edgeIcon}
                        value="Microsoft Edge"
                        iconWidth="25px"
                        style={{ width: '100%', justifyContent: 'flex-start' }}
                        key={`${_}-${i}`}
                    />
                ))}
            </div>
            <div className={styles.windowsTiles}>
                <div className={styles.windowsTilesCont}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default StartMenu
