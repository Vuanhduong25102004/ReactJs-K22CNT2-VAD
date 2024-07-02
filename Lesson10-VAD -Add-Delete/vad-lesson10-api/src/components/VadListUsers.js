import axios from '../api/VadApi'
import React from 'react'

export default function VadListUsers({renderVadListUser,onVadDelete}) {
    // hien thi du lieu
    let vadElementUser = renderVadListUser.map((vadUser,index)=>{
        return(

                <tr key={index}>
                    <td>{vadUser.id}</td>
                    <td>{vadUser.UserName}</td>
                    <td>{vadUser.Password}</td>
                    <td>{vadUser.Email}</td>
                    <td>{vadUser.Phone}</td>
                    <td>
                        <button className='btn btn-danger' onClick={()=>vadHandleDelete(vadUser)}>Delete</button>
                    </td>
                </tr>
   
        )
    })

    const vadHandleDelete = async (param)=>{
        if(window.confirm('Bạn có thật sự muốn xóa không?')){
            const vadRes = await axios.delete("vadUsers/"+param.id);
        }
        onVadDelete()
    }
  return (
    <div className='row'>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>UserName</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {vadElementUser}
            </tbody>
        </table>
    </div>
  )
}
