import React, { useEffect, useState } from 'react'
import { Accordion } from 'react-bootstrap'
import Tag3 from '../tag3/Tag3'
import './kpi3.css'

const Kpi3 = (props) => {

  const [more,setMore] = useState(false)


  // eslint-disable-next-line react-hooks/exhaustive-deps


  return (
    <>
        <Accordion defaultActiveKey={['0']} alwaysOpen className='accordion'>
            <Accordion.Item eventKey="0" className="accordion-item" >
                <Accordion.Header className="accordion-Header">{props?.title}</Accordion.Header>
                <Accordion.Body className={!more ? "accordion-body" : "accordion-body active"} >
                    <Tag3 options={props?.options} idTitle={props?.title} />
                </Accordion.Body>
                    <h6 className='see-more' onClick={()=> setMore(!more)}> {!more ?"See More" : "See Less"}</h6>
            </Accordion.Item>
        </Accordion>
        
    </>
  )
}

export default Kpi3