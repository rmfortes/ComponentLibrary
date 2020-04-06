import React from 'react';
import "./Button.css"

// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {
    let classList = ""

    let types = ['primary', 'danger', 'success', 'warning', 'default', 'primary-outline', 'danger-outline', 'success-outline', 'warning-outline', 'default-outline', 'primary-inline', 'danger-inline', 'success-inline', 'warning-inline', 'default-inline']

    if (types.includes(props.type)) {
        classList += ` button-${props.type}`
    }

    if (props.large) {
        classList += ` button-large`
    }


    return <button className={classList}>
        {props.label}
    </button>
}

export default Button; 
