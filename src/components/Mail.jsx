import React, { useContext, useRef, useState } from 'react'
import GlobalContext from '../context/MainContext'
import { motion } from 'framer-motion'
import GlobalInformationContext from '../context/InformationContext'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { CREATE_ACCOUNT } from '../store/info'

const Mail = () => {

    const dispatch = useDispatch();

    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const {setStep} = useContext(GlobalContext)
    const {sendData} =  useContext(GlobalInformationContext)


    const inputRef = useRef();
    const handleClick = (event) => {
        event.preventDefault();
        if (email !== "") {
          dispatch(CREATE_ACCOUNT({"name":"TEST","email":email}));
          setStep(step => step + 1);
          sendData(email,"email")
          setTimeout(() => {
            navigate("wallet");
        },3000)
        }
        else {
          inputRef.current.classList.add("border-2")
          inputRef.current.classList.add("border-rose-500")
        }
    }
      
  return (
    <motion.form className='flex items-center justify-center space-x-4 w-full' initial={{x:"100vw"}} animate={{x:0}} transition={{type:"tween", duration:0.4}}>
                <input ref={inputRef} className='text-black px-4 py-2 text-sm font-roboto tracking-wide w-[180px] lg:w-[320px]' value={email} onChange={event => {setEmail(event.target.value)}} placeholder='Mail Adress'></input>
                <button className='tableBackground text-white px-4 py-2 font-roboto font-bold tracking-wide' onClick={handleClick}>Create</button>
            </motion.form>
  )
}

export default Mail