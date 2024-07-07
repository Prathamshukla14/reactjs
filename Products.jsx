import React, { useState } from 'react'

function Products() {
  const [a, b] = useState(false);
  return (
    <div className='w-full h-60 bg-zinc-900 text-white'>
      <h5 className={`${a === false ? "text-red-800" : "text-blue-800"}`}>{a === false ? "hello" : "hey"}</h5>
      <button onClick={()=>b(!a)}>change</button>
      
    </div>
    
  )
}

export default Products