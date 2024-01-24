'use client'

import React, { useState } from 'react'

import { Taskbar } from '@components/Taskbar/Taskbar'
import styles from './desktop.module.css'

interface DesktopProps {}

const SelectionBox = ({ box }: any) => {
    const style: React.CSSProperties = {
        left: Math.min(box.startX, box.endX),
        top: Math.min(box.startY, box.endY),
        width: Math.abs(box.startX - box.endX),
        height: Math.abs(box.startY - box.endY),
        position: 'absolute',
        border: '1px solid rgba(30, 123, 199, 1)',
        backgroundColor: 'rgba(30, 123, 199, 0.3)',
    }

    return <div style={style} />
}

export const Desktop = ({}: DesktopProps) => {
    const [selectionBox, setSelectionBox] = useState<any>(null)

    const handleMouseDown = (event: any) => {
        // Iniciar el arrastre aquí
        setSelectionBox({
            startX: event.clientX,
            startY: event.clientY,
            endX: event.clientX,
            endY: event.clientY,
        })
    }

    const handleMouseMove = (event: any) => {
        if (!selectionBox) return
        setSelectionBox({
            ...selectionBox,
            endX: event.clientX,
            endY: event.clientY,
        })
    }

    const handleMouseUp = () => {
        setSelectionBox(null)
    }

    return (
        <div
            className={styles.desktop}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            {selectionBox && <SelectionBox box={selectionBox} />}
            <Taskbar />
        </div>
    )
}
