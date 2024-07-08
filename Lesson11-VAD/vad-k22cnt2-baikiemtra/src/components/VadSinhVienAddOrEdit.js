import React, { useEffect , useState} from 'react'
import axios from '../api/VadApi'

export default function VadSinhVienAddOrEdit({onVadClose, onVadSubmitForm, renderSV}) {

    const [vadMaSV,setVadMaSV] = useState(0);
    const [vadHoSV, setVadHoSV] = useState("");
    const [vadTenSV,setVadTenSV] = useState("");
    const [vadPhai,setVadPhai] = useState("");
    const [vadNgaySinh,setVadNgaySinh] = useState(0);
    const [vadNoiSinh,setVadNoiSinh] = useState("");
    const [vadMaKH,setVadMaKH] = useState("");
    const [vadHocBong,setVadHocBong] = useState("");
    const [vadDiemTrungBinh,setVadDiemTrungBinh] = useState(0);

    useEffect(()=>{
        setVadMaSV(renderSV.VadMaSV)
        setVadHoSV(renderSV.VadHoSV)
        setVadTenSV(renderSV.VadTenSV)
        setVadPhai(renderSV.VadPhai)
        setVadNgaySinh(renderSV.VadNgaySinh)
        setVadNoiSinh(renderSV.VadNoiSinh)
        setVadMaKH(renderSV.VadMaKH)
        setVadHocBong(renderSV.VadHocBong)
        setVadDiemTrungBinh(renderSV.VadDiemTrungBinh)
    },[renderSV])
    const vadHandleClose = ()=>{
        onVadClose(false);
    }

    const vadHandleSubmit= async (event)=>{
        event.preventDefault();
        //post -> api
        let vadObjSV = {
            VadHoSV: vadHoSV,
            VadTenSV: vadTenSV,
            VadPhai: vadPhai,
            VadNgaySinh: vadNgaySinh,
            VadNoiSinh: vadNoiSinh,
            VadMaKH: vadMaKH,
            VadHocBong: vadHocBong,
            VadDiemTrungBinh: vadDiemTrungBinh,
            VadMaSV: vadMaSV
        }
        const vadRes = await axios.post("VadSinhvien",vadObjSV)

        onVadSubmitForm(false)
    }
  return (
    <div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="VadMaSV">MaSV</span>
            </div>
            <input type="text" class="form-control" 
                name='VadMaSV' value={vadMaSV} onChange={(ev)=>setVadMaSV(ev.target.value)}
                placeholder="MaSV" aria-label="VadMaSV" aria-describedby="VadMaSV"/>
        </div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="VadHoSV">HoSV</span>
            </div>
            <input type="text" class="form-control" 
                name='VadHoSV' value={vadHoSV} onChange={(ev)=>setVadHoSV(ev.target.value)}
                placeholder="HoSV" aria-label="VadHoSV" aria-describedby="VadHoSV"/>
        </div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="VadTenSV">TenSV</span>
            </div>
            <input type="text" class="form-control" 
                name='VadTenSV' value={vadTenSV} onChange={(ev)=>setVadTenSV(ev.target.value)}
                placeholder="TenSV" aria-label="VadTenSV" aria-describedby="VadTenSV"/>
        </div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="VadPhai">Phai</span>
            </div>
            <input type="number" class="form-control" 
                name='VadPhai' value={vadPhai} onChange={(ev)=>setVadPhai(ev.target.value)}  
                placeholder="Phai" aria-label="VadPhai" aria-describedby="VadPhai"/>
        </div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="VadNgaySinh">Ngaysinh</span>
            </div>
            <input type="numberVadDiemTrungBinh" class="form-control" 
                name='VadNgaySinh' value={vadNgaySinh} onChange={(ev)=>setVadNgaySinh(ev.target.value)}
                placeholder="NgaySinh" aria-label="VadNgaySinh" aria-describedby="VadNgaySinh"/>
        </div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="VadNoiSinh">Noisinh</span>
            </div>
            <input type="text" class="form-control" 
                name='VadNoiSinh' value={vadNoiSinh} onChange={(ev)=>setVadNoiSinh(ev.target.value)}
                placeholder="NoiSinh" aria-label="VadNoiSinh" aria-describedby="VadNoiSinh"/>
        </div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="VadMaKH">MaKH</span>
            </div>
            <input type="text" class="form-control" 
                name='VadMaKH' value={vadMaKH} onChange={(ev)=>setVadMaKH(ev.target.value)}
                placeholder="MaKH" aria-label="VadMaKH" aria-describedby="VadMaKH"/>
        </div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="VadHocBong">Hocbong</span>
            </div>
            <input type="text" class="form-control" 
                name='VadHocBong' value={vadHocBong} onChange={(ev)=>setVadHocBong(ev.target.value)}
                placeholder="HocBong" aria-label="VadHocBong" aria-describedby="VadHocBong"/>
        </div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="VadDiemTrungBinh">Diemtrungbinh</span>
            </div>
            <input type="number" class="form-control" 
                name='VadDiemTrungBinh' value={vadDiemTrungBinh} onChange={(ev)=>setVadDiemTrungBinh(ev.target.value)}
                placeholder="DiemTrungBinh" aria-label="VadDiemTrungBinh" aria-describedby="VadDiemTrungBinh"/>
        </div>
        <button className='btn btn-primary' name='btnVadSave' onClick={(ev)=>vadHandleSubmit(ev)}>Ghi lại</button>
        <button className='btn btn-danger' onClick={vadHandleClose}>Đóng</button>
    </div>
  )
}
