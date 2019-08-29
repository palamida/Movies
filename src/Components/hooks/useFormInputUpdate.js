import { useState } from 'react'

export default function useFormInputUpdate(initialValue='') {
    const [value, setValue] = useState(initialValue)

    function handleChange(e) {
        console.log("Value before change="+value+" / target.value="+e.target.value+" / target.name="+e.target.name)
        setValue(e.target.value)
        console.log("Value on change="+value)
    }
        
    return {
        value,
        onChange: handleChange
    }
}
