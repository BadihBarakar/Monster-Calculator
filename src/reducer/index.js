import { act } from "react-dom/test-utils";

const initialState = {
  output: "0",
  op1: "0",
  op2: "0",
  opt: "",
  opr: 1,
  history: [],
  curr_opt: [],
};

function rootReducer(state = initialState, action) {
  if (action.type === "APPEND_NUMERIC") {
    if (state.opt === "") {
      return Object.assign({}, state, {
        output:
          state.output == 0
            ? action.payload
            : state.output.concat(action.payload),
        op1: state.op1 == 0 ? action.payload : state.op1.concat(action.payload),
        opr: 1,
      });
    } else {
      if (state.output != 0 && state.op1 == 0) {
        return Object.assign({}, state, {
          op1: state.output,
          output: action.payload,
          op2: action.payload,
          opr: 2,
        });
      } else {
        return Object.assign({}, state, {
          output:
            state.output == 0
              ? action.payload
              : state.output.concat(action.payload),
          op2:
            state.op2 == 0 ? action.payload : state.op1.concat(action.payload),
          opr: 2,
        });
      }
    }
  } else if (action.type === "OPERATOR_ACTION") {
    if (action.payload === "C") {
      return Object.assign({}, state, {
        output: "0",
        op1: "0",
        op2: "0",
        opt: "",
        opr: 1,
      });
    }
    if (state.opt === "" || state.opt === "=") {
      // add operator...
      let { op1, op2, opt, opr, output } = state;
      let operation = [...state.curr_opt];

      switch (action.payload) {
        case "p/m":
          if (opr === 1) {
            console.log("Opr is 1");
            if (op1 != 0) {
              console.log(eval(op1 + " * -1").toString());
              output = eval(op1 + " * -1").toString();
              op1 = output;
            } else {
              console.log(eval(output + " * -1").toString());
              output = eval(output + " * -1").toString();
            }
          } else {
            console.log("Opr is 2");
            if (op2 != 0) {
              console.log(eval(op2 + " * -1").toString());
              output = eval(op2 + " * -1").toString();
              op2 = output;
            }
          }
          operation = [...state.curr_opt];
          operation.push(output);
          operation.push(action.payload);
          return Object.assign({}, state, {
            output,
            op1,
            op2,
            opt,
            opr,
            curr_opt: operation,
          });
          break;
        case "%":
          output = eval(output + " / 100").toString();
          op1 = output;
          op2 = "0";
          opt = "";

          operation = [...state.curr_opt];
          operation.push(output);
          operation.push(action.payload);

          return Object.assign({}, state, {
            output,
            op1,
            op2,
            opt,
            opr: 1,
            curr_opt: operation,
          });
          break;
        default:
          operation = [...state.curr_opt];
          operation.push(state.output);
          operation.push(action.payload);

          return Object.assign({}, state, {
            output: "0",
            op1: state.output,
            op2: "0",
            opt: action.payload,
            opr: 1,
            curr_opt: operation,
          });
      }
    } else {
      let operation;
      if (state.op1 == 0 && state.op2 == 0) {
        let op1 = state.op1;
        let op2 = state.op2;
        let opt = state.opt;
        let output = 0;

        if (action.payload === "%") {
          output = eval((op1 == 0 ? state.output : op1) + " / 100").toString();
          op1 = output;
          op2 = "0";
          opt = "";

          operation = [...state.curr_opt];
          operation.push(state.output);
          operation.push(action.payload);

          return Object.assign({}, state, {
            output,
            op1,
            op2,
            opt,
            opr: 1,
            curr_opt: operation,
          });
        }
        return Object.assign({}, state, {
          opt: action.payload,
        });
      }
      // perform action...
      let { op1, op2, opr, opt } = state;
      let output = 0;

      switch (action.payload) {
        case "+":
        case "-":
        case "*":
        case "/":
        case "=":
          output = eval(op1 + opt + op2).toString();
          break;
        case "%":
          output = eval((op1 == 0 ? state.output : op1) + " / 100").toString();
          break;
      }

      operation = [...state.curr_opt];
      operation.push(state.output);
      operation.push(action.payload);

      let history = [...state.history];

      if (action.payload === "=") {
        console.log("= IS PRESSED");
        operation.push(output);
        history.push(operation);
        operation = [];
      }

      return Object.assign({}, state, {
        output: output,
        op1: "0",
        op2: "0",
        opt: action.payload,
        opr: 1,
        curr_opt: operation,
        history,
      });
    }
  }
  return state;
}

export default rootReducer;
