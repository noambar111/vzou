import React, { useEffect, useState } from "react";
import "./Visualizer.css";

const pseudoCodeLines = [
  "for i = 1 to n",
  "  for j = 1 to m",
  "    if string1[i-1] == string2[j-1]",
  "      dp[i][j] = dp[i-1][j-1] + 1",
  "    else if dp[i-1][j] >= dp[i][j-1]",
  "      dp[i][j] = dp[i-1][j]",
  "    else",
  "      dp[i][j] = dp[i][j-1]"
];

const Visualizer = ({ string1, string2 }) => {
  const [dp, setDp] = useState([]);
  const [backtrack, setBacktrack] = useState([]);
  const [lcs, setLcs] = useState("");
  const [currentStep, setCurrentStep] = useState({ i: 1, j: 1, line: 0 });
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const n = string1.length;
    const m = string2.length;
    const table = Array(n + 1).fill(null).map(() => Array(m + 1).fill(0));
    const backtrack = Array(n + 1).fill(null).map(() => Array(m + 1).fill(null));
    setDp(table);
    setBacktrack(backtrack);
  }, [string1, string2]);

  const handleNextStep = () => {
    if (isComplete) return;

    let { i, j } = currentStep;
    const n = string1.length;
    const m = string2.length;
    const table = [...dp];
    const bt = [...backtrack];

    if (i > n) {
      let x = n, y = m;
      const lcsChars = [];
      while (x > 0 && y > 0) {
        if (bt[x][y] === "diagonal") {
          lcsChars.push(string1[x - 1]);
          x--;
          y--;
        } else if (bt[x][y] === "up") {
          x--;
        } else {
          y--;
        }
      }
      setLcs(lcsChars.reverse().join(""));
      setIsComplete(true);
      return;
    }

    let line;
    if (string1[i - 1] === string2[j - 1]) {
      table[i][j] = table[i - 1][j - 1] + 1;
      bt[i][j] = "diagonal";
      line = 3;
    } else if (table[i - 1][j] >= table[i][j - 1]) {
      table[i][j] = table[i - 1][j];
      bt[i][j] = "up";
      line = 5;
    } else {
      table[i][j] = table[i][j - 1];
      bt[i][j] = "left";
      line = 7;
    }

    setDp(table);
    setBacktrack(bt);

    if (j < string2.length) {
      setCurrentStep({ i, j: j + 1, line });
    } else {
      setCurrentStep({ i: i + 1, j: 1, line: 0 });
    }
  };

return (
  <div className="lcs-card">
      <div className="lcs-columns">



        <div className="lcs-left-column">
          <div className="lcs-pseudocode">
          <h4 className="vars-title">Pseudocode</h4>
            <pre className="lcs-code-block">
              {pseudoCodeLines.map((line, idx) => (
                  <div key={idx} className={currentStep.line === idx ? "highlight-line" : ""}>
                      {line}
                  </div>
                ))}
            </pre>
          </div>
          <div className="debug-pannel">
          <div className="lcs-variable-box">
              <h4 className="vars-title">Variables</h4>
              <div className="vars-line"><span className="vars-label">i:</span> {currentStep.i}</div>
              <div className="vars-line"><span className="vars-label">j:</span> {currentStep.j}</div>
              <div className="vars-line">
                <span className="vars-label">string1[i-1]:</span> {string1[currentStep.i - 1] || "-"}
              </div>
              <div className="vars-line">
                <span className="vars-label">string2[j-1]:</span> {string2[currentStep.j - 1] || "-"}
              </div>
              <div className="vars-line">
                <span className="vars-label">dp[i][j]:</span> {dp[currentStep.i]?.[currentStep.j] ?? "-"}
              </div>
            </div>
            <div className="lcs-button-container">
              <button className="lcs-next-button" onClick={handleNextStep}>
                Next Step
              </button>
            </div>
          </div>
        </div>


        <div className="lcs-right-column">
          <div className="lcs-table-scroll-wrapper">
            <table className="lcs-dp-table">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  {string2.split("").map((ch, j) => (
                    <th key={j}>{ch}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dp.map((row, i) => (
                  <tr key={i}>
                    {i === 0 ? (
                      <>
                        <th></th>
                        {row.map((cell, j) => (
                          <td key={j}>{cell}</td>
                        ))}
                      </>
                    ) : (
                      <>
                        <th>{string1[i - 1]}</th>
                        {row.map((cell, j) => {
                          let cls = "";
                          const isActive = currentStep.i === i && currentStep.j === j;
                          if (backtrack[i]?.[j] === "diagonal") cls = "cell-diagonal";
                          else if (backtrack[i]?.[j] === "up") cls = "cell-up";
                          else if (backtrack[i]?.[j] === "left") cls = "cell-left";
                          if (isActive) cls += " active-cell";

                          return <td key={j} className={cls}>{cell}</td>;
                        })}
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>    
  </div>
);


};

export default Visualizer;
