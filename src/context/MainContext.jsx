import axios from "axios";
import { createContext, useState} from "react";

const GlobalContext = createContext();



export const Provider = ({children}) => {
    const [currCompanyInfos, setCurrCompanyInfos] = useState([])

    const sendCompanyValue = async (value) =>{
        const request = await axios.get(`https://financialmodelingprep.com/api/v3/profile/${value}?apikey=4c824916585e48358ff4037bef8ae1b6`);
        setCurrCompanyInfos(request.data[0])
    }

    return (
        <GlobalContext.Provider value={{sendCompanyValue,currCompanyInfos}}>
            {children}
        </GlobalContext.Provider>
    )
}


export default GlobalContext;