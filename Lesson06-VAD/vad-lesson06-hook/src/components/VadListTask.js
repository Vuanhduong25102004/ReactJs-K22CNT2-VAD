import React from 'react'

export default function VadListTask({renderVadListTasks}) {
    console.log(renderVadListTasks);

    //render data
    let vadElementTask = renderVadListTasks.map((task, index)=> {
        return (
            <>
                <tr>
                    <td>{index+1}</td>
                    <td>{task.vad_taskid}</td>
                    <td>{task.vad_taskName}</td>
                    <td>{task.vad_level}</td>
                    <td>
                        <button className='btn btn-success'>Edit</button>
                        <button className='btn btn-danger'>Remove</button>
                    </td>
                </tr>
            </>
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
