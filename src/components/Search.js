import { useState, useTransition } from 'react';

import NAMES from '../data/users.json';

export const Search = ()=>{
    let [query,setQuery] = useState('')
    let [inp,setInp] = useState('')

    let [isPending,startTransition] = useTransition()
    const changeHandler = (e)=>{

        setInp(e.target.value)
        startTransition(()=>{
            setQuery(e.target.value)
        })
    }
    const filteredNames = NAMES.filter(u=>{
        return u.firstName.toLowerCase().includes(query.toLowerCase()) || u.lastName.toLowerCase().includes(query.toLowerCase())
    })
    return (
            <div>
                <div className='mt-7'>
                    <label>Search</label>
                <input  type="text" value={inp} onChange={changeHandler} />
                </div>
                
        <ul className='mt-7'>
        {isPending && 'Updating.............'}
            {
                filteredNames.map(u=>{
                    return <li key={u.id}>
                        <table>
                            <tbody>
                            <tr>
                                <td>{u.firstName}</td>
                                <td>|</td>
                                <td>{u.lastName}</td>
                            </tr>
                            </tbody>
                        </table>
                        </li>
                })
            }
        </ul>
        </div>
    )
           
}