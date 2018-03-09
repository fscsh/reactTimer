import React, { Component } from 'react';


export default class StopWatch extends Component{
    constructor(props) {
        super(props);
        this.state = {
            elapsedTime: 0,
            isRunning: false,
            intervalFunc: '',
            timeArr:[]
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
            timeArr: [...this.state.timeArr, this.state.elapsedTime],
            elapsedTime: 0,
            isRunning: false
        });
    }



    render() {
        return (
            <div>
                <h1 className = "header">Timer</h1>
                <div className ='contain'>
                    {
                    this.state.isRunning ? <button className ="button" id = 'startbutton' onClick={this.clickPause}>PAUSE</button>
                    : <button className ="button" id = 'startbutton' onClick={this.clickStart}>START</button>
                    }
                    <button className = "button"  id = 'resetbutton' onClick={this.clickReset}>RESET</button>
                </div>

                <div className = 'elapsedTime'>
                    <h2>elapsedTime: {this.state.elapsedTime} millisecond</h2>
                    <ul>
                        {
                        this.state.timeArr.map((t, idx) => <li key={t+idx}>{t} millisecond</li>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
