import React from 'react';

class Finish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    new Audio ("/finalSong.mp3").play()
  }
  render() {
    return (
      <div className="backgroundFinal">
        <div className="pyro">
          <div className="before"></div>
          <div className="after"></div>
        </div>
        <div className="finalText">
          <h1>CONGRATULATIONS!</h1>
          <h1>{window.localStorage.getItem("name")}</h1>
        </div>
      </div>
    );
  }
}

export default Finish;
