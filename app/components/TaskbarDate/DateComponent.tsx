'use client'

import { useEffect, useState } from 'react'

const DateComponent = () => {
    const formatDate = (date: Date) =>
        date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        })

    const [currentDate, setCurrentDate] = useState<string | null>(null)

    useEffect(() => {
        setCurrentDate(formatDate(new Date()))
        const interval = setInterval(() => {
            setCurrentDate(formatDate(new Date()))
        }, 60 * 1000)

        return () => clearInterval(interval)
    }, [])

    return <span>{currentDate ?? 'Cargando...'}</span>
}

export default DateComponent
