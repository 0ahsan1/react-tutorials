import { Component } from 'react';

import NAMES from '../../data/instrument.json';
import { Add } from './Add';
import { Edit } from './Edit';

export class List extends Component{
   isOnEdit = false;
    constructor(props){
        super(props)
        this.state={
            items : NAMES || [],
            editItem:null
        }
    }
    addItem(item){
        console.log(item)
        console.log(this.state.items)
        this.setState(
            {items: [...this.state.items,item]}
        )
    }
    deleteItem(item){
        console.log(this.state.items)
        let index = this.state.items.indexOf(item)
            this.setState(this.state.items.splice(index,1))
        }
        editItem(item){
            this.setState({
                editItem: item
            })
            this.isOnEdit  = true;
        }
        updateItem(item){

        }

render() {
    return (
        <>
       
       {
        this.isOnEdit ? <Edit item={this.state.editItem} onEdit={(item)=>this.updateItem(item)} /> : <Add onSubmit={(item)=>this.addItem(item)} />
       }

        <ul>
            {
                this.state.items.map(l=>{
                    return <li className='p-4' key={l.name}>{l.name}
                                <span className='p-4'>
                                <i onClick={()=>this.editItem(l)} className="fa fa-sharp fa-solid fa-pencil mx-2"></i>
                                <i onClick={()=>this.deleteItem(l)} className="fa fa-sharp fa-solid fa-trash mx-2"></i>
                                </span>
                            </li>
                })
            }
        </ul>
        </>
    )
 } 
}