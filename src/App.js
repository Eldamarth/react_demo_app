import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ThingHolder from "./components/thingHolder";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // BIND FUNCTIONS HERE
  }

  componentDidMount() {}

  componentDescriber(props) {
    let type = this === undefined ? "Functional" : "Class";

    let universalHTML = (
      <>
        <h2>I'm a {type} Component</h2>
        <h3>My props are: {JSON.stringify(props)}</h3>
      </>
    );

    let properHTML =
      type === "Functional" ? (
        <div className="functional-component">
          <h1>My name is: {this}</h1>
          {universalHTML}
        </div>
      ) : (
        <div className="class-component">
          <h1>My name is: {this.constructor.name.toString()}</h1>{" "}
          {universalHTML}
          <h3>My State is: {JSON.stringify(this.state)}</h3>
        </div>
      );

    return properHTML;
  }

  render() {
    // DESTRUCTURE STATE HERE FOR EASY SINGLE-WORD VARIABLE REFERENCE/USE

    return (
      <div className="App">
        <header className=""></header>
        <div>{this.componentDescriber.call(this, this.props)}</div>
        <ThingHolder componentDescriber={this.componentDescriber} key={1} />
      </div>
    );
  }
}

export default App;
