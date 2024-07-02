import { useEffect, useState } from 'react';
import './App.css';
import axios from './api/VadApi'
import VadListUsers from './components/VadListUsers';
import VadFormAddOrEdit from './components/VadFormAddOrEdit';

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

  const [vadAddOrEdit,setVadAddOrEdit] = useState(false);
  const vadInitUser = {
    UserName: "Vũ Anh Dương",
    Password: "25/10/2004",
    Email: "vuanhduong251020042@gmail.com",
    Phone: "0972471680",
    id: "2210900017"
  } 
  const [vadUser,setVadUser] = useState(vadInitUser);
  // ham xu ly nut them moi
  const vadHandleAddNew = () => {
    setVadAddOrEdit(true);
  }

  const vadHandleClose=(param)=>{
    setVadAddOrEdit(param);
  }

  const vadHandleSubmit=(param)=>{
    vadGetAllUsers();
    setVadAddOrEdit(param);
  }

  const vadHandleDelete=()=>{
    vadGetAllUsers();
  }
  let vadElementForm = vadAddOrEdit===true?
      <VadFormAddOrEdit renderUsers={vadUser} 
                        onVadClose={vadHandleClose}
                        onVadSubmitForm={vadHandleSubmit}/>:"";
  return (
    <div className="container border my-3">
       <h1>Làm việc với MockApi</h1>
       <hr/>
       <VadListUsers renderVadListUser={vadListUsers} onVadDelete={vadHandleDelete}/>
       <button className='btn btn-primary' name='btnVadThemMoi' onClick={vadHandleAddNew}>Thêm mới</button>
       <hr/>
       {vadElementForm}
    </div>
  );
}

export default VadApp;
