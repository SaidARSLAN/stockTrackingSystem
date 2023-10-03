import React, { useContext, useEffect, useReducer, useState } from 'react'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import GlobalContext from '../context/MainContext';
const initialValue = 0;

const companies = [
    {"name":"APPLE","value":"AAPL"},
    {"name":"TESLA","value":"TSLA"},
    {"name":"Microsoft","value":"MSFT"},
    {"name":"NVDIA","value":"NVDA"},
    {"name":"AMAZON","value":"AMZN"}
]

const reducer = (state,action) => {
    switch (action) {
        case "increment" :
            if (state < companies.length - 1) {
                return state + 1
            }
            else {
                return  0
            }
        case "decrement" :
            if (state > 0) {
                return state - 1
            }
            else {
                return companies.length - 1
            }
        default :
            return 0
    }
}

const TopFiveCompanies = () => {

    const {sendCompanyValue,currCompanyInfos} = useContext(GlobalContext)
    const [count,dispatch] = useReducer(reducer,initialValue);
    const [currCompany, setCurrCompany] = useState(companies[count].value);
    const [toggle,setToggle] = useState(false);


    useEffect(() => {
        setCurrCompany(companies[count].value)
        sendCompanyValue(currCompany);
    },[count])
    useEffect(() => {
        sendCompanyValue(currCompany);
    },[currCompany])
    
    return (
    <div className='flex flex-col items-center justify-center w-full px-12 my-12 lg:flex-row'>
        <div className='lg:flex flex-col space-y-4 w-1/3 hidden'>
            {companies.map((company) => {
                return <button className='text-white text-2xl border-2 px-4 py-4 flex items-center justify-start customBG font-roboto font-bold tracking-widest rounded-lg' onClick={() => setCurrCompany(company.value)}>{company.name}</button>
            })}
        </div>
        <div className='flex space-x-12 items-center justify-center lg:hidden'>
            <div className='flex items-center justify-center'>
                <button onClick={() => dispatch("decrement font-bold tracking-widest")}><IoIosArrowBack size={35} color='white'/></button>
            </div>
            <div className='flex items-center justify-center w-10'>
                <h3 className='text-xl font-roboto text-white font-bold'>{companies[count].name}</h3>
            </div>
            <div className='flex items-center justify-center'>
                <button onClick={() => dispatch("increment")}><IoIosArrowForward size={35} color='white'/></button>
            </div>
        </div>
            <div className='flex w-full flex-col justify-between items-center border-2 py-4 px-12 my-8 customBG hover:bg-gray-600 cursor-pointer lg:w-2/3 lg:ml-24 rounded-lg' onClick={() => setToggle(!toggle)}>
            <div className='flex w-full items-center justify-between'>
            <div className='flex items-center justify-center space-x-2'>
            <img src={currCompanyInfos.image} className='w-10'/>
            <h1 className='text-white font-roboto font-bold'>{currCompanyInfos.companyName}</h1>
            </div>
            <div className='flex items-center justify-center'>
            <p className='flex text-green-500'>{currCompanyInfos.price} $</p>
            </div>
            </div>
            <div className='w-full flex flex-col justify-center my-4'>
            <p className='text-xs text-white font-roboto'>{currCompanyInfos.ipoDate}</p>
            <p className='text-white font-roboto font-bold my-1'>{currCompanyInfos.ceo}</p>
            <p className={toggle ? 'max-h-96 text-white overflow-auto duration-200 customBG px-4 py-4 font-roboto text-xs my-4' :'h-0 lg:h-72 lg:text-white lg:overflow-auto overflow-hidden'}>{currCompanyInfos.description}</p>
            </div>
            </div>
        </div>
  )
}

export default TopFiveCompanies