import React, { useEffect, useState } from 'react'
import axios from '../api/VadApi';
export default function VadFormAddOrEdit({onVadClose, onVadSubmitForm, renderUsers}) {

    const [vadId, setVadId] = useState(0);
    const [vadUserName,setVadUserName] = useState("");
    const [vadPassword,setVadPassword] = useState("");
    const [vadEmail,setVadEmail] = useState("");
    const [vadPhone,setVadPhone] = useState("");

    useEffect (()=>{
        setVadId(renderUsers.id)
        setVadUserName(renderUsers.UserName)
        setVadPassword(renderUsers.Password)
        setVadEmail(renderUsers.Email)
        setVadPhone(renderUsers.Phone)
    },[renderUsers])

    const vadHandleClose = ()=>{
        onVadClose(false);
    }

    const vadHandleSummit = async (event)=>{
        event.preventDefault();
        console.log(vadId,vadUserName,vadPassword,vadEmail,vadPhone);
        // post => api
        let vadObjUser = {
            UserName: vadUserName,
            Password: vadPassword,
            Email: vadEmail,
            Phone: vadPhone,
            id: vadId
        }
       const vadRes = await axios.post("vadUsers",vadObjUser);

       onVadSubmitForm(false)
    }
  return (
    <div>
        <form>
            <div class="input-group mb-3">
                <span class="input-group-text" id="id">Id</span>
                <input type="text" class="form-control" 
                    name='id' value={vadId} onChange={(ev)=>setVadId(ev.target.value)}
                    placeholder="id" aria-label="id" aria-describedby="id"/>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="UserName">UserName</span>
                <input type="text" class="form-control" 
                    name='UserName' value={vadUserName} onChange={(ev)=>setVadUserName(ev.target.value)}
                    placeholder="UserName" aria-label="UserName" aria-describedby="UserName"/>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="Password">Password</span>
                <input type="password" class="form-control" 
                    name='Password' value={vadPassword} onChange={(ev)=>setVadPassword(ev.target.value)}
                    placeholder="Password" aria-label="Password" aria-describedby="Password"/>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="Email">Email</span>
                <input type="email" class="form-control" 
                    name='Email' value={vadEmail} onChange={(ev)=>setVadEmail(ev.target.value)}
                    placeholder="Email" aria-label="Email" aria-describedby="Email"/>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text" id="Phone">Phone</span>
                <input type="number" class="form-control" 
                    name='Phone' value={vadPhone} onChange={(ev)=>setVadPhone(ev.target.value)}
                    placeholder="Phone" aria-label="Phone" aria-describedby="Phone"/>
            </div>
            <button className='btn btn-primary' name='btnVadSave' onClick={(ev)=>vadHandleSummit(ev)}>Ghi lại</button>
            <button className='btn btn-danger' onClick={vadHandleClose}>Đóng</button>
        </form>
    </div>
  )
}
