import {memo} from 'react'

export const FormInput = memo(({name, type, value, setValue, isError}) => {
    console.log(`Render FormInput ${name}`)

    return(
        <div>
            <input
                type={type}
                name="{name"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                style={{border: `1px solid ${isError ? 'red' : 'black'}`}}
            />
        </div>
    )
})