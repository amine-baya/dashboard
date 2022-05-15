import axios from "axios";
import { createContext ,useState} from "react";
import { useEffect } from "react";


const UserInfo= createContext()
export const UserInfoProvider = ( {children}) => {


    const [userInfo,setUserInfo] = useState()
    const [personalData,setPersonalData] = useState([])
    const storageLocalData = localStorage.getItem('personalData') && JSON.parse(localStorage.getItem('personalData')) 
    const [select1 ,setSelect1] = useState(storageLocalData?.industries?.length > 0 ? storageLocalData?.industries[0].subcategory : [])
    const [select2 ,setSelect2] = useState(storageLocalData?.portfolio_services?.length > 0 ? storageLocalData?.portfolio_services[0].subcategory : [])
    const [select3 ,setSelect3] = useState(storageLocalData?.skills?.length > 0 ? storageLocalData?.skills[0].subcategory : [])
    const [long, setLong] = useState([])
    const [many, setMany] = useState([])
    const [level, setLevel] = useState([])
    const [need, setNeed] = useState([])
    const [web,setWeb] = useState([])
    const [mobile,setMobile] = useState([])
    const [dataSience,setDataSience] = useState([])
    const [publicRelations,setPublicRelations] = useState([])
    const [verifiedEmailShow, setVerifiedEmailModalShow] = useState(false);
    const [verifyEmailShow, setVerifyEmailModalShow] = useState(false);
    const [dashbordEdit, setDashbordEdit] = useState(false)
    const [data, setData] = useState([])
    const [kips, setKips] = useState([])


    useEffect(()  =>  {
        setUserInfo(localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : [])
   
      }, [])

      useEffect(()  =>  {

        if (userInfo) {  
     
          const config = {
              headers: {
               'Content-Type' : 'application/json',
               'Accept' : 'application/json',
                Authorization: ` Bearer ${userInfo?.token}`,
              },
            }
           axios.get('https://toptal.ibrcloud.com/api/v1/user/get-user-information', config).then(res =>{      
            setPersonalData(res.data)    
          }).catch(err =>{
              console.err("must verify the url");
          })
        }
   
       
    }, [userInfo, dashbordEdit])


useEffect(() => {
  
  data?.options?.map(el => kips.push({
    options: el.name,
      subcategory: [],
      identifier: el.identifier
    }))
    
  }, [data])



    return <UserInfo.Provider 
              value={{userInfo,kips, setKips, data, setData, setUserInfo,personalData,setPersonalData, select1 ,
                    setSelect1,select2 ,setSelect2,select3,setSelect3,verifyEmailShow,setVerifyEmailModalShow,verifiedEmailShow,
                     setVerifiedEmailModalShow,long, setLong, many, setMany, level, setLevel, need, setNeed,
                    web,setWeb,mobile,setMobile,dataSience,setDataSience,publicRelations,setPublicRelations,dashbordEdit, setDashbordEdit}}>

          {children}
    </UserInfo.Provider>
}

export default UserInfo