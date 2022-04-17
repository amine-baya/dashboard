import React, { useState } from 'react'
import { Accordion } from 'react-bootstrap'
import '../Kpi/kpi.css'
import Tag5 from '../tag5/Tag5'

const Kpi5 = (props) => {

  const [noOfElement,setNoOfElement] = useState(3)
  const [more,setMore] = useState(false)

  const show = ()=>{
    setMore(!more)
    
    if (more === false){
  
      setNoOfElement(props.length)
    }else{
      setNoOfElement(3)

    }
  }
  const slice = props?.options?.slice(0,noOfElement)

  
  return (
    <>
        <Accordion defaultActiveKey={['0']} alwaysOpen className='accordion'>
            <Accordion.Item eventKey="0" className="accordion-item" >
                <Accordion.Header className="accordion-Header">{props?.title}</Accordion.Header>
                <Accordion.Body className="accordion-body" >
                    <Tag5 options={slice} identifier={props?.identifier} edit={props?.edit}/>
                    <h6 className='see-more' onClick={()=>show()}>{!more ?"See More" : "See Less"}</h6>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        
    </>
  )
}

export default Kpi5