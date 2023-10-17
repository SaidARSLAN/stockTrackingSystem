import { createContext, useEffect, useState } from "react";




const GlobalInformationContext = createContext();

export const InformationProvider = ({children}) => {

    const [nameSurname, setNameSurname] = useState("");
    const [email,setEmail] = useState("");
    const [income, setIncome] = useState(0);
    const [trackerStep, setTrackerStep] = useState(0);
    useEffect(() => {
        const name = JSON.parse(localStorage.getItem('name'));
        const email = JSON.parse(localStorage.getItem('mail'));
        setEmail(email),
        setNameSurname(name);
    },[])
    const sendData = (data,type) => {
        if (type === "name") {
            setNameSurname(data)
            localStorage.setItem("name",JSON.stringify(data))
        }
        else if (type === "email") {
            setEmail(data)
            localStorage.setItem("mail",JSON.stringify(data))
        }
        else {
            console.log("Error!");
        }
    }
    const data = {
        nameSurname,
        email,
        trackerStep,
        setTrackerStep,
    }
    const sendIncomeData = (data) => {
        setIncome(data);
    }

    return (
        <GlobalInformationContext.Provider value={{sendData,data,sendIncomeData,income}}>
            {children}
        </GlobalInformationContext.Provider>
    )
}




export default GlobalInformationContext;