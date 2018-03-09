import React, { Component } from 'react';

export default class StopWatch extends Component{
    constructor(props) {
        super(props);
        this.state = {
            elapsedTime: 0,
            isRunning: false,
            intervalFunc: ''
        }
    }

    clickStart = () => {
        this.setState({isRunning: true})

        this.intervalFunc = setInterval(() => {
            this.setState({elapsedTime: this.state.elapsedTime + 1000})
        }, 1000)
    }

    clickPause = () => {
        clearInterval(this.intervalFunc);
        this.setState({isRunning: false})
    }

    clickReset = () => {
        clearInterval(this.intervalFunc);
        this.setState({
            elapsedTime: 0,
            isRunning: false
        });
    }

    getTime = () => {
        return this.state.elapsedTime;
    }

    render() {
        return (
            <div>
                <h1>elapsedTime: {this.state.elapsedTime} millisecond</h1>
                {
                    this.state.isRunning ? <button onClick={this.clickPause}>PAUSE</button>
                    : <button onClick={this.clickStart}>START</button>
                }
                <button onClick={this.clickReset}>RESET</button>
            </div>
        )
    }
}
