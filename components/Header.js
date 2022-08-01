import React from 'react'
import Botton from './Botton'
import Tasks from './Tasks'
import { useState } from 'react'
import AddTask from './AddTask'
import Footer from './Footer'
import About from './About'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'

const Header = ({ showAdd, onAdd }) => {
        const [showAddTask, setShowAddTask] = useState(false)
        const [tasks, setTasks] = useState([{
                    id: 1,
                    text: 'Doctors Appointment',
                    day: 'Feb 5th at 2:30pm',
                    reminder: true,
                },
                {
                    id: 2,
                    text: 'Meeting at School',
                    day: 'Feb 6th at 1:30pm',
                    reminder: true,
                },
                {
                    id: 3,
                    text: 'Food Shopping',
                    day: 'Feb 5th at 2:30pm',
                    reminder: false,
                },
                // {
                //   id: 4,
                //   text: 'Food Shopping',
                //   day: 'Feb 5th at 2:30pm',
                //   reminder: false,
                // },
            ])
            // Delete Task
        const deleteTask = (id) => {
                setTasks(tasks.filter((task) => task.id !== id))
            }
            // Toggle Reminder
        const toggleReminder = (id) => {
                setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task))
                console.log('hello from toggle')
            }
            // Add Task
        const addTask = (task) => {
            const id = Math.floor(Math.random() * 10000) + 1
            const newTask = { id, ...task }
            setTasks([...tasks, newTask])
        }


        return ( <
                Router >
                <
                div className = 'major-header-container' >
                <
                div className = 'header' >
                <
                div className = 'mini-header' >
                <
                h1 > Task Tracker < /h1> <
                Botton color = { showAddTask ? 'red' : 'green' }
                text = { showAddTask ? 'Close' : 'Add' }
                onAdd = {
                    () => setShowAddTask(!showAddTask) }
                showAdd = { showAddTask }
                /> <
                /div> {
                    showAddTask && < AddTask onAdd = { addTask }
                    />} {
                        tasks.length > 0 ? < Tasks tasks = { tasks }
                        onDelete = { deleteTask }
                        onToggle = { toggleReminder }
                        /> : <
                        h1 style = {
                                { color: 'red', justifyContent: 'center', wordBreak: 'break-word', paddingTop: '50px', display: 'flex' } } > NO TASKS TO SHOW < /h1>} <
                            Routes >
                            <
                            Route path = '/'
                        exact render = {
                            (tasks) => ( <
                                > < />
                            )
                        }
                        /> <
                        Route path = '/about'
                        element = { < About / > }
                        /> <
                        /Routes> <
                        Footer / >
                            <
                            /div>

                        <
                        /div> <
                        /Router>
                    )
                }

                export default Header