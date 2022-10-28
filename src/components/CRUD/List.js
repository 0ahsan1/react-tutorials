import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const List =()=>{
        let [dataList,setDataList] = useState([])
        let [isDeleted,setDeleted] = useState(true)
        useEffect(()=>{
            axios.get('https://635b7ff5aa7c3f113dbe3780.mockapi.io/crud/crud')
            .then(res=>{
                setDataList([])
                setDataList(res.data)
            })
        },[])
        const route=useNavigate()         
        function deleteItem(id){
            setDeleted(false)
            axios.delete(`https://635b7ff5aa7c3f113dbe3780.mockapi.io/crud/crud/${id}`)
            .then(res=>{
                    let data = dataList.filter(x=>x.id!==res.data.id)
                    setDataList(data)
                    setDeleted(true)
            })
        }
    return (

        <>
       
        <div>
            <div className='d-flex justify-content-between m-4'>
            <h1>USER LIST</h1>
            <button className='btn btn-primary' onClick={()=>route('/create')}>Create</button>
        </div>
        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                    { dataList.map(l=>{
                        return <tr key={l.id}>
                                <td>{l.id}</td>
                                <td>{l.name}</td>
                                <td>{l.email}</td>
                                <td>
                                    <span className={isDeleted?'':'d-none'}>
                                        <i className='fa fa-pencil mx-3' onClick={()=>route('/edit')}></i>
                                        <i className={'fa fa-trash'} onClick={()=>deleteItem(l.id)}></i>
                                    </span>
                                </td>
                        </tr>
                    })}
            </tbody>
        </table>
        </div>
        </>
    )
}