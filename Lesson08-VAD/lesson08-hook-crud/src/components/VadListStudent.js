import React from 'react'

export default function VadListStudent({renderVadStudent, onVadTaskEdit, onVadTaskDelete}) {

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

    let vadElementStudent = renderVadStudent.map((task, index)=>{
        return(
            <tr>
                <td>{index+1}</td>
                <td>{task.vad_Id}</td>
                <td>{task.vad_Name}</td>
                <td>{task.vad_age}</td>
                <td>{task.vad_phone}</td>
                <td>{task.vad_status ? 'true' : 'false'}</td>
                <td>
                    <button className='btn btn-success' onClick={()=>vadHandleEdit(task)}>Edit</button>
                    <button className='btn btn-danger' onClick={()=>vadHandleDelete(task)}>Remove</button>
                </td>
            </tr>
        )
    })
  return (
    <div>
        <h2>Danh sách Student</h2>
        <table className= 'table table-bordered'>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Phone</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {vadElementStudent}
            </tbody>
        </table>
    </div>
  )
}
