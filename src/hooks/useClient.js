import  { useContext } from 'react'
import ClientContextApi from '../context/ClientContextApi'

const useClient = () => {
  return useContext(ClientContextApi)
}

export default useClient