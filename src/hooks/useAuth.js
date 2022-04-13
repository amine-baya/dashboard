import React, { useContext } from 'react'
import UserInfo2 from '../context/UserInfo2'

const useAuth = () => {
  return useContext(UserInfo2)
}

export default useAuth