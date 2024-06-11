import React, { useEffect, useState } from 'react'

export default function VadAddOrEdit({renderVadStudent, renderVadIsAddOrEdit, vadOnSubmit}) {
    const [vadTask, setVadTask] = useState(renderVadStudent);
    useEffect(()=>{
        setVadTask(renderVadStudent)
    },[renderVadStudent])
    // tao tieu de form 
    const vadTieuDe = renderVadIsAddOrEdit == true ? "Thêm mới task" : "Sửa thông tin task";
    // ham xu ly su kien thay doi tren dieu khien
    const vadHandleChange = (vadEvent) => {
        let name = vadEvent.target.name;
        let value = vadEvent.target.value;

        setVadTask(prev => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const vadHandleSubmit = (vadEvent) => {
        vadEvent.preventDefault();
        vadOnSubmit(vadTask);
    }
  return (
    <div>
            <h2> {vadTieuDe} </h2>
            <form>
                <div className="form-group">
                    <label>ID</label>
                    <input
                        name='vad_Id'
                        className="form-control"
                        value={vadTask.vad_Id}
                        onChange={vadHandleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        name='vad_Name'
                        className="form-control"
                        value={vadTask.vad_Name}
                        onChange={vadHandleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input
                        name='vad_age'
                        className="form-control"
                        value={vadTask.vad_age}
                        onChange={vadHandleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input
                        name='vad_phone'
                        className="form-control"
                        value={vadTask.vad_phone}
                        onChange={vadHandleChange}
                    />
                </div>
                <div>
                    <label>Status</label>
                    <select className='form-select' name='vad_status' value={vadTask.vad_status} onChange={vadHandleChange}>
                        <option value={'true'}>true</option>
                        <option value={'false'}>false</option>
                    </select>
                </div>

                <button className="btn btn-primary" onClick={vadHandleSubmit}>
                    Ghi lại
                </button>
            </form>
        </div>
  )
}
