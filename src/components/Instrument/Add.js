import { Component } from 'react';

export class Add extends Component{
    constructor(props) {
        super(props)
        this.state={
            name:''
        }
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.onSubmit(this.state)
        this.setState({name:''})
    }
    render(){
        return (
            <>
            <input value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} />
            <button onClick={(e)=>this.handleSubmit(e)}>ADD</button>
            </>
        )
    }
}