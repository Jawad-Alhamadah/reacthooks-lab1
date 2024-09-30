import React, { useState } from 'react'
import Button from './Button'


function Calc() {
    let[valueOne,setValueOne] = useState(0)
    let[valueTwo,setValueTwo] = useState(0)
    let[result,setResult] = useState(0)

    // let [mode,setMode] = useState('light')

    // document.documentElement.classList.toggle('dark', newTheme === 'dark');
  return (
    <div>
        <div className='flex p-5 text-center'>

        <div>
            <h1>{valueOne}</h1>
            <div className='flex p-2 space-x-1 '>
                <Button text="+" trigger={()=>setValueOne(valueOne+1 )}></Button>
                <Button text="-" trigger={()=>setValueOne(valueOne-1 )}></Button>
                
            </div>
            
        </div>
        <div>
            <h1>{valueTwo}</h1>
            <div className='flex p-2 space-x-1  '>
                <Button text="+" trigger={()=>setValueTwo(valueTwo+1 )}></Button>
                <Button text="-" trigger={()=>setValueTwo(valueTwo-1 )}></Button>
                    
            </div>
            
        </div>
        </div>
       
       
        <div className='p-5 space-x-1 flex  '>
             <Button text="+" trigger={()=>setResult(valueOne+valueTwo)}></Button>
             <Button text="-" trigger={()=>setResult(valueOne-valueTwo)}></Button>
             <Button text="*" trigger={()=>setResult(valueOne*valueTwo)}></Button>
             <Button text="%" trigger={()=>setResult(valueOne%valueTwo)}></Button>
             <div className='text-2xl '>
            {result}
            </div>
        </div>
       
    </div>

    
  )
}

export default Calc
