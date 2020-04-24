import React, { useContext } from "react";
import styled from "styled-components";
import Tippy from "@tippyjs/react";
import seatImg from "../assets/seat-available.svg";
import { SeatContext } from "./SeatContext";

const Seat = ({ seatId, seatIndex, rowName, seat }) => {
  const {
    state: { seats }
  } = useContext(SeatContext);
  return (
    <Tippy
      content={`Row ${rowName}, Seat ${seatIndex + 1} - ${
        seats[seatId].price
      }$`}
    >
      <button disabled={seat ? true : false}>
        <img
          src={seatImg}
          alt="seat"
          style={seat ? { filter: "grayscale(100%)" } : null}
        />
      </button>
    </Tippy>
  );
};

export default Seat;
