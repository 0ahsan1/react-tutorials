import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Create =()=>{
        const [name,setName]=useState('')
        const [email,setEmail]=useState('')
        const header = {"Access-Control-Allow-Origin":"*"}
        const route = useNavigate()
        function submitHandler(event) {
            event.preventDefault();
            axios.post('https://635b7ff5aa7c3f113dbe3780.mockapi.io/crud/crud',
            {
                name,
                email
            },
            header
            )
            .then(res=>{
                setName('')
                setEmail('')
                setTimeout(()=>{
                    route('/')
                },500)
            })
            .catch(err=>console.log(err))
        }
    return (
        <form>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
                    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <button type="submit" className="btn btn-primary" onClick={(e)=>submitHandler(e)}>Submit</button>
        </form>
    )
}