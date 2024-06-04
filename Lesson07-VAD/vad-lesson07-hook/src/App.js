
import './App.css';
import { React, useState } from 'react'
import VadListTask from './components/VadListTask';
import VadTaskAddOrEdit from './components/VadTaskAddOrEdit';

function App() {
  const vad_listTasks = [
    { vad_taskId: 2210900017, vad_taskName: "Vũ Anh Dương", vad_level: "Small" },
    { vad_taskId: 1, vad_taskName: "Học lập trình frontend", vad_level: "Small" },
    { vad_taskId: 2, vad_taskName: "Học lập trình reactjs", vad_level: "Medium" },
    { vad_taskId: 3, vad_taskName: "lập trình với frontend - reactjs", vad_level: "High" },
    { vad_taskId: 4, vad_taskName: "lập trình fullstack(php,java,netcore)", vad_level: "Small" },
  ];
  // sử dụng hàm useState để lưu trữ trạng thái dữ liệu 
  const [vadListTasks, setVadListTasks] = useState(vad_listTasks);

  // tao state du lieu cho form (add, edit)
  // doi tuong task
  const vadTaskObj = {
    vad_taskId: 0,
    vad_taskName: "NTU",
    vad_level: "Small"
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
      setVadListTasks(prev => {
        return [...prev, vadParam];
      });
    } else {// truong hop sua du lieu
      for (let i = 0; i < vadListTasks.length; i++) {
        if (vadListTasks[i].vad_taskId == vadParam.vad_taskId) {
          vadListTasks[i] = vadParam;
          break;
        }

      }
      //cap nhat lai state {vadListTasks}
      setVadListTasks(prev => {
        return [...prev];
      });
    }

  };
  // ham xoa 
  const vadHandleDelete = (param) => {
    let vadResult = vadListTasks.filter(x=>x.vad_taskId != param.vad_taskId);
    setVadListTasks(vadResult);
  }
  return (
    <div className='container border'>
      <h1>Vũ Anh Dương - K22CNT2</h1>
      <hr />
      <div>
        {/*Danh sach list task*/}
        <VadListTask renderVadListTasks={vadListTasks}
          onVadTaskEdit={vadHandleEdit}
          onVadTaskDelete = {vadHandleDelete}
        />
      </div>
      <div>
        <VadTaskAddOrEdit
          renderVadTask={vadTask}
          renderVadIsAddOrEdit={vadIsAddOrEdit}
          vadOnSubmit={vadHandleSubmit} />
      </div>
    </div>
  )
}

export default App;
