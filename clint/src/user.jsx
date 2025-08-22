import React ,{useState}from 'react'
 

const User = () => {
    const [users,setUsers] = useState([{
Name:"naveen" , Email:"nc319631" , Age:25
    }])

  return (
    <div className=''>
        <div>
            <table>
                <thead className='bg-green-700 flex gap-10'>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='bg-green-400'> 
                            { users.map((user)=>{
                            return<tr> <td> {user.Name}</td>
                             <td> {user.Email}</td>
                             <td> {user.Age}</td>
                             <td><button>Edit</button> <button>Delet</button></td>
                             </tr>
                             })}
                        
                    
                </tbody>
            </table>
        </div>
      
    </div>
  )
}

export default User
