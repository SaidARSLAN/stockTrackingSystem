import React, { useContext, useState } from 'react'
import GlobalInformationContext from '../context/InformationContext'
import Modal from 'react-modal';
import { motion } from 'framer-motion';


const ExpenseTrackerSystem = () => {
    const {income,sendTransactionData,transactionList} = useContext(GlobalInformationContext)
    const [transaction, setTransaction] = useState("");
    const [price, setPrice] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);
    const [toggle, setToggle] = useState(false);
    const handleClick = (event) => {
        event.preventDefault();
        sendTransactionData({"name" : transaction,"price" : price})
        setTotalPrice(prevTotalCount => prevTotalCount + parseInt(price));
        setTransaction("");
        setPrice("");
        setToggle(false)
    }

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: "#fff",
          position: "fixed"
        },
      };
  return (
    <motion.div className='w-full flex flex-col items-center justify-center' initial={{scale:0.4}} animate={{scale:1}} transition={{duration:0.3,type:"tween"}}>
    <div className='w-full flex items-center justify-evenly'>
        <div className='flex items-center flex-col justify-center space-y-2'>
        <h3 className='text-white text-xl tracking-wider font-roboto font-bold'>Income</h3>
        <h3 className='text-green-500 text-lg font-roboto font-bold '>{income} $</h3>
        </div>
        <div className='flex items-center flex-col justify-center space-y-2'>
        <h3 className='text-white text-xl tracking-wider font-roboto font-bold'>Expense</h3>
        <h3 className='text-rose-500 text-lg font-roboto font-bold'>{totalPrice} $</h3>
        </div>
        </div>
        <div className='flex items-center justify-center flex-col w-full px-16 space-y-4 py-4 max-[390px]:px-4'>
            {transactionList && transactionList.map((query) => {
                return <div className='flex w-full items-center justify-between border-2 px-2 py-1'><h3 className='text-white font-roboto font-bold'>{query.name}</h3><p className='text-rose-500 max-[390px]:whitespace-nowrap'>{query.price} $</p></div>
            })}
        </div>
        <button className='bg-white px-2 py-1 my-6 font-roboto font-bold' onClick={() => {setToggle(true)}}>Create Transaction</button>
        <Modal
        isOpen={toggle}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <div className='flex w-full justify-end items-center my-2 max-[390px]:mr-10'>
                <h3 className='text-black text-3xl font-bold cursor-pointer' onClick={() => {setToggle(false)}}>X</h3>
            </div>
        <form className='w-full flex flex-col items-center justify-center my-4 space-x-2 relative'>
            <div className='flex flex-col items-center justify-center space-y-2'>
            <input placeholder='Transaction' className='px-2 py-2 border-2 border-black font-roboto font-bold tracking-wide max-[390px]:w-[150px]' value={transaction} onChange={event => setTransaction(event.target.value)}></input>
            <input placeholder='Price' className={price  === 0 ? 'px-2 py-2 border-black border-2 font-roboto text-gray-400 font-bold tracking-wide max-[320px]:w-[150px]'   : 'px-2 py-2 border-black border-2 font-roboto font-bold tracking-wide max-[320px]:w-[150px]'} value={price} onChange={event => setPrice(event.target.value)}></input>
            <button className='w-full py-1 bg-gray-900 text-white font-roboto font-bold' onClick={handleClick}>Add</button>
            </div>
        </form>
      </Modal>
    </motion.div>
  ) 
}

export default ExpenseTrackerSystem