import {useState} from 'react';


const useForm=(type)=>{

const [data,setData]=useState('')

const onchange=(e)=>{

    setData(e.target.data);
}

return {
    type,
    data,
    onchange
}
}

export default useForm;