import React, { useContext } from 'react'
import { ContextApi, UserInfo } from '../../helpers/ContextApi'
import './tag.css'
const Tag = ({options,identifier}) => {
  const {select ,setSelect} = useContext(ContextApi)
  const {web,setWeb,mobile,setMobile,dataSience,setDataSience,publicRelations,setPublicRelations} = useContext(UserInfo)


 
  const a = (option,e) => {
    
     e.target.parentElement.classList.add(`active`, `active-${option.identifier}`)

     const selectedOption = select.find(el => el.identifier === option.identifier);
     if (selectedOption === undefined) {
       setSelect([...select, {...option, class: `active-${option.identifier}`} ])
     }
/*********************************************** */
    if(option.parent === "web_development" ){
     

    
      const selectedOption = web.find(el => el === option.identifier)
      if (selectedOption) {
        setWeb(web.filter(el => el !== option.identifier))
        }
      if (selectedOption === undefined) {
        setWeb([...web,option.identifier])
        
        }

  }else if (option.parent === "mobile_development") {

 
     const selectedOption = mobile.find(el => el === option.identifier)
      if (selectedOption) {
        setMobile(mobile.filter(el => el !== option.identifier))
        }
    
      if (selectedOption === undefined) {
        setMobile([...mobile,option.identifier])
        
      }
    
  }else if (option.parent === "data_science") {

   
     const selectedOption = dataSience.find(el => el === option.identifier)
      if (selectedOption) {
        setDataSience(dataSience.filter(el => el !== option.identifier))
        }
    
      if (selectedOption === undefined) {
        setDataSience([...dataSience,option.identifier])
      
        }
    
  }else if (option.parent === "public_relations") {

    
     const selectedOption = publicRelations.find(el => el === option.identifier)
 
    if (selectedOption) {
      setPublicRelations(publicRelations.filter(el => el !== option.identifier))
      }
  
    if (selectedOption === undefined) {
      setPublicRelations([...publicRelations,option.identifier])
      
    
      }   
  }
  /************************************************ */
  }

  const b = (item,e) => {
    
    const newarr = select.filter(el => el.identifier !== item.identifier)
    setSelect([...newarr])
    e.target.parentElement.classList.remove(`active`)
    var elements = document.getElementsByClassName(e.target.parentElement.id)
    elements[0]?.classList.remove('active')

    if(item.parent === "web_development" ){
    
      setWeb(web.filter(el => el !== item.identifier))
    }else if (item.parent === "mobile_development") {

      setMobile(mobile.filter(el => el !== item.identifier))
      
      
     
   }else if (item.parent === "data_science") {
 
    
    setDataSience(dataSience.filter(el => el !== item.identifier))
      
     
   }else if (item.parent === "public_relations") {
 
    setPublicRelations(publicRelations.filter(el => el !== item.identifier))
       
   }



   
  }

  return (
      <>
      {
        options.map((option)=>(
            <button className= 'tag-button' id={option.class && option.class}>

           {option.name || option.age} <img className='img_correct' src='./images/correct.png' alt="plus"/> <img className='img_close' src='./images/close.png' alt="plus" onClick={(e) => b(option,e)} />  <img className='img_plus' src='./images/plus.png' alt="plus" onClick={(e) => a(option, e)}/>  
            </button>
          ))
      } 
      </>
       
   
    
  )
}

export default Tag