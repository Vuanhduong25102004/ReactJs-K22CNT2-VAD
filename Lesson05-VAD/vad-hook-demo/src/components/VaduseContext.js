import React, { createContext, useState } from 'react'
import VaduseContext1 from './VaduseContext1';
export const ThemeContext = createContext(); // tạo ngữ cảnh để chia sẻ
export default function VaduseContext() {
    //state
    const [theme , setTheme] = useState('violet');

    // hàm thay đổi theme
    const vadHandleChange = ()=>{
        setTheme(theme==='violet'?'aqua':'violet');
    }
  return (
    <ThemeContext.Provider value={theme}>
    <div>
        <h2>Demo useContext</h2>
        <VaduseContext1/>
        <button onClick={vadHandleChange}>Change bgcolor</button>
    </div>
    </ThemeContext.Provider>
  )
}
