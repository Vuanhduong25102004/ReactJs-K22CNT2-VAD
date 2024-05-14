
import React, { useEffect, useState } from 'react'

export default function VaduseEffect() {
    const [count, setCount] = useState(0);

    const vadHandleClick = ()=>{
        setCount(prev => prev + 1);
    }

    // sử dụng hàm useEffect để cập nhật lại tittle
    useEffect(()=>{
        document.title = `Vũ Anh Dương: You clicked ${count} times`;
        console.log(`You clicked ${count} times`)
    });

    // useEffect: tham số thứ 2 là mảng rỗng
    useEffect(()=>{
        console.log("chạy lần đầu tiên - một lần");
    },[])

    // [deps]
    useEffect(()=>{
        console.log(`useEffect count click: ` , count )
    },[count])  
  return (
    <div>
        <h2>Demo - useEffect: You clicked {count} times</h2>
        <button onClick={vadHandleClick}>Click me</button>
    </div>
  )
}
