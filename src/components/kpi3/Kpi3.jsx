import React, { useState } from 'react'
import { Accordion } from 'react-bootstrap'
import Tag3 from '../tag3/Tag3'
import './kpi3.css'

const Kpi3 = (props) => {

  const [noOfElement,setNoOfElement] = useState(1)
  const [more,setMore] = useState(false)

  const show = ()=>{
    setMore(!more)
    
    if (more === false){
  
      setNoOfElement(props.length)
    }else{
      setNoOfElement(1)

    }
  }
  const slice = props?.options.slice(0,noOfElement)

  return (
    <>
        <Accordion defaultActiveKey={['0']} alwaysOpen className='accordion'>
            <Accordion.Item eventKey="0" className="accordion-item" >
                <Accordion.Header className="accordion-Header">{props?.title}</Accordion.Header>
                <Accordion.Body className="accordion-body" >
                    <Tag3 options={slice} idTitle={props?.title} />
                    <h6 className='see-more' onClick={()=>show()}> {!more ?"See More" : "See Less"}</h6>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        
    </>
  )
}

export default Kpi3