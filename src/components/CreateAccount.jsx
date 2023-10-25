import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'


const CreateAccount = () => {
    const [open, setOpen] = useState(true);
    
    useEffect(() => {
        setTimeout(() => {
                setOpen(false)
        },200)
    },[])

  return (
    <>        
    {
    open 
    ? 
    <ClipLoader color={'white'} size={50}/> 
    : 
    
    <Formik initialValues={{firstname:'',lastname:'',email:'',password:'',confirm:''}}
     className='flex flex-col space-y-4 my-8'>        
        <h1 className='text-white font-bold font-roboto text-4xl tracking-wide cursor-default'>Subscribe</h1>
        
    </Formik>
}
</>

  )
}

export default CreateAccount