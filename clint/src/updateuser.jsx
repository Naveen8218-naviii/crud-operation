import React from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from 'axios'

const Updateuser = () => {
  const{id}=useParams()
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[age,setAge]=useState("");
const navigate=useNavigate()

 useEffect(()=>{axios.get("http://localhost:4000/getuser/"+id)
        .then(result=>{console.log(result)
      setName(result.data.name),
       setEmail(result.data.email),
        setAge(result.data.age)
      
  } )
        .catch(err=>console.log(err))
    },[])

    const Update=(e)=>{
      e.preventDefault();
axios.put("http://localhost:4000/updateuser/"+id, {
  name: name,
  email: email,
  age: age
})
.then(result => {console.log(result)
   navigate('/') })
.catch(err => console.log(err));
    }
  return (
    <div className='bg-blue-500 h-screen flex justify-center items-center'>
        <div className='bg-white h-[350px] w-[650px] flex flex-col gap-[10px] p-5 rounded-lg'>
  <h1 className='text-4xl font-semibold'>Add User</h1>
<form onSubmit={Update}>
  <div> 
  <label htmlFor="">Name</label> <br />
  <input type="text" name="name" id="" className='border border-black w-full' value={name}  onChange={(e)=>{setName(e.target.value)}} />
</div>

<div>
<label htmlFor="">Email</label><br />
<input type="text" name="email" id="" className='border border-black w-full'   value={email}   onChange={(e)=>{setEmail(e.target.value)}}/>
</div>

<div>
<label htmlFor="">Age</label><br />
<input type="number" name="age" id="" className='border border-black w-full'  value={age}  onChange={(e)=>{setAge(e.target.value)}} />
</div>
<button className='bg-green-800 w-[110px] h-[30px]'>Update</button>
</form>

      </div>
      
    </div>
  )
}



export default Updateuser
