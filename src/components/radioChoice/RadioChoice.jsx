import React, { useContext, useState } from 'react'
import { UserInfo } from '../../helpers/ContextApi'
import './radioChoice.css'

const RadioChoice = (props) => {


  const { setLong, setMany, setLevel, setNeed} = useContext(UserInfo)



   const addIndustries = (option, e) => {

    if(e.target.name === "how_long_do_you_need_professioanls_for?" ){

      setLong({
            question: "How long do you need professioanls for?",
            answer: option.name
          })

     }else if (e.target.name === "How_many_professionals_do_you_need") {

      setMany({
        question: "How many professionals do you need",
        answer: option.name
      })
      
     }else if (e.target.name === "level_of_commitments") {

      setLevel({
        question: "What level of commitments would you require for professioanls",
        answer: option.name
      })
    
     }else if (e.target.name ===  "what_do_you_need_the_professioanls_to_start") {

      setNeed({
        question: "what do you need the professioanls to start",
        answer: option.name
      })
      
    }
}
  

  return (
      
    <>
    {
      props.options.map((option)=>(
        <div className='radio_details'>
            <input onChange={(e) => addIndustries(option, e)}  type="radio" name={props.identifier} value={option.identifier} />
            <p>{option.name}</p>
        </div>
        ))
    }
    </>
  )
}

export default RadioChoice