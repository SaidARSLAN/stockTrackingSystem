import React, { useContext, useState } from 'react'
import GlobalInformationContext from '../context/InformationContext'

const Tracker = () => {
    
    const [income, setIncome] = useState(0);

    const {sendIncomeData,data} = useContext(GlobalInformationContext);

    const handleClick = (event) => {
        event.preventDefault();
        sendIncomeData(income);
        data.setTrackerStep(prevStep => prevStep + 1);
    }
  return (
    <form className='flex items-center justify-center space-x-2'>
        <input placeholder='Monthly Income' className='px-2 py-2 font-roboto font-bold max-[320px]:w-[100px]' value={income} onChange={(event) => {setIncome(event.target.value)}}></input>
        <button className='bg-white px-2 py-2 font-roboto font-bold max-[320px]:w-[50px] max-[320px]:text-[10px] max-[320px]:py-3 text-center max-[320px]:px-0' onClick={handleClick}>Continue</button>
    </form>
  )
}

export default Tracker