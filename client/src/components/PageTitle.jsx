import React from 'react'

function PageTitle({title}) {
  return (
    <div className='mt-8 mb-8 text-center bg-black p-3 rounded-lg'>
        <h1 className='text-2xl font-bold text-white' >{title}</h1>
    </div>
  )
}

export default PageTitle