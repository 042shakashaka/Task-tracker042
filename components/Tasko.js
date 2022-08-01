import { FaTimes } from 'react-icons/fa'
import React from 'react'

const Tasko = ({ task, onDelete, onToggle }) => {
    return ( <
        div className = { ` ${task.reminder ? 'reminder' : ''}` }
        onDoubleClick = {
            () => onToggle(task.id) } >
        <
        div className = 'tasko-container' >
        <
        div className = 'mini-tasko-container' >
        <
        FaTimes className = 'Fa-style'
        onClick = {
            () => onDelete(task.id) }
        /> <
        h3 > { task.text } < /h3> <
        /div> <
        div className = 'mini-tasko-container' >
        <
        p > { task.day } < /p> <
        /div > <
        /div> <
        /div>
    )
}

export default Tasko