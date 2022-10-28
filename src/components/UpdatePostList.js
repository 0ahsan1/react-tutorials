import { useEffect, useState } from 'react';

export const UpdatePostList  = () => {
const [post, setPost] = useState([]);

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
     .then(res=> res.json())
     .then(data=>setPost(data))
     .catch(err=>console.log('err',err))
},[])


return (
    <div>
        <ul>
            {
                post.map(p=>{
                    return <li key={p.id}>{p.title}</li>
                })
            }
        </ul>
    </div>
)

}