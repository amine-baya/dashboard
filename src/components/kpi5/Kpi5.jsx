import React from 'react'
import { Accordion } from 'react-bootstrap'
import '../Kpi/kpi.css'
import Tag5 from '../tag5/Tag5'

const Kpi5 = (props) => {
  
  return (
    <>
        <Accordion defaultActiveKey={['0']} alwaysOpen className='accordion'>
            <Accordion.Item eventKey="0" className="accordion-item" >
                <Accordion.Header className="accordion-Header">{props?.title}</Accordion.Header>
                <Accordion.Body className="accordion-body" >
                    <Tag5 options={props?.options} identifier={props?.identifier} />
                    <h6 className='see-more'>See More</h6>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        
    </>
  )
}

export default Kpi5