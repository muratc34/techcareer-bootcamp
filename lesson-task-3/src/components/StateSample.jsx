import React, { useState } from 'react'
import './state-sample.css'

const StateSample = () => {
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");
    const [inputWidth, setInputWidth] = useState("");
    const [inputHeight, setInputHeight] = useState("")

    const Calculate = () => {
        setWidth(inputWidth);
        setHeight(inputHeight);
    }

  return (
    <div>
        <div className='inputs'>
            <div className='inputs-content'>
                <label>Width</label>
                <input type="text" onChange={(e) => setInputWidth(e.target.value)} />
            </div>
            <div className='inputs-content'>
                <label>Height</label>
                <input type="text" onChange={(e) => setInputHeight(e.target.value)}/>
            </div>
        </div>
        <button className='btn' onClick={() => Calculate()}>Calculate</button>

        <div className='box' style={{width: `${width}px`, height: `${height}px`}}>

        </div>
    </div>

  )
}

export default StateSample