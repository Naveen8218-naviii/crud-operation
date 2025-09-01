import axios from 'axios'
import React ,{useState}from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
 

const User = () => {
    const [users,setUsers] = useState([])

    useEffect(()=>{axios.get("http://localhost:4000/")
        .then(result=>setUsers(result.data))
        .catch(err=>console.log(err))
    },[])

    const Delet=(id)=>{
        axios.delete("http://localhost:4000/deleteuser/"+id)
        .then(res=>{console.log(res)
            window.location.reload()})
        .catch(err=>console.log(err)
        )
    }


  return (
    <div className=' h-screen bg-blue-400 flex justify-center items-center flex-col'>
       <Link to="/create"><button className='bg-green-600 mr-[500px] rounded-lg p-1 font-semibold w-[100px]'>Add+</button></Link> 
            <table className='w-[600px] text-center border bg-white'>
                
                <thead className=' p-2 '>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <hr className=''/>
                <tbody className=' h-10  '> 
                            { users.map((user)=>{
                            return<tr key={user._id}> 
                            <td> {user.name}</td>
                             <td> {user.email}</td>
                             <td> {user.age}</td>
                             <td>
                                 <Link to={`/update/${user._id}`}><button className='bg-green-600 rounded-lg p-1'>Update</button></Link> 
                              <button className='bg-red-600 rounded-lg p-1' onClick={(e)=>Delet(user._id)}>Delete</button></td>
                            
                             </tr>
                             })}
                        
                    
                </tbody>
            </table>
        </div>
      
    
  )
}

export default User
