import React, { useState, useEffect } from "react";
import UserInput from "./user_input/UserInput";
import Visualizer from "./visuallizer/Visualizer";
import SideBar from "../../components/Layout/SideBar/SideBar";

const LCSManager = () => {
  const [inputData, setInputData] = useState(null);
  const [inputHasEntered, setInputHasEntered] = useState(false);

  useEffect(() => {
    if (inputHasEntered && inputData) {
      console.log("LCS Input Data:", inputData);
    }
  }, [inputHasEntered, inputData]);

  return (
    <>
      <SideBar />
      {inputHasEntered ? (
        <Visualizer string1={inputData.string1} string2={inputData.string2} />
      ) : (
        <UserInput
          setInputData={setInputData}
          setInputHasEntered={setInputHasEntered}
        />
      )}
    </>
  );
};

export default LCSManager;
