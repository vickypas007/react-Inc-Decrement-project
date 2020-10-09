import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navBar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  constructor() {
    super();
    console.log("App.js Contructure");
  }

  componentDidMount() {
    console.log("App- Mount");
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    //counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = counterID => {
    //console.log("event handler call", counterID);
    const counters = this.state.counters.filter(x => x.id !== counterID);
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    console.log("app -render");
    return (
      <React.Fragment>
        <Navbar
          totalCounter={this.state.counters.filter(x => x.value > 0).length}
        />
        ;
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
