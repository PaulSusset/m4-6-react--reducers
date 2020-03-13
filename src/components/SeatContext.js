import React, { useReducer } from "react";
export const SeatContext = React.createContext();

const initialState = {
  hasLoaded: false,
  bookedSeats: null,
  numOfRows: 0,
  seatsPerRow: 0
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "receive-seat-info-from-server": {
      const { bookedSeats, numOfRows, seatsPerRow } = state;
      return {
        ...state,
        hasloaded: true,
        bookedSeats,
        numOfRows,
        seatsPerRow
      };
    }
    default:
      throw new Error(`Unrecognized action: ${action.type}`);
  }
};
export const SeatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const receiveSeatInfoFromServer = data => {
    dispatch({
      type: "receive-seat-info-from-server",
      ...data
    });
    console.log(state);
  };

  return (
    <SeatContext.Provider
      value={{
        state,
        actions: {
          receiveSeatInfoFromServer
        }
      }}
    >
      {children}
    </SeatContext.Provider>
  );
};
