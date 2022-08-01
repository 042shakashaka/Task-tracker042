import React from 'react'
import PropTypes from 'prop-types';

const Botton = ({ color, text, onAdd, showAdd }) => {
    return ( <
        button style = {
            { backgroundColor: color } }
        onClick = { onAdd }
        className = 'btn' > { text } < /button>
    )
}
Botton.propTypes = {
    text: PropTypes.string
}

export default Botton