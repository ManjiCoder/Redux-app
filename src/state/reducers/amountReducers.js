// Reducers can be many

const reducer = (state = 0, action) => {
  if (action === "deposite") {
    return state + payload;
  } else if (action === "withdraw") {
    return state - payload;
  } else {
    return state;
  }
};

export default reducer;
