import React, { useState } from 'react'
import VadListTask from './components/VadListTask';
import VadTaskAddOrEdit from './components/VadTaskAddOrEdit';

export default function App() {
  //mock data
  const vad_listTasks = [
    {vad_taskId:2210900017, vad_taskName:"Vũ Anh Dương", vad_level:"Small"},
    {vad_taskId:1, vad_taskName:"Học lập trình frontend", vad_level:"Small"},
    {vad_taskId:2, vad_taskName:"Học lập trình reactjs", vad_level:"Medium"},
    {vad_taskId:3, vad_taskName:"lập trình với frontend - reactjs", vad_level:"High"},
    {vad_taskId:4, vad_taskName:"lập trình fullstack(php,java,netcore)", vad_level:"Small"},
  ];
  // sử dụng hàm useState để lưu trữ trạng thái dữ liệu 
  const [vadListTasks, setVadListTasks] = useState(vad_listTasks);

  const vadHandleSubmit = (vadParam) =>{
    setVadListTasks(prev => {
      return[
        ...prev,
        vadParam
      ]
    })
  }
  return (
    <div className='container border'>
      <h1>Vũ Anh Dương - K22CNT2</h1>
      <hr/>
      <div>
        {/*Danh sach list task*/}
        <VadListTask renderVadListTasks = {vadListTasks}/>
      </div>
      <div>
        <VadTaskAddOrEdit vadOnSubmit = {vadHandleSubmit}/>
      </div>
    </div>
  )
}
