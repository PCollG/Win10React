'use client'

import { useEffect, useState } from 'react'

const Hour = () => {
    const formatTime = (date: any) =>
        date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        })

    const [hour, setHour] = useState<string | null>(null)

    useEffect(() => {
        setHour(formatTime(new Date()))
        const interval = setInterval(() => {
            setHour(formatTime(new Date()))
        }, 1000) // Actualizar cada segundo

        return () => clearInterval(interval)
    }, [])

    return <span>{hour ?? 'Cargando...'}</span>
}

export default Hour
