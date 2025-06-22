import React, { useState } from 'react'
import Cards from './components/Cards'
import Forms from './components/Forms'

const App = () => {
  const [users, setusers] = useState([])  

  const hendlFormSubmitData = (data)=>{
    setusers([...users, data])
  }

  const hendleRemove = (id)=>{
      setusers(()=>users.filter((item,index)=> index!= id))

  }
  return (
    <div className='w-full h-screen p-5 bg-zinc-300 flex justify-center items-center'>
      <div className='container max-auto '>
        <Cards users={users} hendleRemove={hendleRemove}  />
        <Forms hendlFormSubmitData={hendlFormSubmitData} />
      </div>
    </div>
  )
}

export default App