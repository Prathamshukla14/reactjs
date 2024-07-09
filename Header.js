import React from 'react'

const Header = (props) => {
  return (
    <div className='h-16 bg-green-700 flex items-center justify-between' >
     <h2> {props.user}</h2>
     <div className='flex gap-6'>
        <h2>about </h2>
        <h2>career </h2>
        <h2>info </h2>
        <h2>menu </h2>
     </div>
    
    </div>

  )
}

export default Header