import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import TodoCom from "./TodoCom";
const Todo=()=>{
    const [data,setdata]=useState("");
    const[ newdata,setnewdata]=useState([]);
    const update=(event)=>{
        return setdata(event.target.value);
    };
    const changes=()=>{
         setnewdata((prev)=>{
            return [...prev,data];

        })
        setdata("");
    };
   
    return(
        <>
         <div className="main">
            <div className="center">
                 <br />
                 <h1>ToDo LIST 📑 </h1>
                 <br />
                 <input type="text"  placeholder="add a item" value={data} onChange={update}/>
                <Button className="btn" onClick={changes}><AddIcon/></Button>
            

            <ol>
                {newdata.map((val,index)=>{
               return <TodoCom text={val}  key={index}/>
                })}
            </ol>
            </div>
         </div>
        </>
    );
}
export default Todo;