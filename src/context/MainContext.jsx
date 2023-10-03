import axios from "axios";
import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext();



export const Provider = ({children}) => {
    const [companiesList, setCompaniesList] = useState([]);
    const [index,setIndex] = useState(0);


    const getCompanyInfo = async () => {
        const request = axios.get(`https://financialmodelingprep.com/api/v3/profile/${topFiveCompanies[index]}?apikey=4c824916585e48358ff4037bef8ae1b6`)
        console.log(request.data);
    }
  

    return (
        <GlobalContext.Provider value={{companiesList}}>
            {children}
        </GlobalContext.Provider>
    )
}


export default GlobalContext;