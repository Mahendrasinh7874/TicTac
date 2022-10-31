import React, { useState } from "react";

const Square = ({ state, onClick }) => {
  return (
    <>
      <div className="square">
        <button onClick={onClick}>{state}</button>
      </div>
    </>
  );
};

export default Square;
