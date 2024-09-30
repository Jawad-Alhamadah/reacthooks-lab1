import React from 'react'

function Button(props) {
  return (
   
       <button className='text-white text-2xl dark:text-black dark:bg-lime-500' onClick={()=>props.trigger()}>{props.text}</button>
 
  )
}

export default Button
