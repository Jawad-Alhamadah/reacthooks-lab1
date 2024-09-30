import React, { useState } from 'react'

function Calc() {
    let[valueOne,setValueOne] = useState(0)
    let[valueTwo,setValueTwo] = useState(0)
    let[result,setResult] = useState(0)

  return (
    <div>
        <div className='flex p-5 text-center'>

        <div>
            <h1>{valueOne}</h1>
            <div className='flex p-2 space-x-1 '>
                 <button onClick={()=>setValueOne(valueOne+1 )}>+</button>
                 <button onClick={()=>setValueOne(valueOne-1 )}>-</button>
            </div>
            
        </div>
        <div>
            <h1>{valueTwo}</h1>
            <div className='flex p-2 space-x-1  '>
                 <button onClick={()=>setValueTwo(valueTwo+1 )}>+</button>
                 <button onClick={()=>setValueTwo(valueTwo-1)}>-</button>
            </div>
            
        </div>
        </div>
       
       
        <div className='p-5 space-x-1 '>
            <button onClick={()=>setResult(valueOne+valueTwo)}>+</button>
            <button onClick={()=>setResult(valueOne-valueTwo)}>-</button>
            <button onClick={()=>setResult(valueOne*valueTwo)}>*</button>
            <button onClick={()=>setResult(valueOne%valueTwo)}>%</button>

        </div>
       <div className='text-2xl '>
        {result}
       </div>
    </div>

    
  )
}

export default Calc
