import React, { useState } from "react";
import UserInput from "./UserInput.js/UserInput";
import AlgorithmVisualizer from "./Visuallizer/AlgorithmVisuallizer";
import SideBar from "../../components/Layout/SideBar/SideBar";

const KnapsackManager = () => {
    // State for managing input completion
    const [inputHasEntered, setInputHasEntered] = useState(false);
  
    // State for holding input data
    const [inputData, setInputData] = useState({
      numItems: 0,
      capacity: 0,
      items: [],
    });
  
    return (
        <>
          <SideBar />
          {inputHasEntered ? (
            <AlgorithmVisualizer 
                inputData={inputData}
                setInputHasEntered={setInputHasEntered}
                />
          ) : (
            <UserInput
              setInputData={setInputData}
              setInputHasEntered={setInputHasEntered}
            />
          )}
        </>
      );
    };
    
    export default KnapsackManager;