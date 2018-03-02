
import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Finish from './components/Finish';
import Start from './components/Start';
import Test1 from './components/Test1';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>BobaScript</h1>
        </header>
        <Router>
          <div className="App-body">
            <Route exact path="/" component={Start}/>
            <Route path="/test1" component={Test1}/>
            <Route path="/finish" component={Finish}/>
          </div>
        </Router>
        <footer className="App-footer">
          <h3>Copyrights to Fran & Friends</h3>
        </footer>
      </div>
    );
  }
}

export default App;
