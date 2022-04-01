import React, {useContext, useEffect, useState}  from 'react'
import { UserInfo } from '../../helpers/ContextApi'
import './tag3.css'
const Tag3 = ({options}) => {

  const {sales,setSales,marketing,setMarketing,finance,setFinance,development,setDevelopment} = useContext(UserInfo)
  
  const addIndustries = (option,e) => {
    if(option.parent === "sales" ){

        e.target.parentElement.nodeName === "BUTTON" && e.target.parentElement.classList.toggle(`active`)
        e.target.classList.toggle(`active`)
        const selectedOption = sales.find(el => el === option.identifier)
        if (selectedOption) {
          setSales(sales.filter(el => el !== option.identifier))
          }
        if (selectedOption === undefined) {
          setSales([...sales,option.identifier])
          }

    }else if (option.parent === "marketing") {

       e.target.parentElement.nodeName === "BUTTON" && e.target.parentElement.classList.toggle(`active`)
       e.target.classList.toggle(`active`)
       const selectedOption = marketing.find(el => el === option.identifier)
        if (selectedOption) {
          setMarketing(marketing.filter(el => el !== option.identifier))
          }
      
        if (selectedOption === undefined) {
          setMarketing([...marketing,option.identifier])
        }
      
    }else if (option.parent === "finance") {

       e.target.parentElement.nodeName === "BUTTON" && e.target.parentElement.classList.toggle(`active`)
       e.target.classList.toggle(`active`)
       const selectedOption = finance.find(el => el === option.identifier)
        if (selectedOption) {
          setFinance(finance.filter(el => el !== option.identifier))
          }
      
        if (selectedOption === undefined) {
          setFinance([...finance,option.identifier])
          }
      
    }else if (option.parent === "development") {

       e.target.parentElement.nodeName === "BUTTON" && e.target.parentElement.classList.toggle(`active`)
       e.target.classList.toggle(`active`)
       const selectedOption = development.find(el => el === option.identifier)
   
      if (selectedOption) {
        setDevelopment(development.filter(el => el !== option.identifier))
        }
    
      if (selectedOption === undefined) {
        setDevelopment([...development,option.identifier])
      
        }   
    }
            }
           
            
  return (
      <>
      {
        options?.map((option)=>( 
            <button key={option.identifier} className= 'tag-button' onClick={(e) => addIndustries(option, e)}>
                {option.name } <img className='img_correct' src='./images/correct.png' alt="plus"/>  <img className='img_plus' src='./images/plus.png' alt="plus" />   
            </button>
          )) 
      } 
      </>
       
   
    
  )
}

export default Tag3