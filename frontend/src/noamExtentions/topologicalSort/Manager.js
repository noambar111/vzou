import React, { useState, useEffect } from "react";
import UserInput from "./UserInput.js/UserInput";
import SideBar from "../../components/Layout/SideBar/SideBar";
import Visualizer from "./Visuallizer/visuallizer";

const TopSortManager = () => {
  const [inputData, setInputData] = useState(null);
  const [inputHasEntered, setInputHasEntered] = useState(false);

  // Log the data after it has been entered
  useEffect(() => {
    if (inputHasEntered && inputData) {
      console.log("User Input Data:", inputData);
    }
  }, [inputHasEntered, inputData]);

  return (
    <>
    <SideBar />
      {inputHasEntered ?
       ( <Visualizer nodes={inputData.nodes} edges={inputData.edges} />)
       :
      (
        <UserInput setInputData={setInputData} setInputHasEntered={setInputHasEntered} />
      )
    }
    </>
  );
};

export default TopSortManager;
