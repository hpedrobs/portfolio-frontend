import React from 'react'
import '../assets/progress-bar.css'

interface ProgressBarProps {
    progress: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
    const safeProgress = Math.min(100, Math.max(0, progress))

    const filledSteps = Math.round((safeProgress / 100) * 10)

    return (
        <div className="progress-card">
            <div className="horizontal-progress-bar">
                {Array.from({ length: 10 }).map((_, index) => (
                    <div
                        key={index}
                        className={`horizontal-step ${index < filledSteps ? 'filled' : ''}`}
                    />
                ))}
            </div>
            <p className="progress-percentage">{safeProgress}%</p>
        </div>
    )
}

export default ProgressBar