import React ,{useState}from 'react'
import { Link } from 'react-router-dom'
 

const User = () => {
    const [users,setUsers] = useState([{
Name:"naveen" , Email:"nc319631" , Age:25
    }])

  return (
    <div className=' h-screen bg-blue-400 flex justify-center items-center flex-col'>
       <Link to="/create"><button className='bg-green-600 '>Add+</button></Link> 
            <table className=''>
                
                <thead className='bg-green-700 p-2 '>
                    <tr className='flex justify-center gap-20'>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='bg-green-400 h-10  '> 
                            { users.map((user)=>{
                            return<tr className='flex justify-center gap-20'> <td> {user.Name}</td>
                             <td> {user.Email}</td>
                             <td> {user.Age}</td>
                             <td>
                                 <Link to="/update"><button className='bg-red-600 '>Update</button></Link> 
                              <button className='bg-blue-600'>Delet</button></td>
                            
                             </tr>
                             })}
                        
                    
                </tbody>
            </table>
        </div>
      
    
  )
}

export default User
