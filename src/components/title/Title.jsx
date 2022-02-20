import React from 'react'
import './title.css'

const Title = (props) => {
  return (
    <div className="title">
        <h1 className={props.diffMargin === true &&'title_small_padding'} >{props.title}</h1>
    </div>
  )
}

export default Title