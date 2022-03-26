import React from 'react'
import { Accordion } from 'react-bootstrap'
import Tag3 from '../tag3/Tag3'
import './kpi3.css'

const Kpi3 = ({title,options}) => {

  return (
    <>
        <Accordion defaultActiveKey={['0']} alwaysOpen className='accordion'>
            <Accordion.Item eventKey="0" className="accordion-item" >
                <Accordion.Header className="accordion-Header">{title}</Accordion.Header>
                <Accordion.Body className="accordion-body" >
                    <Tag3 options={options} idTitle={title} />
                    <h6 className='see-more'>See More</h6>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        
    </>
  )
}

export default Kpi3