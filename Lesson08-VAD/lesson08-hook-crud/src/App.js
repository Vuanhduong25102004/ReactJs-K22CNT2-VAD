
import './App.css';
import { React, useState, useEffect } from 'react'
import VadListStudent from './components/VadListStudent';
import VadAddOrEdit from './components/VadAddOrEdit';

function App() {
  const vad_listStudent = [
    { vad_Id: 2210900017, vad_Name: "Vũ Anh Dương", vad_age: "20", vad_phone:"0972471680", vad_status:true },
    { vad_Id: 1, vad_Name: "nguyen van a", vad_age: "20", vad_phone:"0972471680", vad_status:false },
    { vad_Id: 2, vad_Name: "tran van b", vad_age: "22", vad_phone:"0972471680", vad_status:false },
    { vad_Id: 3, vad_Name: "lo thi c", vad_age: "12", vad_phone:"0972471680", vad_status:true },
  ];

  // sử dụng hàm useState để lưu trữ trạng thái dữ liệu 
  const [vadListStudent, setVadListStudent] = useState(vad_listStudent);

  // tao state du lieu cho form (add, edit)
  // doi tuong task
  const vadTaskObj = {
    vad_Id: 0,
    vad_Name: "",
    vad_age: "",
    vad_phone:"",
    vad_status:"",
  }

  // tao state
  const [vadTask, setVadTask] = useState(vadTaskObj);// du lieu tren form
  // state de phan biet trang thai la them moi hay sua
  const [vadIsAddOrEdit, setVadIsAddOrEdit] = useState(true)

  // nhan du lieu khi sua 
  const vadHandleEdit = (param) => {
    console.log("app - edit:", param)
    // cap nhat lai vadTask
    setVadTask(param);
    // cap nhat trang thai form la sua
    setVadIsAddOrEdit(false)
  };

  const vadHandleSubmit = (vadParam) => {
    if (vadIsAddOrEdit === true) {  //truong hop them moi du lieu
      setVadListStudent(prev => {
        return [...prev, vadParam];
      });
    } else {// truong hop sua du lieu
      for (let i = 0; i < vadListStudent.length; i++) {
        if (vadListStudent[i].vad_Id == vadParam.vad_Id) {
          vadListStudent[i] = vadParam;
          break;
        }

      }
      //cap nhat lai state {vadListStudent}
      setVadListStudent(prev => {
        return [...prev];
      });
    }
  };
  // ham xoa 
  const vadHandleDelete = (param) =>{
    let vadResult = vadListStudent.filter(x=>x.vad_Id != param.vad_Id);
    setVadListStudent(vadResult);
  }

  const VadhandleAdd = ()=>{
    setVadTask(vadTaskObj);
    setVadIsAddOrEdit(true);
  }
  
    // Lấy dữ liệu trong localStorage
  let data = JSON.parse(localStorage.getItem("VadK22CNT2DataStudent"));
  console.log("data:",data);
  if(data === null || data.length ===0){
    data = vad_listStudent;
    localStorage.setItem("VadK22CNT2DataStudent", JSON.stringify(data));
  }
  // sử dụng hàm useState để lưu trữ trạng thái dữ liệu
  const [vadListStudents, setvadListStudents] = useState(data);
 
  // Khi vadListStudents thay đổi thì cập nhật lại localStorage
  useEffect(()=>{
    localStorage.setItem("VadK22CNT2DataStudent", JSON.stringify(vadListStudents));
  },[vadListStudents]);



  return (
    <div className='container border'>
      <h1>Vũ Anh Dương - K22CNT2</h1>
      <hr />
      <div>
        {/*Danh sach list task*/}
        <VadListStudent renderVadStudent={vadListStudent} 
        onVadTaskEdit={vadHandleEdit}
        onVadTaskDelete={vadHandleDelete}
        />
        
      </div>
      <button onClick={VadhandleAdd}> Thêm mới </button>
      <div>
        <VadAddOrEdit
          renderVadStudent={vadTask}
          renderVadIsAddOrEdit={vadIsAddOrEdit}
          vadOnSubmit={vadHandleSubmit}
        />
      </div>
    </div>
  );
}

export default App;
