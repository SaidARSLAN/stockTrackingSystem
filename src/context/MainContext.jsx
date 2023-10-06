import axios from "axios";
import { createContext, useEffect, useState} from "react";

const GlobalContext = createContext();



export const Provider = ({children}) => {
    const [currCompanyInfos, setCurrCompanyInfos] = useState([])
    const companies = ["AAPL","TSLA","AMZN","WMT","MSFT"]
    const getCompany = async () =>{
            const requests = companies.map((company) => {
                console.log(company)
                return axios.get(`https://financialmodelingprep.com/api/v3/profile/${company}?apikey=4c824916585e48358ff4037bef8ae1b6`)
            });
        try {
            const responses = await axios.all(requests);
            console.log(responses)
            const data = responses.map((response) => response.data);
            setCurrCompanyInfos(data)
            console.log(currCompanyInfos);
        }
        catch (error) {
            console.log("Error fetching company data",error);
        }
    }
   
    useEffect(() => {
        getCompany();
    },[])

    return (
        <GlobalContext.Provider value={{currCompanyInfos}}>
            {children}
        </GlobalContext.Provider>
    )
}


export default GlobalContext;