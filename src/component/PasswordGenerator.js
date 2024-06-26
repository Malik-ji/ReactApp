import React, { useState,useCallback, useEffect,useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
export default function PasswordGenerator() {
    var [length,setLength]=useState(8)

    var [password,setPassword]=useState(false)

    var [numberAllowed,setNumberAllowed]=useState(false)

    var [char,setChar]=useState(false);
   const passwordRef= useRef(null);
   const PasswordGenerators =useCallback(()=>{

    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numberAllowed) str+="1234567890"
      if(char) str+="!@#$%^&*()_+-={}[]|:;'<>,.?/~"
      let originalPassword="";
      for (let index = 0; index < length; index++) {
      let chars=   Math.floor( Math.random() * str.length+1)
      originalPassword+=str.charAt(chars);
      }
      setPassword(originalPassword)
      console.log(originalPassword,"assdsd")
   },[length,char,numberAllowed,setPassword]);
   const copyToClipBord=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
   },[password])
    useEffect(()=>{
      PasswordGenerators()
    },[length,char,numberAllowed,PasswordGenerators])
    
  return (

    <body style={{backgroundColor:"grey"}}>
      
    <card className='mt-10px backgroundColor:"red"'  >PasswordGenerator
        <div className='row'>
            <div className='col-md-3'>
           
              <input type='text' className="form-control" value={password} ref={passwordRef}/>
             
                </div> 
                <div className='col-md-3'>
              
                <input type='submit' value={'copy'} className='btn btn-primary' onClick={copyToClipBord}/>
                    </div> 
                <div className='col-md-6'>
              
                </div>
        </div>
        <div className='row'>
        <div className='col-md-3'>
        <input type='range' min={8} max={100} onChange={(e)=>{setLength(e.target.value)}} /><p>length : {length}</p>
        </div>
            <div className='col-md-3'>
           <input type='checkbox' defaultChecked={numberAllowed} id="numInput" onChange={()=>{
            setNumberAllowed((prev)=>!prev)
           }} /><p>Number Allowed</p>
                           </div> 
                <div className='col-md-6'>
                <input type='checkbox' defaultChecked={char} id="charInput" onChange={()=>{
            setChar((prev)=>!prev)
           }} /> <p>Character Allowed</p>
             
           </div> 
                </div>
       
    </card>     
        
    </body>
   
    )

}
