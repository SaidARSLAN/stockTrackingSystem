import { createContext, useState } from "react";




const GlobalInformationContext = createContext();

export const InformationProvider = ({children}) => {

    const [nameSurname, setNameSurname] = useState("");
    const [email,setEmail] = useState("");

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
        email
    }
    const sendIncomeData = (income) => {
        console.log(income);
    }
    return (
        <GlobalInformationContext.Provider value={{sendData,data,sendIncomeData}}>
            {children}
        </GlobalInformationContext.Provider>
    )
}




export default GlobalInformationContext;