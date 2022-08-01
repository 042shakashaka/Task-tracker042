import React from 'react'
import Tasko from './Tasko'

const Tasks = ({ onDelete, tasks, onToggle }) => {
        return ( <
                div className = 'task-container' > {
                    tasks.map((task) => < Tasko key = { task.id }
                        task = { task }
                        onDelete = { onDelete }
                        onToggle = { onToggle }
                        />)} <
                        /div>
                    )
                }

                export default Tasks