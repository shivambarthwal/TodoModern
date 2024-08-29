
import React from 'react'
import "./Tag.css"
import { backIn } from 'framer-motion'
function Tag({tagName, selectTag , selected}) {

  const tagStyle = {
    Personal :{backgroundColor : "#fda821"},
    Finance :{backgroundColor : "#15d4c8"},
    Work :{backgroundColor : "#ffd12c"},
    Health :{backgroundColor : "#FFC0CB"},
    Default :{backgroundColor : "#D3D3D3"},

  }
  return (
    <button type="button" 
    className='tag' 
    style={selected ? tagStyle[tagName] : tagStyle.Default}
    onClick={()=>selectTag(tagName)}>{tagName}</button>
  )
}

export default Tag