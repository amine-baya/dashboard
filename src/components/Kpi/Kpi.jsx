import React from 'react'
import { Accordion } from 'react-bootstrap'
import Tag from '../tag/Tag'
import './kpi.css'

const Kpi = (props) => {
  
  return (
    <>
        <Accordion defaultActiveKey={['0']} alwaysOpen className='accordion'>
            <Accordion.Item eventKey="0" className="accordion-item" >
                <Accordion.Header className="accordion-Header">{props.title}</Accordion.Header>
                <Accordion.Body className="accordion-body" >
                    <Tag options={props.options} identifier={props.identifier} />
                    <h6 className='see-more'>See More</h6>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        
    </>
  )
}

export default Kpi