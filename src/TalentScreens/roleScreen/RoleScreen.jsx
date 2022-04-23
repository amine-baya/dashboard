import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './roleScreen.css'

const RoleScreen = () => {
    const [selectedRole,setSelectedRole] = useState("isTalent")
    const {userInfo} = useAuth()

    const navigate = useNavigate()
  

    const submitRole= async()=>{
        const config = {
          headers: {
              'Content-Type': 'application/json',
              Authorization: ` Bearer ${userInfo?.token}`,
          }
      }


       axios.post('https://toptal.ibrcloud.com/api/v1/auth/role', {role:selectedRole}, config).then(res =>{
         
          if (selectedRole === "isClient") {
            navigate('/client')
          } else {
            navigate('/talent')
          }
      }).catch(err =>{
        console.log(err.response.data);
      })
        
    }

  
  return (
     

        <div className='container' id="user_role_container">
            <h2>please choose your role</h2>
            <div className='user_role_options'>
                <div className={selectedRole === "isTalent" && "selected"} onClick={()=> setSelectedRole("isTalent")}>Talent</div>
                <div className={selectedRole === "isClient" && "selected"} onClick={()=> setSelectedRole("isClient")}>Client</div>
            </div>
            <button className='large_button' onClick={()=>{submitRole()}}   >
                        Save
            </button>
        </div>

  )
}

export default RoleScreen