import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    history: state.history,
    curr_opt: state.curr_opt,
  };
};

class _HistoryDisplay extends Component {
  state = {
    dispHist: false,
  };
  render() {
    return (
      <div className="history-display col-lg-12">
        <button
          className="disp-hist"
          onClick={() => {
            let dispHist = this.state.dispHist;
            dispHist = !dispHist;
            this.setState({ dispHist });
          }}
        >
          History
        </button>
        {this.state.dispHist ? (
          <div className={"history"}>
            {this.props.history.map((h) => {
              let op = "";
              h.map((o) => {
                op += " " + o;
              });
              return <div>{op}</div>;
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const HistoryDisplay = connect(mapStateToProps)(_HistoryDisplay);

export default HistoryDisplay;
