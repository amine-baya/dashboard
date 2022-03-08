import React, { useContext } from 'react'
import { ContextApi } from '../../helpers/ContextApi'
import './tag.css'
const Tag = (props) => {
  const {select ,setSelect} = useContext(ContextApi)

  // const [active, setactive] = useState(false)

  // const a = (option) => {
  //   const selectedOptin = select.find(el => el.identifier === option.identifier);
  //   if (selectedOptin === undefined) {
  //     setSelect([...select, option])
  //   }
  //   setactive(true)

  // }

  // const b = (item) => {
  //   const newarr = select.filter(el => el.identifier !== item.identifier)

  //   setSelect([...newarr])

  //   console.log([...newarr]);
  // }



  return (
      <>
      {/* {
        props.options.map((option)=>(
            <button className={active ? 'tag-button active' : 'tag-button'}  onClick={() => a(option)}>
           {option.name} <img src='../../images/plus.png' alt="plus" />
            </button>
          ))
      } */}

{
        props.options.map((option)=>(
            <button >
           {option.name} <img src='../../images/plus.png' alt="plus" />
            </button>
          ))
      }
      </>
       
   
    
  )
}

export default Tag