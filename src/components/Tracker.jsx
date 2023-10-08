import React, { useContext, useState } from 'react'
import GlobalInformationContext from '../context/InformationContext'

const Tracker = () => {
    
    const [income, setIncome] = useState(0);

    const {sendIncomeData} = useContext(GlobalInformationContext);

    const handleClick = (event) => {
        event.preventDefault();
        sendIncomeData(income);
        setIncome(0);
    }
  return (
    <form className='flex items-center justify-center space-x-2'>
        <input placeholder='Monthly Income' className='px-2 py-2 font-roboto font-bold' value={income} onChange={(event) => {setIncome(event.target.value)}}></input>
        <button className='bg-white px-2 py-2 font-roboto font-bold' onClick={handleClick}>Continue</button>
    </form>
  )
}

export default Tracker