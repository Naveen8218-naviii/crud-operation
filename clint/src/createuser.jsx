import React,{useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Createuser = () => {

const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[age,setAge]=useState("");
const navigate=useNavigate()



const submit=(e)=>{
e.preventDefault()
axios.post("http://localhost:4000/createuser", {
  name: name,
  email: email,
  age: age
})
.then(result => console.log(result))
 navigate('/')
.catch(err => console.log(err));

}

    return (
      <div className='bg-blue-500 h-screen flex justify-center items-center'>
        <div className='bg-white h-[350px] w-[650px] flex flex-col gap-[10px] p-5 rounded-lg'>
  <h1 className='text-4xl font-semibold'>Add User</h1>

  
  
  <form onSubmit={submit}>
  <div> 
  <label htmlFor="">Name</label> <br />
  <input type="text" name="name" id="" className='border border-black w-full'  
  onChange={(e)=>{setName(e.target.value)}}/>
</div>

<div>
<label htmlFor="">Email</label><br />
<input type="text" name="email" id="" className='border border-black w-full' 
 onChange={(e)=>{setEmail(e.target.value)}} />
</div>

<div>
<label htmlFor="">Age</label><br />
<input type="number" name="age" id="" className='border border-black w-full'  
onChange={(e)=>{setAge(e.target.value)}}/>
</div>

<button className='bg-green-800 w-[110px] h-[30px]'>Create</button>

</form>
      </div>
      
    </div>
  )
}

export default Createuser
