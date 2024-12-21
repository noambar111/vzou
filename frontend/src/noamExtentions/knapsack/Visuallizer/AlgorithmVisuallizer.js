import React, {useState} from 'react';
import "./AlgorithmVisuallizer.css"

const AlgorithmVisualizer = ({ inputData, setInputHasEntered }) => {
    const resetValues = () => {
      setInputHasEntered(false);
    }
    const { numItems, capacity, items } = inputData;
    const code = [
        "Initialize DP table to 0",
        "for i = 1 to n:",
        "   for w = 1 to capacity:",
        "      if weight[i] <= w:",
        "         dp[i][w] = max(value[i] + dp[i-1][w-weight[i]], dp[i-1][w])",
        "      else:",
        "         dp[i][w] = dp[i-1][w]",
    ];

    const [dpTable, setDpTable] = useState(
        Array(numItems + 1)
          .fill(null)
          .map(() => Array(capacity + 1).fill(0))
      );

    const [line, setLine] = useState(0);

    const [currentCell, setCurrentCell] = useState({ i: 0, w: 0 });

    const nextStep = () => {
      console.log(line);
    
      const { i, w } = currentCell;
    
      if (line === 0) {
        // Line 1: Initialize DP table
        setLine(1);
      } else if (line === 1) {
        // Line 2: Start the outer loop
        if (i < numItems) {
          setCurrentCell({ i: i + 1, w: 0 }); // Move to the next row
          setLine(2);
        } else {
          setLine(code.length); // Finish
        }
      } else if (line === 2) {
        // Line 3: Start the inner loop
        if (w < capacity) {
          setCurrentCell({ i, w: w + 1 }); // Move to the next column
          setLine(3);
        } else {
          setLine(1); // Go back to the outer loop
        }
      } else if (line === 3) {
        // Line 4: Check if the item fits
        if (items[i - 1].weight <= w) {
          setLine(4); // Go to line 4 (update dpTable)
        } else {
          setLine(5); // Go to line 6 (else condition)
        }
      } else if (line === 4) {
        // Line 4: Update DP table when the item fits
        const updatedTable = [...dpTable];
        const weight = items[i - 1].weight;
        const value = items[i - 1].value;
    
        updatedTable[i][w] = Math.max(
          value + (w - weight >= 0 ? dpTable[i - 1][w - weight] : 0),
          dpTable[i - 1][w]
        );
    
        setDpTable(updatedTable); // Save the updated table
        setLine(2); // Move back to the inner loop
      } else if (line === 5) {
        setLine(6); // Else block
      } else if (line === 6) {
        // Line 6: Carry over the value if the item doesn't fit
        const updatedTable = [...dpTable];
    
        updatedTable[i][w] = dpTable[i - 1][w]; // Carry over the value
        setDpTable(updatedTable);
        setLine(2); // Move back to the inner loop
      }
    };
    





    return(
        <div className = "algorithm_viisuallize_container">
            <div className='psuedo_code_container'>
                <ul className="code-list">
                    {code.map((lineText, idx) => 
                        (<pre key={idx} className={line === idx ? "highlight" : ""}>
                            {lineText}
                        </pre>))}
                </ul>
                <div className='control-pannel'>
                  <button className="next-button" onClick={nextStep}>
                      Next Step
                  </button>
                  <button className="next-button" onClick={resetValues}>
                      Reset Values
                  </button>
                </div>
            </div>
            <div className='dp_table_container'>
                <pre>dp table</pre>
                <table>
                          {dpTable.map((row, i) => (
                            <tr key={i}>
                              {row.map((cell, w) => (
                                <td key={w}
                                    className= {
                                      currentCell.i === i && currentCell.w === w
                                      ? "highlight-cell"
                                      : ""
                                    }
                                >{cell}</td>
                              ))}
                            </tr>
                          ))}
                </table>
            </div>
        </div>
    );

}

export default AlgorithmVisualizer;