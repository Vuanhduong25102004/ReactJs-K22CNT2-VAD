import React from 'react'

export default function VadListTask({renderVadListTasks, onVadTaskEdit, onVadTaskDelete}) {
    console.log(renderVadListTasks);
    // ham xu ly khi sua
    const vadHandleEdit = (param) => {
        console.log("click edit: ", param);
        onVadTaskEdit(param) //day len app thong qua props(onVadTaskEdit)

    }
    // ham xu ly khi xoa
    const vadHandleDelete = (param)=>{
        if(window.confirm('Bạn có chắc chắn xóa không')){
            onVadTaskDelete(param) // day du lieu xoa len tren app.js
        }
    }
    //render data
    let vadElementTask = renderVadListTasks.map((task, index)=> {
        return (
     
                <tr>
                    <td>{index+1}</td>
                    <td>{task.vad_taskId}</td>
                    <td>{task.vad_taskName}</td>
                    <td>{task.vad_level}</td>
                    <td>
                        <button className='btn btn-success' onClick={()=>vadHandleEdit(task)}>Edit</button>
                        <button className='btn btn-danger' onClick={()=>vadHandleDelete(task)}>Remove</button>
                    </td>
                </tr>
    
        )
    })
        
  return (
    <div>
        <h2>Danh sách các nhiệm vụ</h2>
        <table className= 'table table-bordered'>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Task Id</th>
                    <th>Task Name</th>
                    <th>Task Level</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {vadElementTask}
            </tbody>
        </table>
    </div>
  )
}
