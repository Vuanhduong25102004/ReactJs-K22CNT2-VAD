import React, { useEffect, useState } from 'react'

export default function VadTaskAddOrEdit({ renderVadTask, renderVadIsAddOrEdit, vadOnSubmit }) {

    const [vadTask, setVadTask] = useState(renderVadTask);
    useEffect(() => {
        setVadTask(renderVadTask)
    }, [renderVadTask])

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
                    <label>Task ID</label>
                    <input
                        name='vad_taskId'
                        className="form-control"
                        value={vadTask.vad_taskId}
                        onChange={vadHandleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Task Name</label>
                    <input
                        name='vad_taskName'
                        className="form-control"
                        value={vadTask.vad_taskName}
                        onChange={vadHandleChange}
                    />
                </div>
                <div>
                    <label>Task Level</label>
                    <select className='form-select' name='vad_level' value={vadTask.vad_level} onChange={vadHandleChange}>
                        <option value={'Small'}>Small</option>
                        <option value={'Medium'}>Medium</option>
                        <option value={'High'}>High</option>
                    </select>
                </div>

                <button className="btn btn-primary" onClick={vadHandleSubmit}>
                    Ghi lại
                </button>
            </form>
        </div>
    )
}

