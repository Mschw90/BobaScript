import React from 'react';
import Boba from '../Boba/Boba';
import axios from 'axios';
import Question from './Question'

const BASE_URL="http://localhost:3000";


class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: null,
      boba: null,
      transpiled: null,
    };
  }

  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    this.setState({
      boba: new Boba(ctx, 250, 125, 20, "cyan")
    }, () => this.state.boba.update());
  }

  onCodeChange(e) {
    e.preventDefault();
    this.setState({
      code: e.target.value,
    });
  }

  toRight() {
    this.state.boba.moveRight();
    this.state.boba.update();
  }

  toLeft() {
    this.state.boba.moveLeft();
    this.state.boba.update();
  }

  toUp() {
    this.state.boba.moveUp();
    this.state.boba.update();
  }

  toDown() {
    this.state.boba.moveDown();
    this.state.boba.update();
  }

  onRun() {
    console.log("Runnging code: ", this.state.code);
    axios.post(BASE_URL + "/submit", {
      code: this.state.code
    })
      .then(code => {
        this.setState({
          transpiled: code,
        })
        eval(code);
      })
      .catch(e => {
        console.log(e);
      });
  }

  onSubmit() {
    console.log("Submitted code: ", this.state.code);
    axios.post(BASE_URL + "/submit", {
      code: this.state.code
    })
      .then(code => {
        console.log(code);
        this.setState({
          transpiled: code,
        })
        window.localStorage.setItem("test", this.props.match.params.number + 1);
        eval(code);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return (
      <div>
        <canvas ref="canvas" width="1000" height="500"/>
        <Question question={this.props.match.params.number}/>
        <textarea onChange={(e) => this.onCodeChange(e)} rows="10" cols="40" />

        <button onClick={() => this.onRun()}>Run Code</button>
        <button onClick={() => this.onSubmit()}>Submit Code</button>

        <div>{this.state.transpiled}</div>
      </div>
    );
  }
}

export default Test;
