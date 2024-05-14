import React, { useContext } from 'react'
import { ThemeContext } from './VaduseContext'

export default function VaduseContext2() {
    const theme = useContext(ThemeContext);
  return (
    <div className={theme}>
        <h2>VaduseContext2</h2>
        <p>
            <b>2210900017</b>
            <b>Vũ Anh Dương</b>
            <i>K22CNT2</i>
        </p>
    </div>
  )
}
