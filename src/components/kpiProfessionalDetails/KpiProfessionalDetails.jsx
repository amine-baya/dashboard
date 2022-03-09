import React from 'react'
import { Accordion } from 'react-bootstrap'
import RadioChoice from '../radioChoice/RadioChoice'
import './kpiProfessionalDetails.css'

const KpiProfessionalDetails = (props) => {
  return (
    <>
    <Accordion defaultActiveKey={['0']} alwaysOpen className='accordion'>
        <Accordion.Item eventKey="0" className="accordion-item" >
            <Accordion.Header className="accordion-Header">{props.title}</Accordion.Header>
            <Accordion.Body className="accordion-body professionalDetails_accordion-body ">
                <RadioChoice options={props.options} identifier={props.identifier} />
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    
</>
  )
}

export default KpiProfessionalDetails