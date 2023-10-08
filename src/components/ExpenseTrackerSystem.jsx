import React, { useContext, useState } from 'react'
import GlobalInformationContext from '../context/InformationContext'

const ExpenseTrackerSystem = () => {
    const {income} = useContext(GlobalInformationContext)
    const [transaction, setTransaction] = useState("");
    const [price, setPrice] = useState(0);
  return (
    <div className='w-full flex flex-col items-center justify-center'>
    <div className='w-full flex items-center justify-evenly'>
        <div className='flex items-center flex-col justify-center space-y-2'>
        <h3 className='text-white text-xl tracking-wider font-roboto font-bold'>Income</h3>
        <h3 className='text-green-500 text-lg font-roboto font-bold '>{income} $</h3>
        </div>
        <div className='flex items-center flex-col justify-center space-y-2'>
        <h3 className='text-white text-xl tracking-wider font-roboto font-bold'>Expense</h3>
        <h3 className='text-rose-500 text-lg font-roboto font-bold'>-200 $</h3>
        </div>
        </div>
        <form className='w-full flex items-center justify-center my-4 space-x-2'>
            <div className='flex flex-col items-center justify-center space-y-2'>
            <input placeholder='Transaction' className='px-2 py-2 font-roboto font-bold tracking-wide' value={transaction} onChange={event => setTransaction(event.target.value)}></input>
            <input placeholder='Price' className='px-2 py-2 font-roboto font-bold tracking-wide' value={price} onChange={event => setPrice(event.target.value)}></input>
            <button className='w-full py-1 bg-white font-roboto font-bold'>Add</button>
            </div>
        </form>
    </div>
  )
}

export default ExpenseTrackerSystem