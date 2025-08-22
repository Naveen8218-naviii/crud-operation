import React from 'react'

const Createuser = () => {
    return (
      <div className='bg-blue-500 h-screen flex justify-center items-center'>
        <div className='bg-white h-[350px] w-[650px] flex flex-col gap-[10px] p-5 rounded-lg'>
  <h1 className='text-4xl font-semibold'>Add User</h1>

  <div> 
  <label htmlFor="">Name</label> <br />
  <input type="text" name="name" id="" className='border border-black w-full'  />
</div>

<div>
<label htmlFor="">Email</label><br />
<input type="text" name="email" id="" className='border border-black w-full'  />
</div>

<div>
<label htmlFor="">Age</label><br />
<input type="number" name="age" id="" className='border border-black w-full'  />
</div>

<button className='bg-green-800 w-[110px] h-[30px]'>Create</button>
      </div>
      
    </div>
  )
}

export default Createuser
