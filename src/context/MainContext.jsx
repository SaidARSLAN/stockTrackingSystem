import axios from "axios";
import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext();



export const Provider = ({children}) => {
    const [companiesList, setCompaniesList] = useState([]);
    const [currentCompany,setCurrentCompany] = useState([]);
    

    const getCompaniesNames = async () => {
        const request = await axios.get("https://financialmodelingprep.com/api/v3/financial-statement-symbol-lists?apikey=4c824916585e48358ff4037bef8ae1b6");
        setCompaniesList(request.data);
    }  

    const getCompanyInfo = async () => {
        const request = await axios.get("https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=4c824916585e48358ff4037bef8ae1b6");
        setCurrentCompany(request.data);
    }
    useEffect(() => {
        getCompaniesNames();
        getCompanyInfo();
        console.log(currentCompany);
    },[])

    return (
        <GlobalContext.Provider value={{companiesList}}>
            {children}
        </GlobalContext.Provider>
    )
}


export default GlobalContext;