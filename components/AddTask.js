import React, { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert('Please add a task')
        }
        onAdd({ text, day, reminder })
        setText('')
        setDay('')
        setReminder(false)
    }
    return ( <
        form className = 'add-form'
        onSubmit = { onSubmit } >
        <
        div className = 'form-control' >
        <
        label > Task < /label> <
        input className = 'form-spacing'
        type = 'text'
        placeholder = 'Add Task'
        value = { text }
        onChange = {
            (e) => setText(e.target.value) }
        /> <
        /div> <
        div className = 'form-control' >
        <
        label > Day and Time < /label> <
        input className = 'form-spacing'
        type = 'text'
        placeholder = 'Add Day and Time'
        value = { day }
        onChange = {
            (e) => setDay(e.target.value) }
        /> <
        /div> <
        div className = 'form-control' >
        <
        label > Set Reminder < /label> <
        input className = 'form-spacing'
        type = 'checkbox'
        checked = { reminder }
        value = { reminder }
        onChange = {
            (e) => setReminder(e.currentTarget.checked) }
        /> <
        /div> <
        div className = 'form-control' >
        <
        input type = 'submit'
        value = 'Save Task' / >
        <
        /div> <
        /form>
    )
}

export default AddTask