import React from "react";
import { connect } from "react-redux";
import CalcButton from "./button";
import { numericClick, opsClick } from "../actions/index";

const mapStateToProps = (state) => {
  return {
    op1: state.op1,
    op2: state.op2,
    output: state.output,
    opt: state.opt,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    numericClick: (numeric) => dispatch(numericClick(numeric)),
    opsClick: (opt) => dispatch(opsClick(opt)),
  };
}

const _BasicButtons = (props) => {
  return (
    <div className="calc-buttons col-lg-5">
      <div className="buttons-row">
        <div className="buttons-col">
          <CalcButton
            label="="
            type="ops"
            handleButtonClick={() => props.opsClick("=")}
          />
        </div>
        <div className="buttons-col">
          <CalcButton
            label="."
            handleButtonClick={() => props.numericClick(".")}
          />
        </div>
        <div className="buttons-col-0">
          <CalcButton
            label="0"
            handleButtonClick={() => props.numericClick("0")}
            type="zero"
          />
        </div>
      </div>
      <div className="buttons-row">
        <div className="buttons-col">
          <CalcButton
            label="+"
            type="ops"
            handleButtonClick={() => props.opsClick("+")}
          />
        </div>
        <div className="buttons-col">
          <CalcButton
            label="3"
            handleButtonClick={() => props.numericClick("3")}
          />
        </div>
        <div className="buttons-col">
          <CalcButton
            label="2"
            handleButtonClick={() => props.numericClick("2")}
          />
        </div>
        <div className="buttons-col">
          <CalcButton
            label="1"
            handleButtonClick={() => props.numericClick("1")}
          />
        </div>
      </div>
      <div className="buttons-row">
        <div className="buttons-col">
          <CalcButton
            label="-"
            type="ops"
            handleButtonClick={() => props.opsClick("-")}
          />
        </div>
        <div className="buttons-col">
          <CalcButton
            label="6"
            handleButtonClick={() => props.numericClick("6")}
          />
        </div>
        <div className="buttons-col">
          <CalcButton
            label="5"
            handleButtonClick={() => props.numericClick("5")}
          />
        </div>
        <div className="buttons-col">
          <CalcButton
            label="4"
            handleButtonClick={() => props.numericClick("4")}
          />
        </div>
      </div>
      <div className="buttons-row">
        <div className="buttons-col">
          <CalcButton
            label="*"
            type="ops"
            handleButtonClick={() => props.opsClick("*")}
          />
        </div>
        <div className="buttons-col">
          <CalcButton
            label="9"
            handleButtonClick={() => props.numericClick("9")}
          />
        </div>
        <div className="buttons-col">
          <CalcButton
            label="8"
            handleButtonClick={() => props.numericClick("8")}
          />
        </div>
        <div className="buttons-col">
          <CalcButton
            label="7"
            handleButtonClick={() => props.numericClick("7")}
          />
        </div>
      </div>
      <div className="buttons-row">
        <div className="buttons-col">
          <CalcButton
            label={"/"}
            type="ops"
            handleButtonClick={() => props.opsClick("/")}
          />
        </div>
        <div className="buttons-col">
          <CalcButton
            label="%"
            type="tool"
            handleButtonClick={() => props.opsClick("%")}
          />
        </div>
        <div className="buttons-col">
          <CalcButton
            label="p/m"
            type="tool"
            handleButtonClick={() => props.opsClick("p/m")}
          />
        </div>
        <div className="buttons-col">
          <CalcButton
            label="C"
            type="tool"
            handleButtonClick={() => props.opsClick("C")}
          />
        </div>
      </div>
    </div>
  );
};

const BasicButtons = connect(null, mapDispatchToProps)(_BasicButtons);
export default BasicButtons;
