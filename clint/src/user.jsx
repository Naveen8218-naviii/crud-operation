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


  return (
    <div className=' h-screen bg-blue-400 flex justify-center items-center flex-col'>
       <Link to="/create"><button className='bg-green-600 '>Add+</button></Link> 
            <table className='w-full text-center border"'>
                
                <thead className='bg-green-700 p-2 '>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='bg-green-400 h-10  '> 
                            { users.map((user)=>{
                            return<tr key={user.id}> 
                            <td> {user.name}</td>
                             <td> {user.email}</td>
                             <td> {user.age}</td>
                             <td>
                                 <Link to={`/update/${user._id}`}><button className='bg-red-600 '>Update</button></Link> 
                              <button className='bg-blue-600'>Delet</button></td>
                            
                             </tr>
                             })}
                        
                    
                </tbody>
            </table>
        </div>
      
    
  )
}

export default User
