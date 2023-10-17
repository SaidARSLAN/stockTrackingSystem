import React, { useContext, useRef, useState } from 'react'
import GlobalContext from '../context/MainContext'
import { motion, steps } from 'framer-motion';
import GlobalInformationContext from '../context/InformationContext';



const NameAndSurname = () => {
    const [nameSurname, setNameSurname] = useState("");
    const {setStep} = useContext(GlobalContext);
    const {sendData} = useContext(GlobalInformationContext);
    const inputRef = useRef();
    const handleClick = (event) => {
      event.preventDefault()
          nameSurname !== "" ? 
          (
          setStep(step => step + 1),
          sendData(nameSurname,"name"))
          :
          inputRef.current.classList.add("border-2")
          inputRef.current.classList.add("border-rose-500");
          
    }

  return (
    <motion.form className='flex items-center justify-center space-x-4 w-full' initial={{x: "100vw"}} animate={{x:0}} transition={{type:"tween", duration:0.4}}>
                <input ref={inputRef} className='text-black px-4 py-2 text-sm font-roboto tracking-wide w-[180px] lg:w-[320px]' value={nameSurname} onChange={event => setNameSurname(event.target.value)} placeholder='Your name And Surname'></input>
                <button className='tableBackground text-white px-4 py-2 font-roboto font-bold tracking-wide' onClick={handleClick}>Continue</button>
            </motion.form>
  )
}

export default NameAndSurname