import React from 'react'
import {useForm} from 'react-hook-form'
const Forms = ({hendlFormSubmitData}) => {
  const {register,handleSubmit,reset,formState:{errors}} = useForm();
  const hendleFormSumbit = data=> {
    hendlFormSubmitData(data);
    reset();
  }
  return (
    <div className='mt-10 flex justify-center  items-center'>
      <form onSubmit={handleSubmit(hendleFormSumbit)} className='flex gap-5' action="">
        <input  {...register("name",{required:"name is required"})} placeholder='name'  className='px-2 py-1 rounded-md text-base outline-none text-md font-semibold bg-zinc-100' type="text" />
        {errors.name && <p>{errors.name.message}</p>}
        <input  {...register("email",{required:"email is required"})}placeholder='email' className='px-2 py-1 rounded-md text-base outline-none text-md font-semibold bg-zinc-100'  type="email" />
        {errors.email &&<p>{errors.email.message}</p>}
         <input {...register("image",{required:"image is required"})} placeholder='image url' className='px-2 py-1 rounded-md text-base outline-none text-md font-semibold bg-zinc-100'  type="" />
         {errors.image && <p>{errors.image.message}</p>}
        <input  className='px-2 py-1 rounded-md text-base outline-none text-md font-semibold text-white bg-blue-400' type="submit" />
      </form>
    </div>
  )
}

export default Forms