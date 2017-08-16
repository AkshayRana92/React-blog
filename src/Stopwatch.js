import React, { Component } from 'react';

class Stopwatch extends Component {

    secCount = 0;
    minCount = 0;
    hrCount = 0;
    constructor(props) {
        super(props);
        this.state = {hr: 0, min: 0, sec: 0, placeholder: ''};
    }

    start() {
        console.log('do u even');
        this.timerID = setInterval(
            () => this.updateTimer(),
            1000
        );
    }


    updateTimer() {
        this.togglePlaceHolder();
        if(this.secCount === 60 ){
            if((this.minCount + 1) === 60) {
                this.hrCount ++;
                this.minCount = 0;
            } else {
                this.secCount = 0;
                this.minCount ++;
            }
        } else {
            this.secCount ++;
        }
        this.setState({
            hr: this.hrCount,
            sec: this.secCount,
            min: this.minCount,
        });
    }

    togglePlaceHolder() {
        if(this.state.placeholder === '') {
            this.state.placeholder = ':';
        } else {
            this.state.placeholder = '';
        }
    }
    stop() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                <h1>{this.state.hr}:{this.state.min}:{this.state.sec}</h1>
                <button onClick={this.start}>START!</button> <button onClick={this.stop}>STAPPP!</button>
            </div>
        );
    }
}

export default Stopwatch;
