import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
import { depositNote, withdrawNote } from "../store/slices/MoneySlices";

function Shop() {
  const dispatch = useDispatch();

  const balance = useSelector((state) => state.money);

  const { depositeMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  // const balance = useSelector((state) => state.amount);
  // const { depositeMoney, withdrawMoney } = bindActionCreators(
  //   actionCreators,
  //   dispatch
  // );

  return (
    <div>
      <h2 className="mb-3">Deposite/Withdraw Money</h2>
      <div className="container" style={{ fontWeight: 500 }}>
        <span>Select Note: </span>
        {/* <select name="amount" id="">
          <option value="100">--Select--</option>
          <option value="100">100</option>
          <option value="100">200</option>
          <option value="100">500</option>
          <option value="100">2000</option>
        </select> */}
        <div className="my-3">
          <div className="mr-2 btn btn-outline-primary">100</div>
          <div className="mx-2 btn btn-outline-primary">200</div>
          <div className="mr-2 btn btn-outline-primary">500</div>
          <div className="mx-2 btn btn-outline-primary">2000</div>
        </div>
      </div>
      {/* <button
        className="btn btn-primary"
        onClick={() => withdrawMoney(100)}
        disabled={balance <= 0}
      >
        -
      </button>
      <span className="mx-2">
        Update Balance: <strong>{balance}</strong>
      </span>
      <button className="btn btn-primary" onClick={() => depositeMoney(100)}>
        +
      </button> */}
      <button
        className="btn btn-primary"
        onClick={() => dispatch(withdrawNote(100))}
        disabled={balance <= 0}
      >
        -
      </button>
      <span className="mx-2">
        Update Balance: <strong>{balance}</strong>
      </span>
      <button
        className="btn btn-primary"
        onClick={() => dispatch(depositNote(100))}
      >
        +
      </button>
    </div>
  );
}

export default Shop;
