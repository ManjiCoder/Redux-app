// Reducers can be many

export default reducer = (state = 0, action) => {
  if (action === "deposite") {
    return state + payload;
  } else if (action === "withdraw") {
    return state - payload;
  } else {
    return state;
  }
};
