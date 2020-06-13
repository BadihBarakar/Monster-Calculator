import React from "react";
import { connect } from "react-redux";
import "./App.css";
import CalcButton from "./components/button";
import "./css/layouts.css";
import SciButtons from "./components/sci-buttons";
import BasicButtons from "./components/basic-buttons";
import HistoryDisplay from "./components/history-display";

const mapStateToProps = (state) => {
  return { output: state.output };
};

class _App extends React.Component {
  handleButtonClick = (value) => {
    let op1 = this.state.op1;
    let op2 = this.state.op2;
    let opt = this.state.opt;

    if (value)
      if (opt === "") {
        op1 = op1 == 0 ? value : op1 + value;
        this.setState({ op1, output: op1 });
      }

    if (value === "=") {
      let output = eval(this.state.output);
      this.setState({ output });
      return;
    }
    // let output = this.state.output;
    // output = output == 0 ? value : output + value;

    // this.setState({ output });
  };

  displayOutput = (output) => {
    if (!output) return;
    if (output.length > 7) {
      return Number.parseFloat(output).toExponential(2);
    } else {
      return output;
    }
  };

  render() {
    return (
      <div className="container">
        <div className="calc-display col-lg-12">
          {this.displayOutput(this.props.output)}
        </div>
        <HistoryDisplay />
        <div className="calculator col-lg-12">
          <SciButtons />
          <BasicButtons />
        </div>
      </div>
    );
  }
}

const App = connect(mapStateToProps)(_App);
export default App;
