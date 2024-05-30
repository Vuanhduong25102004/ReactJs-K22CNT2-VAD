import React, { useState } from 'react'

export default function VadTaskAddOrEdit({vadOnSubmit}) {
    // doi tuong task
    const vadTaskObj = {
        vad_taskId: 0,
        vad_taskName:"",
        vad_level:""
    }
    const [vadTask, setVadTask] = useState(vadTaskObj);
    // ham xu ly su kien thay doi tren dieu khien
    const vadHandleChange = (vadEvent) => {
        let name = vadEvent.target.name;
        let value = vadEvent.target.value;

        setVadTask(prev =>{
            return{
                ...prev,
                [name]:value,
            }
        })
    }

    const vadHandleSubmit = (vadEvent) =>{
        vadEvent.preventDefault();
        vadOnSubmit(vadTask);
    }
  return (
    <div>
        <h2>Thêm mới task</h2>
        <from>
            <div>
                <label>Task ID</label>
                <input name='vad_taskId' value={vadTask.vad_taskId} onChange={vadHandleChange}></input>
            </div>
            <div>
                <label>Task Name</label>
                <input name='vad_taskName' value={vadTask.vad_taskName} onChange={vadHandleChange}></input>
            </div>
            <div>
                <label>Task Level</label>
                <select name='vad_level' value={vadTask.vad_level} onChange={vadHandleChange}>
                    <option value={'Small'}>Small</option>
                    <option value={'Medium'}>Medium</option>
                    <option value={'High'}>High</option>
                </select>
            </div>
            <button onClick={vadHandleSubmit}>Ghi lại</button>
        </from>
    </div>
  )
}
