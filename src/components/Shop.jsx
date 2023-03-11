import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
import { depositNote, withdrawNote } from "../store/slices/MoneySlices";
import { selectNote } from "../store/slices/NoteSlice";

function Shop() {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.money);
  const note = useSelector((state) => state.note);

  // const balance = useSelector((state) => state.amount);
  // const { depositeMoney, withdrawMoney } = bindActionCreators(
  //   actionCreators,
  //   dispatch
  // );
  const handleChangeNote = (e) => {
    dispatch(selectNote(Number.parseInt(e.target.value)));
  };
  return (
    <div>
      <h2 className="mb-3">Deposite/Withdraw Money</h2>
      <div className="container my-3" style={{ fontWeight: 500 }}>
        <span>{note === 0 ? "Select Note:" : `Selected Note: ${note}`} </span>
        <select name="amount" id="" onChange={handleChangeNote}>
          <option value={0}>--Select--</option>
          <option value={100}>100</option>
          <option value={200}>200</option>
          <option value={500}>500</option>
          <option value={2000}>2000</option>
        </select>
        {/* <div className="my-3">
          <button
            className={`btn btn-${
              note === 100 ? "primary" : "outline-primary"
            }`}
            onClick={() => dispatch(oneHundred(100))}
          >
            100
          </button>
          <button
            className={`mx-2 btn btn-${
              note === 200 ? "primary" : "outline-primary"
            }`}
            onClick={() => dispatch(twoHundred(200))}
          >
            200
          </button>
          <button
            className={`btn btn-${
              note === 500 ? "primary" : "outline-primary"
            }`}
            onClick={() => dispatch(fiveHundred(500))}
          >
            500
          </button>
          <button
            className={`mx-2 btn btn-${
              note === 2000 ? "primary" : "outline-primary"
            }`}
            onClick={() => dispatch(twoThousand(2000))}
          >
            2000
          </button>
        </div> */}
      </div>

      <button
        className="btn btn-primary"
        onClick={() => dispatch(withdrawNote(note))}
        disabled={balance <= 0}
      >
        -
      </button>
      <span className="mx-2">Update Balance</span>
      <button
        className="btn btn-primary"
        onClick={() => dispatch(depositNote(note))}
        disabled={note === 0}
      >
        +
      </button>
    </div>
  );
}

export default Shop;
