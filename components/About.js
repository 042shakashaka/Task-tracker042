import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return ( <
        div className = 'about' >
        <
        h4 > Version 1.0 .0 < /h4> <
        Link style = {
            { textDecoration: 'none', paddingTop: '10px', color: 'blue' } }
        to = '/' > Go Back < /Link> <
        /div>
    )
}

export default About