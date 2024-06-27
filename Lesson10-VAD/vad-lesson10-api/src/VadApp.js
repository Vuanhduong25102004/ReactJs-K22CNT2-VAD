import { useEffect, useState } from 'react';
import './App.css';
import axios from './api/VadApi'
import VadListUsers from './components/VadListUsers';

function VadApp() {
  const [vadListUsers,setVadListUsers] = useState([])
// doc du lieu tu api
  const vadGetAllUsers = async ()=>{
    const vadResponse = await axios.get("vadUsers");
    console.log("api data:" ,vadResponse.data)
    setVadListUsers(vadResponse.data)
  }

  useEffect(()=>{
    vadGetAllUsers();
  },[])
  return (
    <div className="container border my-3">
       <h1>Làm việc với MockApi</h1>
       <hr/>
       <VadListUsers renderVadListUser={vadListUsers}/>
    </div>
  );
}

export default VadApp;
