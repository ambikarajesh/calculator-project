import React from 'react';
import style from './Board.module.css';
function board(props){
    return(
        <div className={style.Board}>
            <div className={style.MathExp}>{props.Mathexp}</div>
            <div className={style.Result}>{props.Result}</div>
        </div>
    );
}
export default board;