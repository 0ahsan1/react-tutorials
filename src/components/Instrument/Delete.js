import { Component } from 'react';

export class Delete extends Component{
    constructor(props){
        super(props)
        this.state={
            item: props.item
        }
    }
    render(){
        return <button className='btn btn-danger'>D</button>
    }
    
}