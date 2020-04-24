import React, { useContext, useEffect, useState } from "react";
import { SeatContext } from "./SeatContext";
import TicketWidget from "./TicketWidget";
import GlobalStyles from "./GlobalStyles";
import CircularProgress from "./CircularProgress";

function App() {
  const {
    state: { numOfRows },
    actions: { receiveSeatInfoFromServer }
  } = useContext(SeatContext);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    fetch("/api/seat-availability")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setLoaded(true);
        return receiveSeatInfoFromServer(data);
      });
  }, []);
  return (
    <>
      {!loaded && <CircularProgress></CircularProgress>}
      <GlobalStyles />
      This venue has {numOfRows} rows!
      <TicketWidget></TicketWidget>
    </>
  );
}

export default App;
