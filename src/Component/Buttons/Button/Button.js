import React from 'react';
import style from './Button.module.css'
const Button = (props) => {
    return(
        <button className = {style.Button} onClick = {() => props.clicked(props.KeyValue)}>{props.KeyValue}</button>
    )
}
export default Button;