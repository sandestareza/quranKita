import React from 'react'

function Layout({children}) {
  return (
    <div className='w-full min-h-screen bg-slate-900'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
         {children}
        </div>
    </div>
  )
}

export default Layout