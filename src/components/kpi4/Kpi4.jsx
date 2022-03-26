import React from 'react'
import { Accordion } from 'react-bootstrap'
import '../Kpi/kpi.css'
import Tag4 from '../tag4/Tag4'

const Kpi4 = (props) => {
  
  return (
    <>
        <Accordion defaultActiveKey={['0']} alwaysOpen className='accordion'>
            <Accordion.Item eventKey="0" className="accordion-item" >
                <Accordion.Header className="accordion-Header">{props?.title}</Accordion.Header>
                <Accordion.Body className="accordion-body" >
                    <Tag4 options={props?.options} identifier={props?.identifier} />
                    <h6 className='see-more'>See More</h6>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        
    </>
  )
}

export default Kpi4