import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

function Shop() {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.amount);
  const { depositeMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div>
      <h2 className="mb-3">Deposite/Withdraw Money</h2>
      {/* <button
        className="btn btn-primary"
        onClick={() => dispatch(actionCreators.withdrawMoney(100))}
      >
        -
      </button>
      <span className="mx-2">Update Balance</span>
      <button
        className="btn btn-primary"
        onClick={() => dispatch(actionCreators.depositeMoney(100))}
      >
        +
      </button> */}
      <button
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
      </button>
    </div>
  );
}

export default Shop;
