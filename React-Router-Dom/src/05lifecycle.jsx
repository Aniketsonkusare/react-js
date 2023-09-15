import React, { Component, PropTypes } from 'react';


export default class Lifecycle extends Component {
    constructor(props) {
        super(props);
        this.state={counter:0}
    }

    // componentWillMount() {

    // }

    componentDidMount() {

    }

    // componentWillReceiveProps(nextProps) {

    // }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log("shouldComponentUpdate called");
        // console.log("next state",nextState);
        return true
    }

    // componentWillUpdate(nextProps, nextState) {

    // }

    componentDidUpdate(prevProps, prevState) {
        // console.log("componentDidUpdate called");
        // console.log("previous state",prevState);
        // return true
    }

    // componentWillUnmount() {

    // }

    onplus=()=>{
        this.setState({counter:this.state.counter+1})
    }

    onminus=()=>{
        this.setState({counter:this.state.counter-1})
    }

    render() {
        return (
            <>
            <div>
                <h1>number is: {this.state.counter}</h1>
                <button onClick={this.onplus}  type="button" className="btn btn-primary mx-4">Increment</button>
                <button onClick={this.onminus}  type="button" className="btn btn-danger mx-4">Decrement</button>
            </div>
            </>
        );
    }
}
