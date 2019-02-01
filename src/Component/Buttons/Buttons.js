import React from 'react';
import Button from './Button/Button';
const buttons = (props) =>props.Keys.map((Key,index)=>{
    return(
        <Button KeyValue = {Key} key ={index} clicked = {props.click}/>
    )
})


export default buttons;