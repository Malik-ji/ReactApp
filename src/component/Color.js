import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Color() {
    const [color,setColor]=useState('pink');
    
  return (
    <body style={{backgroundColor:color}}>
       <h1 style={{fontFamily:"sans-serif"}}>Background Changer Application</h1>
        <div className='row'>
            <div className='col-md-6    '>
                
            </div>
            <div className='col-md-6'>
                
            </div>
        </div>
        <div className='row'>
            <div className='col-md-6'>
                
            </div>
            <div className='col-md-6'>
                
            </div>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
             <button onClick={()=>setColor("#0d6efd")} type="button" className="btn btn-primary d-block mx-auto">Primary</button>
<button  onClick={()=>setColor("#6c757d")} type="button" className="btn btn-secondary d-block mx-auto">Secondary</button>
<button onClick={()=>setColor("#198754")} type="button" className="btn btn-success d-block mx-auto">Success</button>
<button onClick={()=>setColor("#dc3545")} type="button" className="btn btn-danger d-block mx-auto">Danger</button>
<button  onClick={()=>setColor("#ffc107")} type="button" className="btn btn-warning d-block mx-auto">Warning</button>
</div>
    </body>
    
         
  )
}
