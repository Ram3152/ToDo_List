import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
const TodoCom=( {text})=>{
    const[line,setline]=useState(false);

    const cutIt=()=>{
         setline(true);
    }
    return (
        <>
        <div className="todo_style">
        <span  onClick={cutIt}><DeleteIcon className="styl"/></span>
          <li style={{textDecoration : line ? 'line-through' : 'none'}}>{text}</li>
          </div>
        </>
    );
}
export default TodoCom;