import React from 'react'

export default function VadListUsers({renderVadListUser}) {
    // hien thi du lieu
    let vadElementUser = renderVadListUser.map((vadUser,index)=>{
        return(
            <>
                <tr>
                    <td>{vadUser.id}</td>
                    <td>{vadUser.UserName}</td>
                    <td>{vadUser.Password}</td>
                    <td>{vadUser.Email}</td>
                    <td>{vadUser.Phone}</td>
                    <td>..</td>
                </tr>
            </>
        )
    })
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
