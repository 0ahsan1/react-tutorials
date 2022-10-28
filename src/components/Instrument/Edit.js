import { Component } from 'react';

export class Edit extends Component{
    constructor(props) {
        super(props)
        this.state=this.props.item
    }
    handleSubmit(event){
        event.preventDefault();
        // this.setState(this.state.item)
        this.props.onEdit(this.state)
    }
    render(){
        return (
            <>
            <input value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} />
            <button onClick={(e)=>this.handleSubmit(e)}>Edit</button>
            </>
        )
    }
}