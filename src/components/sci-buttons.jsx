import React from "react";
import CalcButton from "./button";

const SciButtons = (props) => {
  return (
    <div className="sci-calc-buttons d-none d-lg-block col-lg-7">
      <div className="buttons-row">
        <div className="buttons-col">
          <CalcButton label="mr" type="sci" />
        </div>
        <div className="buttons-col">
          <CalcButton label="m-" type="sci" />
        </div>
        <div className="buttons-col">
          <CalcButton label="m+" type="sci" />
        </div>
        <div className="buttons-col">
          <CalcButton label="mc" type="sci" />
        </div>
        <div className="buttons-col">
          <CalcButton label=")" type="sci" />
        </div>
        <div className="buttons-col">
          <CalcButton label="(" type="sci" />
        </div>
      </div>
      <div className="buttons-row">
        <div className="buttons-col">
          <CalcButton label="10x" type="sci" />
        </div>
        <div className="buttons-col">
          <CalcButton label="ex" type="sci" />
        </div>
        <div className="buttons-col">
          <CalcButton label="xy" type="sci" />
        </div>
        <div className="buttons-col">
          <CalcButton label="x3" type="sci" />
        </div>
        <div className="buttons-col">
          <CalcButton label="x2" type="sci" />
        </div>
        <div className="buttons-col">
          <CalcButton label="2nd" type="sci" />
        </div>
      </div>
      <div className="buttons-row">
        <div className="buttons-col">
          <CalcButton label="log10" type="sci" />
        </div>
        <div className="buttons-col">
          <CalcButton label="ln" type="sci" />
        </div>
        <div className="buttons-col">
          <CalcButton label="y/x" type="sci" />
        </div>
        <div className="buttons-col">
          <CalcButton label="3/x" type="sci" />
        </div>
        <div className="buttons-col">
          <CalcButton label="2/x" type="sci" />
        </div>
        <div className="buttons-col">
          <CalcButton label="1/x" type="sci" />
        </div>
      </div>
      <div className="buttons-row">
        <div className="buttons-col">
          <CalcButton label="EE" type="sci" />
        </div>
        <div className="buttons-col">
          <CalcButton label="e" type="sci" />
        </div>
        <div className="buttons-col">
          <CalcButton label="tan" type="sci" />
        </div>
        <div className="buttons-col">
          <CalcButton label="cos" type="sci" />
        </div>
        <div className="buttons-col">
          <CalcButton label="sin" type="sci" />
        </div>
        <div className="buttons-col">
          <CalcButton label="x!" type="sci" />
        </div>
      </div>
      <div className="buttons-row">
        <div className="buttons-col">
          <CalcButton label="Rand" type="sci" />
        </div>
        <div className="buttons-col">
          <CalcButton label="pi" type="sci" />
        </div>
        <div className="buttons-col">
          <CalcButton label="tanh" type="sci" />
        </div>
        <div className="buttons-col">
          <CalcButton label="cosh" type="sci" />
        </div>
        <div className="buttons-col">
          <CalcButton label="sinh" type="sci" />
        </div>
        <div className="buttons-col">
          <CalcButton label="Rad" type="sci" />
        </div>
      </div>
    </div>
  );
};

export default SciButtons;
