"use client";
import { useState } from "react";

export default function Participants() {

  const [add, setAdd] = useState(0);

  const countClickHandler = () => {
    setAdd(add + 1);
  };

  console.log('Participants rendered');

  return (
    <center>
      <p>State value: {add}</p>
      <button onClick={countClickHandler}>
        Add 1
      </button>
    </center>
  );
}
