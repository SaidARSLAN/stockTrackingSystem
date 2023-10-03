import axios from "axios";
import { createContext, useState} from "react";

const GlobalContext = createContext();



export const Provider = ({children}) => {
    const [currCompanyInfos, setCurrCompanyInfos] = useState([])

    const sendCompanyValue = async (value) =>{
        const request = await axios.get(`https://financialmodelingprep.com/api/v3/profile/${value}?apikey=3655fc99b3f9ae959a28d59388ed8dfc`);
        setCurrCompanyInfos(request.data[0])
    }

    return (
        <GlobalContext.Provider value={{sendCompanyValue,currCompanyInfos}}>
            {children}
        </GlobalContext.Provider>
    )
}


export default GlobalContext;