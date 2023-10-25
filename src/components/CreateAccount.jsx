import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import * as Yup from 'yup';
import signup from '../assets/signup.png'
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
        <section className='w-full flex flex-col items-center justify-center lg:flex-row-reverse lg:justify-between lg:px-12'>
            <img src={signup} className='w-[720px] hidden lg:flex'/>
            <div className='lg:w-1/3 w-full flex flex-col items-center justify-center'>        
    <h1 className='text-white font-roboto tracking-wider text-4xl font-bold lg:text-5xl'>Subscribe!</h1>
    <Formik initialValues={{firstname:'',lastname:'',email:'',password:'',confirm:''}}
     className='flex flex-col space-y-4 my-8'
     validationSchema={Yup.object({
        firstname : Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
        lastname : Yup.string()
        .max(20,'Must be 20 characters or less')
        .required('Required'),
        email : Yup.string()
        .email('Invalid Email')
        .required("Required"),
        password : Yup.string()
        .max(12,'Must be 12 characters or less')
        .min(8,'Must be 8 characters or more')
        .required("Required"),
        confirm : Yup.string()
        .max(12,'Must be 12 characters or less')
        .min(8,'Must be 8 characters or more')
        .required("Required")
     })}
     onSubmit={(values, {setSubmitting}) => {
        setTimeout(() => {
            alert(JSON.stringify(values,null,2));
            setSubmitting(false);
        },400)
        
     }}
     >        
        <Form className='flex flex-col space-y-4 w-full items-center justify-center my-6 lg:items-start'>
            <Field
            name="firstname"
            type="text" 
            placeholder="Firstname"
            className="font-roboto px-2 py-2 w-2/3 text-xl rounded-xl lg:w-full"
            />
            <h3 className='text-rose-500 font-roboto  font-bold tracking-wide w-2/3'>
            <ErrorMessage name='firstname' />
            </h3>
            <Field 
            name="lastname" 
            type="text" 
            placeholder="Lastname"
            className="font-roboto px-2 py-2 w-2/3 text-xl rounded-xl lg:w-full"
            />
            <h3 className='text-rose-500 font-roboto  font-bold tracking-wide w-2/3'>
            <ErrorMessage name='lastname' />
            </h3> 
            <Field 
            name="email" 
            type="email"
            placeholder="email@example.com"
            className="font-roboto px-2 py-2 w-2/3 text-xl rounded-xl lg:w-full"
            />
            <h3 className='text-rose-500 font-roboto  font-bold tracking-wide w-2/3'>
            <ErrorMessage name='email' />
            </h3>
            <Field 
            name="password" 
            type="password"
            placeholder="Password"
            className="font-roboto px-2 py-2 w-2/3 text-xl rounded-xl lg:w-full"
            />
            <h3 className='text-rose-500 font-roboto  font-bold tracking-wide w-2/3'>
            <ErrorMessage name='password' />
            </h3>
            <Field 
            name="confirm" 
            type="password"
            placeholder="Confirm Password"
            className="font-roboto px-2 py-2 w-2/3 text-xl rounded-xl lg:w-full"
            />
            <h3 className='text-rose-500 font-roboto  font-bold tracking-wide w-2/3'>
            <ErrorMessage name='confirm' />
            </h3>
            <button type='submit' className='text-white bg-slate-600 px-4 py-2 font-roboto tracking-wide hover:bg-slate-900 duration-200 rounded-xl'>Register</button>
        </Form>
    </Formik>
    </div>
    </section>
}
</>

  )
}

export default CreateAccount