import React, { useState } from 'react'

export default function VaduseState() {
    const [count, setCount] = useState(0);
    // mảng
    const [list, setList]=useState([]);
    // hàm xử lý sự kiện "thêm ngẫu nhiên"
    const vadHandleList = () => {
        let num = parseInt(Math.random()*100);
    // Cập nhật lại state: list
    setList([
        ...list,
        num
    ])
    }
  return (
    <div>
        <p>You clicked {count} times </p>
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
        <hr/>
        <h3>List: {list.toString()}</h3>
        <button onClick={vadHandleList}>Thêm ngẫu nhiên</button>
    </div>
  )
}
