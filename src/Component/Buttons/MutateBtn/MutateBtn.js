import React from 'react';
import style from './MutateBtn.module.css';
function mutateBtn(props){
    return(
        <div className = {style.MutateBtn}>
            <button className={style.Btn} onClick={props.clickClear}>CLR</button>
            <button className={style.Btn} onClick = {props.clickDelete}>BkSpace</button>
        </div>
    );
}
export default mutateBtn;