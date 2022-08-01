import React from 'react'

export default function Input({name, subTitle}){
    return(
        <div className="input-container">
            <p>{subTitle}</p>
            <input type="text" name={name}/>
            <label htmlFor={name}></label>
        </div>
    )
}