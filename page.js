"use client"
import React, { useState } from 'react'
import Header from '@/Components/Header'

const page = ()=> {
  const[a, b]=  useState(45)
  return (
    <div>
      {/* <h1> my marks {a}</h1> */}
      {/* <button onClick={()=>{b(4)}} className='bg-slate-950 text-white rounded-md text-xs'>real marks</button>  */}
      <Header  user={a}/>
       </div>
  )
}

export default page