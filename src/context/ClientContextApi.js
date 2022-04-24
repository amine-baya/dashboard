import { createContext ,useState} from "react";

const ClientContextApi= createContext()
export const ClientContextApiProvider = ( {children}) => {


    const [select, setSelect] = useState([])
    const [roles,setRoles] = useState("")
    const [type,setType] = useState("") 
    const [page, setPage] = useState(0);
    const [details,setDetails] = useState([])

    return  (

    <ClientContextApi.Provider value={{select, setSelect,roles,setRoles,type,setType,details,setDetails,page,setPage}}>

          {children}
    </ClientContextApi.Provider> 
    )
}

export default ClientContextApi