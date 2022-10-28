import { useEffect, useState } from 'react';

import fStyle from '../cssModules/formss.module.css';

export const Forms = () =>{

    // let body = `Dolore tempor nostrud tempor nisi laboris. Dolore tempor anim ullamco 
    // excepteur veniam proident eu velit Lorem. Sunt ea in et eu aliqua elit 
    // occaecat ex ex nisi est voluptate cupidatat.`;
    const submitForm = (event)=>{
        event.preventDefault()
        alert('submitted')
        console.log(title,body,userId)
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                  title,body,userId
                }),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
                .then((response) => response.json())
                .then((json) => console.log(json));
    }
    const [title,setName] = useState('');
    const [body, setDesc] = useState('');
    const [userId,setFile] = useState('');

    return (
        <form onSubmit={submitForm}>
            <div>
                <label className={fStyle.label}>Title</label>
                <input type="text" value={title}  onChange={(event)=>{setName(event.target.value)}} />    
            </div>
            <div>
                <label className={fStyle.label}>Description</label>
                <textarea value={body} rows="4" cols="10" onChange={(event)=>{setDesc(event.target.value)}} >
                    
                </textarea>
            </div>
            <div>
                <label className={fStyle.label}>Attachment</label>
                <input type="text" value={userId} onChange={(event)=>{setFile(event.target.value)}} />    
            </div>
        <button type="submit">Submit</button>
        </form>

    )
}