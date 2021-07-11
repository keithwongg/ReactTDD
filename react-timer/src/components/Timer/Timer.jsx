import React, { Component } from 'react';
import './Timer.css';
import TimerButton from '../TimerButton/TimerButton';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 25,
      seconds: 0,
      isOn: false
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  startTimer() {
    this.setState((state, props) => {return {isOn: true}});
  }

  stopTimer() {
    this.setState((state, props) => {return {isOn: false}});
  }

 resetTimer() {
    this.stopTimer();
    this.setState((state, props) => {
        return {
            minutes: 25,
            seconds: 0,
        }
    });
  }

  render = () => {
      return (
        <div className="timer-container">
            <div className="time-display"></div>
            <div className="time-button-container">
                <TimerButton className="start-timer" buttonAction={this.startTimer} buttonValue={"Start"}/>
                <TimerButton className="stop-timer" buttonAction={this.stopTimer} buttonValue={"Stop"}/>
                <TimerButton className="reset-timer" buttonAction={this.resetTimer} buttonValue={"Reset"}/>
            </div>
        </div>
      );
  };
}

export default Timer;