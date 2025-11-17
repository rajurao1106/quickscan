import React, { useContext } from "react";
import { StoreContext } from "../context/StoreProvider";


const DataDisplay = () => {
  const { selectedData } = useContext(StoreContext);

  return (
    <div>
      <h2>Data Display</h2>
      {selectedData ? (
        <div>
          <h3>{selectedData.title}</h3>
          <p>{selectedData.description}</p>
        </div>
      ) : (
        <p>No data selected yet.</p>
      )}
    </div>
  );
};

export default DataDisplay;
