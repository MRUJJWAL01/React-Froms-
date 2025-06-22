import React from 'react'

const Card = ({user , hendleRemove,index}) => {

  return (
    <div className='w-52 h-full bg-zinc-100 rounded-md flex flex-col items-center p-2'>
      <div className='image h-[90px] w-[90px] rounded-full bg-zinc-200  overflow-hidden'>
       <img className='h-full w-full object-covert-' src={user.image} alt="" />
      </div>
      <h1 className='mt-2 text-xl font-semibold'>{user.name}</h1>
      <h2 className='mt-1 opacity-[0.7] text-xs font-semibold'>{user.email}</h2>
      <p className='mt-2 text-center text-xs font-semibold leading-none tracking-tight'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, dicta.</p>
      <button onClick={()=>hendleRemove(index)} className='px-3 py-1 text-xs text-white font-semibold rounded-md bg-red-600 mt-4'>Remove it</button>
    </div>
  )
}

export default Card