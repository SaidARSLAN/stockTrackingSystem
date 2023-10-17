import React, { useContext, useState } from 'react'
import GlobalInformationContext from '../context/InformationContext'
import { motion } from 'framer-motion';

const Tracker = () => {
    
    const [income, setIncome] = useState(0);

    const {sendIncomeData,data} = useContext(GlobalInformationContext);

    const handleClick = (event) => {
        event.preventDefault();
        sendIncomeData(income);
        data.setTrackerStep(prevStep => prevStep + 1);
    }
  return (
    <motion.form className='flex items-center justify-center space-x-2' initial={{x: "100vw"}} animate={{x:0}} transition={{type:"tween", duration:0.4}}>
        <input placeholder='Monthly Income' className='px-2 py-2 font-roboto font-bold max-[390px]:w-[100px]' value={income} onChange={(event) => {setIncome(event.target.value)}}></input>
        <button className='bg-white px-2 py-2 font-roboto font-bold max-[390px]:w-[50px] max-[390px]:text-[10px] max-[390px]:py-3 text-center max-[390px]:px-0' onClick={handleClick}>Continue</button>
    </motion.form>
  )
}

export default Tracker