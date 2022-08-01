import React from 'react'
import moment from 'moment'
import { useState } from 'react'

export default function Watch({obj, watchArr, setWatchArr}){
    const utc = obj.utc
    const [time, setTime] = useState(returnCurrentUtcTime(utc))

    function returnCurrentUtcTime(utc){
        const utcHoursValue = Number(utc.slice(4))
        
        const currentUtcTime = moment().utcOffset(new Date().getTimezoneOffset()).utcOffset(utcHoursValue).format('HH:mm:ss')

        return currentUtcTime

    }

    setInterval(() => {
        setTime(returnCurrentUtcTime(utc))
    }, 100)

    function handleClick(){
        clearInterval()

        const watchArrCopy = Object.assign([], watchArr);
        const index = watchArrCopy.findIndex(item => item.id === obj.id)
        index !== -1 && watchArrCopy.splice(index, 1)


        setWatchArr(watchArrCopy)
    }


    return(
        <div className="watch">
            <span onClick={handleClick} className="delete-watch-button">X</span>
            <p className="watch-name">{obj.name}</p>
            <p className="watch-time">{time}</p>
        </div>
    )
}