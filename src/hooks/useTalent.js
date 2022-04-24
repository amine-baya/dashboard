import  { useContext } from 'react'
import TalentContextApi from '../context/TalentContextApi'

const useTalent = () => {
  return useContext(TalentContextApi)
}

export default useTalent