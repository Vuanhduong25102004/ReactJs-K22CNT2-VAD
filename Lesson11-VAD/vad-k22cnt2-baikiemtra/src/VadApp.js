
import './App.css';
import VadSinhVienList from './components/VadSinhVienList';
import axios from './api/VadApi'
import { useEffect, useState } from 'react';
import VadSinhVienAddOrEdit from './components/VadSinhVienAddOrEdit';

function VadApp() {
  const [vadSinhvienList,setVadSinhvienList] = useState([]);

  const vadGetAllSinhvien = async ()=>{
    const vadResponse = await axios.get("VadSinhvien");
    setVadSinhvienList(vadResponse.data)
  }

  useEffect(()=>{
    vadGetAllSinhvien();
  })
  
  // ham xu ly them moi

  const [vadAddOrEdit,setVadAddOrEdit] = useState(false);
  const vadInitSV = {
    VadHoSV: "Vũ",
    VadTenSV: "Anh Dương",
    VadPhai: 1,
    VadNgaySinh: 25102004,
    VadNoiSinh: "Hà Nội",
    VadMaKH: "CNTT",
    VadHocBong: "Không",
    VadDiemTrungBinh: 10,
    VadMaSV: "2210900017"
  }
  const [vadSV,setVadSV]=useState(vadInitSV)

  const vadHandleAddNew = ()=>{
    setVadAddOrEdit(true)
  }

  const vadHandleClose=(param)=>{
    setVadAddOrEdit(param)
  }

  const vadHandleSubmit=(param)=>{
    vadGetAllSinhvien();
    setVadAddOrEdit(param);
  }
  let vadElementForm = vadAddOrEdit===true?<VadSinhVienAddOrEdit renderSV={vadSV} 
                                                                onVadClose={vadHandleClose}
                                                                onVadSubmitForm={vadHandleSubmit}/>:"";
  return (
    <div className="container border my-3">
      <h1>Bài tập thi lấy điểm giữa môn</h1>
      <hr/>
      <VadSinhVienList renderVadSinhvienList={vadSinhvienList}/>
      <button className='btn btn-primary' name='btnVadThemmoi' onClick={vadHandleAddNew}>Thêm mới</button>
      <hr/>
      {vadElementForm}
    </div>
  );
}

export default VadApp;
