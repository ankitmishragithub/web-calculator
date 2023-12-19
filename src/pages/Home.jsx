import React, {useEffect,useState } from "react";

const Home = () => {
  const [expression, setExpression] = useState([]);
  const [ans, setAns] = useState("0"); 

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;
      if (!isNaN(key) || "+-*/.".includes(key)) {
        handleExpression(key);
      } else if (key === "Backspace") {
        handleExpression("DEL");
      } else if (key === "Enter") {
        handleExpression("=");
      } else if (key === "Escape") {
        handleExpression("RESET");
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [expression]);

  const handleExpression = (value) => {
    if (ans === "0") {
      setAns("");
    }
   
    if (value === "DEL") {
      const newExpression = [...expression];
      newExpression.pop();
      setExpression(newExpression);
    } else if (value === "RESET") {
      setExpression([]);
      setAns("0");
    } else if (value === "=") {
      try {
        const result = eval(expression.join(""));
        setAns(result.toString());
        setExpression([]);
      } catch (error) {
        setAns("Error");
      }
    } else {
      
      const newExpression = [...expression, value];
      setExpression(newExpression);
    }
  };
  const h1Style = {
    padding: "1rem",
    fontWeight: "bold",
    fontSize: "3.5rem", 
  };
  return (
    <div style={{ backgroundColor: "#3B4664", height: "100vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: " 536px",
            height: "142.73px",
            borderRadius: "12px",
            boxShadow: "0px 4px 4px 0px #00000040",
            backgroundColor: " rgba(24, 31, 50, 1)",
            color: "white",
            display: "flex",

            justifyContent: "end",
            alignItems: "end",
          }}
        >
          <h1 style={h1Style}>{ans || expression.join("")}</h1>
        </div>
        <div
          style={{
            marginTop: "1rem",
            width: "536px",
            height: "470px",
            top: "363px",
            left: "466px",
            gap: "10px",
            borderRadius: "1rem",

            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            background: " rgba(37, 45, 68, 1)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridTemplateRows: "repeat(4, 1fr)",
              padding: "2rem",
            }}
          >
            <style jsx>{`
              button {
                padding: 1rem;
                margin: 0.1rem 0.5rem 1rem 0.5rem;
                border-radius: 0.5rem;
                font-weight: bold;
                font-size: 1.5rem;
              }
              .double-grid {
                grid-column: span 2;
              }
            `}</style>
            <button onClick={() => handleExpression("7")}>7</button>
            <button onClick={() => handleExpression("8")}>8</button>
            <button onClick={() => handleExpression("9")}>9</button>
            <button
              onClick={() => handleExpression("DEL")}
              style={{ background: "#3B4664", color: "white" }}
            >
              DEL
            </button>

            <button onClick={() => handleExpression("4")}>4</button>
            <button onClick={() => handleExpression("5")}>5</button>
            <button onClick={() => handleExpression("6")}>6</button>
            <button onClick={() => handleExpression("+")}>+</button>

            <button onClick={() => handleExpression("1")}>1</button>
            <button onClick={() => handleExpression("2")}>2</button>
            <button onClick={() => handleExpression("3")}>3</button>
            <button onClick={() => handleExpression("-")}>-</button>

            <button onClick={() => handleExpression(".")}>.</button>
            <button onClick={() => handleExpression("0")}>0</button>
            <button onClick={() => handleExpression("/")}>/</button>
            <button onClick={() => handleExpression("*")}>*</button>

            <button
              className="double-grid"
              style={{ background: "#3B4664", color: "white" }}
              onClick={() => handleExpression("RESET")}
            >
              RESET
            </button>
            <button
              className="double-grid"
              style={{ background: "red", color: "white" }}
              onClick={() => handleExpression("=")}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
