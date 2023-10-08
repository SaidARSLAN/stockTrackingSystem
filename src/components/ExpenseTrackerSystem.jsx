import React, { useContext, useState } from 'react'
import GlobalInformationContext from '../context/InformationContext'

const ExpenseTrackerSystem = () => {
    const {income,sendTransactionData} = useContext(GlobalInformationContext)
    const [transaction, setTransaction] = useState("");
    const [price, setPrice] = useState("");
    const [transactionList, settransactionList] = useState([]);
    const [toggle, setToggle] = useState(false);
    const handleClick = (event) => {
        event.preventDefault();
        settransactionList([...transactionList, {"name" : transaction,"price" : price}])
        setTransaction("");
        setPrice("");
    }

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
        <div className='flex items-center justify-center flex-col w-full px-16'>
            {transactionList.map((query) => {
                return <div className='flex w-full items-center justify-between border-2 px-2 py-1'><h3 className='text-white font-roboto font-bold'>{query.name}</h3><p className='text-rose-500'>{query.price} $</p></div>
            })}
        </div>
        {toggle ? <form className='w-full flex flex-col items-center justify-center my-4 space-x-2 relative'>
            <div className='flex w-full justify-end items-center mr-40 my-2'>
                <h3 className='text-white text-3xl font-bold cursor-pointer' onClick={() => {setToggle(false)}}>X</h3>
            </div>
            <div className='flex flex-col items-center justify-center space-y-2'>
            <input placeholder='Transaction' className='px-2 py-2 font-roboto font-bold tracking-wide' value={transaction} onChange={event => setTransaction(event.target.value)}></input>
            <input placeholder='Price' className={price  === 0 ? 'px-2 py-2 font-roboto text-gray-400 font-bold tracking-wide'   : 'px-2 py-2 font-roboto font-bold tracking-wide'} value={price} onChange={event => setPrice(event.target.value)}></input>
            <button className='w-full py-1 bg-white font-roboto font-bold' onClick={handleClick}>Add</button>
            </div>
        </form> : <button className='bg-white px-2 py-1 my-6 font-roboto font-bold' onClick={() => {setToggle(true)}}>Create Transaction</button>}
        
    </div>
  )
}

export default ExpenseTrackerSystem