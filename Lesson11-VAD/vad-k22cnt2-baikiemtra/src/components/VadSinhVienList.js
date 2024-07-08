import React from 'react'
import axios from '../api/VadApi'

export default function VadSinhVienList({renderVadSinhvienList}) {
    let vadElementSv = renderVadSinhvienList.map((vadSV,index)=>{
        return(
            <tr key={index}>
                <td>{vadSV.VadMaSV}</td>
                <td>{vadSV.VadHoSV}</td>
                <td>{vadSV.VadTenSV}</td>
                <td>{vadSV.VadPhai}</td>
                <td>{vadSV.VadNgaySinh}</td>
                <td>{vadSV.VadNoiSinh}</td>
                <td>{vadSV.VadMaKH}</td>
                <td>{vadSV.VadHocBong}</td>
                <td>{vadSV.VadDiemTrungBinh}</td>
                <td>
                    <button className='btn btn-danger' onClick={()=>vadHandleDelete(vadSV)}>Delete</button>
                </td>
            </tr>
        )
    })
    
    const vadHandleDelete = async (param)=>{
        const vadRes = await axios.delete("VadSinhvien/"+param.VadMaSV);

    }
  return (
    <div className='row'>
        <div className='col-md-12'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>VadMaSV</th>
                        <th>VadHoSV</th>
                        <th>VadTenSV</th>
                        <th>VadPhai</th>
                        <th>VadNgaySinh</th>
                        <th>VadNoiSinh</th>
                        <th>VadMaKH</th>
                        <th>VadHocBong</th>
                        <th>VadDiemTrungBinh</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {vadElementSv}
                </tbody>
            </table>
        </div>
    </div>
  )
}
