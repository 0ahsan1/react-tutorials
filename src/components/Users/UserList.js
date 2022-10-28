import { useState } from 'react';

import { UserCard } from './UserCard';

export const UserList = () =>{

    let [users,setUsers] = useState()
    useState(()=>{
        fetch('https://dummyjson.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data.users))
    },[])
return (
    <div className="row" >
        <UserCard users={users} />
    </div>
)
    
}
