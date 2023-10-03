import React, { useContext, useEffect, useReducer, useState } from 'react'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import GlobalContext from '../context/MainContext';
const initialValue = 0;

const companies = [
    {"name":"APPLE","value":"AAPL"},
    {"name":"TESLA","value":"TSLA"},
    {"name":"SAMSUNG","value":"SSNLF"},
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

    useEffect(() => {
        setCurrCompany(companies[count].value)
        sendCompanyValue(currCompany);
    },[count])
    console.log(currCompanyInfos)
    return (
    <div className='flex flex-col items-center justify-center w-full'>
        <div className='flex space-x-12 items-center justify-center'>
            <div className='flex items-center justify-center'>
                <button onClick={() => dispatch("decrement")}><IoIosArrowBack size={35} color='white'/></button>
            </div>
            <div className='flex items-center justify-center w-10'>
                <h3 className='text-xl font-roboto text-white font-bold'>{companies[count].name}</h3>
            </div>
            <div className='flex items-center justify-center'>
                <button onClick={() => dispatch("increment")}><IoIosArrowForward size={35} color='white'/></button>
            </div>
        </div>
        <div>
            <h1>{currCompanyInfos.companyName}</h1>
            <img src={currCompanyInfos.image} />
        </div>
    </div>
  )
}

export default TopFiveCompanies