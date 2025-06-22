import React from 'react'
import Card from './Card'

const Cards = ({users,hendleRemove}) => {
  
  return (
    <div className='w-full h-72 max-h-72  p-4  flex justify-center gap-4 flex-wrap overflow-auto'>
       {users.map((item,index)=><Card key={index} index={index} hendleRemove={hendleRemove} user={item} />)}
     
    </div>
  )
}

export default Cards