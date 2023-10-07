import { createContext, useState } from "react";




const GlobalInformationContext = createContext();

export const InformationProvider = ({children}) => {

    const [nameSurname, setNameSurname] = useState("");
    const [email,setEmail] = useState("");


    const data = {
        nameSurname,
        setNameSurname,
        email,
        setEmail
    }
    return (
        <GlobalInformationContext.Provider value={{nameSurname,setNameSurname,email,setEmail}}>
            {children}
        </GlobalInformationContext.Provider>
    )
}




export default GlobalInformationContext;