export function numericClick(payload) {
  return { type: "APPEND_NUMERIC", payload };
}

export function opsClick(payload) {
  return { type: "OPERATOR_ACTION", payload };
}

// export function addToHistory(payload) {
//   return { type: "ADD_HISTORY", payload };
// }
