import React from 'react'

export default function Button({watchArr, setWatchArr}){
    function handleClick(event){
        event.preventDefault()

        const name = document.querySelector('input[name="name"]')
        const timezone = document.querySelector('input[name="timezone"]')
        
        if (name.value !== '' && timezone.value !== ''){
            const cloneWatchArr = Object.assign([], watchArr)

            cloneWatchArr.push({
                name: name.value,
                utc: timezone.value,
                id: cloneWatchArr.length
            })
            
            setWatchArr(cloneWatchArr)

            name.value = ''
            timezone.value = ''
        }
    }
    return (
        <div className="button-container">
            <button onClick={handleClick}>Добавить</button>
        </div>
    )
}