import React from "react";
import "../css/buttons.css";

const getLabel = (lbl) => {
  switch (lbl) {
    case "/":
      return "\u00F7";

    case "*":
      return "\u00D7";

    case "p/m":
      return (
        <span className="plus-minus">
          <sup>+</sup>/<sub>-</sub>
        </span>
      );

    default:
      return lbl;
  }
};

const getSuperscripted = (lbl) => {
  let sup = 0;
  let sub = 0;
  switch (lbl) {
    case "2nd":
      sup = 2;
      break;
    case "log10":
      sub = 2;
      break;
    case "10x":
    case "ex":
    case "xy":
    case "x3":
    case "x2":
      sup = 1;
      break;
    case "pi":
      return "\u03C0";
    case "3/x":
      return (
        <span className="y-root-x">
          <sup>3</sup>&#x221A;x
        </span>
      );
    case "2/x":
      return (
        <span className="y-root-x">
          <sup>2</sup>&#x221A;x
        </span>
      );
    case "y/x":
      return (
        <span className="y-root-x">
          <sup>y</sup>&#x221A;x
        </span>
      );
    case "1/x":
      return (
        <span>
          <sup>1</sup>/<sub>x</sub>
        </span>
      );
  }

  if (sup === 0 && sub === 0) return lbl;
  if (sup > 0) {
    let supPart = lbl.slice(sup * -1);
    return (
      <span>
        {lbl.slice(0, lbl.length - sup)}
        <sup>{supPart}</sup>
      </span>
    );
  } else {
    let subPart = lbl.slice(sub * -1);
    return (
      <span className="log-10">
        {lbl.slice(0, lbl.length - sub)}
        <sub>{subPart}</sub>
      </span>
    );
  }
};

const getClass = (type) => {
  switch (type) {
    case "ops":
      return "calc-button-ops";

    case "tool":
      return "calc-button-tool";

    case "sci":
      return "calc-button-sci";

    case "zero":
      return "calc-button-0";
  }
};

const CalcButton = (props) => {
  let lbl;

  return (
    <button
      className={props.type ? getClass(props.type) : "calc-button"}
      onClick={() =>
        typeof props.handleButtonClick === "undefined"
          ? ""
          : props.handleButtonClick(props.label)
      }
    >
      {props.type !== "sci"
        ? getLabel(props.label)
        : getSuperscripted(props.label)}
    </button>
  );
};

export default CalcButton;
