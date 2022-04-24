import  { useContext } from 'react'
import UserInfo from '../context/UserInfo'

const useAuth = () => {
  return useContext(UserInfo)
}

export default useAuth