import { Component } from 'react';

export class CounterClass extends Component{
    static defaultProps = {
        startAt: 0,
        countBy: 1
    }
    constructor(props){
        super(props)
        this.state = {
            counter: props.startAt
        }
    }
     countUp() {
        this.setState({counter: this.state.counter+this.props.countBy})
    }
    countDown(){
        this.setState({counter:this.state.counter-this.props.countBy})
    }
    render(){
        return (
            <>
            <p>Start At = {this.props.startAt}</p>
            <p>Count By = {this.props.countBy}</p>
            <p>Counter = {this.state.counter}</p>
            <button className='btn btn-primary' onMouseDown={()=>this.countUp()}>Count Up</button>
            <button className='btn btn-danger' onMouseDown={()=>this.countDown()}>Count Down</button>
            </>
        )
    }
    
}