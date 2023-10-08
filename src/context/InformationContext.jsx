import { createContext, useState } from "react";




const GlobalInformationContext = createContext();

export const InformationProvider = ({children}) => {

    const [nameSurname, setNameSurname] = useState("");
    const [email,setEmail] = useState("");
    const [income, setIncome] = useState(0);
    const [trackerStep, setTrackerStep] = useState(0);
    const sendData = (data,type) => {
        if (type === "name") {
            setNameSurname(data)
            console.log(nameSurname)
        }
        else if (type === "email") {
            setEmail(data)
            console.log(email);
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