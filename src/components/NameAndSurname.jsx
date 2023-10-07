import React, { useContext } from 'react'
import GlobalContext from '../context/MainContext'
import { motion } from 'framer-motion';



const NameAndSurname = () => {
    const {setStep} = useContext(GlobalContext);
    

  return (
    <motion.form className='flex items-center justify-center space-x-4 w-full' initial={{x: "100vw"}} animate={{x:0}} transition={{type:"tween", duration:0.4}}>
                <input className='text-black px-4 py-2 font-roboto tracking-wide w-[280px]' placeholder='Your name And Surname'></input>
                <button className='tableBackground text-white px-4 py-2 font-roboto font-bold tracking-wide' onClick={() => setStep(step => step + 1)}>Continue</button>
            </motion.form>
  )
}

export default NameAndSurname