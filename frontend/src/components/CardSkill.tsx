import '../assets/card-skill.css'
import React from 'react'
import ProgressBar from './ProgressBar'

interface ICardSkill {
    title: string
    progress: number
    objectData: string
}

const CardSkill: React.FC<ICardSkill> = ({ title, progress, objectData }) => {
    return (
        <div className="card-skill">
            <h4 className="title">{title}</h4>
            <div className="body">
                <ProgressBar progress={progress}/>
            </div>
            <object className="icon" data={objectData} type="image/svg+xml"></object>
        </div>
    )
}

export default CardSkill
