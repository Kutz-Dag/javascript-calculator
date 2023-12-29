import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

const calculatorData = [
  { id: "clear", value: "AC" },
  { id: "divide", value: "/" },
  { id: "multiply", value: "x" },
  { id: "seven", value: 7 },
  { id: "eight", value: 8 },
  { id: "nine", value: 9 },
  { id: "subtract", value: "-" },
  { id: "four", value: 4 },
  { id: "five", value: 5 },
  { id: "six", value: 6 },
  { id: "add", value: "+" },
  { id: "one", value: 1 },
  { id: "two", value: 2 },
  { id: "three", value: 3 },
  { id: "equals", value: "=" },
  { id: "zero", value: 0 },
  { id: "decimal", value: "." }
];

const calculatorOperators = ["AC", "/", "x", "+", "-", "="];

const numberButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const CalculationDisplay = ({ input, output }) => (
  <div className="output">
    <span className="result">{output}</span>
    <span id="display" className="input">{input}</span>
  </div>
);

const Key = ({ keyData: { id, value }, handleInput }) => (
  <button id={id} onClick={() => handleInput(value)}>
    {value}
  </button>
);

const Keypad = ({ handleInput }) => (
  <div className="keys">
    {calculatorData.map((key) => (
      <Key key={key.id} keyData={key} handleInput={handleInput} />
    ))}
  </div>
);

const App = () => {
  const [input, setInput] = React.useState("0")
  const [output, setOutput] = React.useState("")
  const [calcData, setCaclData] = React.useState("")
  
  const handleSubmit = () => {
    const sum = eval(calcData)
    // function roundToDecimalPlaces(num, decimalPlaces) {
    //   const factor = Math.pow(10, decimalPlaces);
    //   return Math.round(num * factor) / factor;
    // }
    setInput(sum);
    setOutput(`${sum} = ${sum}`);
    setCaclData(`${sum}`);
  };
  
  const handleClear = () => {
    setInput("0")
    setOutput("")
    setCaclData("")
  };
  
  const handleNumbers = (value) => {
    if (!calcData.length) {
      setInput(`${value}`);
      setCaclData(`${value}`);
    } else {
      if (value === 0 && (calcData === "0" || input === "0")) {
        setCaclData(`${calcData}`);
      } else {
        const lastChar = calcData.charAt(calcData.length - 1);
        const isLastCharOperator =
          lastChar === "*" || calculatorOperators.includes(lastChar);
        setInput(isLastCharOperator ? `${value}` : `${input}${value}`);
        setCaclData(`${calcData}${value}`);
      }
    }
  };
  
  const periodOperator = () => {
    const lastChar = calcData.charAt(calcData.length - 1);
    if (!calcData.length) {
      setInput("0.");
      setCaclData("0.");
    } else {
      if (lastChar === "*" || calculatorOperators.includes(lastChar)) {
        setInput("0.");
        setCaclData(`${calcData} 0.`);
      } else {
        setInput(
          lastChar === "." || input.includes(".") ? `${input}` : `${input}.`
        );
        const changedValue =
          lastChar === "." || input.includes(".")
            ? `${calcData}`
            : `${calcData}.`;
        setCaclData(changedValue);
      }
    }
  };
  
  const handleOperators = (value) => {
    if (calcData.length) {
      setInput(`${value}`);
      
      const beforeLastChar = calcData.charAt(calcData.length - 2);

      const beforeLastCharIsOperator =
        calculatorOperators.includes(beforeLastChar) || beforeLastChar === "*";

      const lastChar = calcData.charAt(calcData.length - 1);
      
      const lastCharIsOperator = calculatorOperators.includes(lastChar) || lastChar === "*";
      
      const validOperation = value === "x" ? "*" : value;
      if (
        (lastCharIsOperator && value !== "-") ||
        beforeLastCharIsOperator && lastCharIsOperator
      ) {
        if (beforeLastCharIsOperator) {
          const updatedNumber = `${calcData.substring(
            0,
            calcData.length - 2
          )}${value}`;
          setCaclData(updatedNumber);
        } else {
          setCaclData(`${calcData.substring(0, calcData.length - 1)}${validOperation}`);
        }
      } else {
        setCaclData(`${calcData}${validOperation}`);
      }
    }
  };
  
  
  const handleInput = (value) => {
    const num = numberButtons.find((num) => num === value);
    const operators = calculatorOperators.find((operator) => operator === value);
    
    if (value === "=") {
      handleSubmit();
    } else if (value === "AC") {
      handleClear();
    } else if (value === num) {
      handleNumbers(value);
    } else if (value === ".") {
      periodOperator(value);
    } else if (value === operators) {
      handleOperators(value);
    }
  }
  
  const handleOutput = () => {
    setOutput(calcData)
  }
  
  React.useEffect(() => {
    handleOutput()
  }, [calcData])
  
  return (
    <div className="main--container">
      <div className="main--calc">
        <CalculationDisplay input={input} output={output} />
        <Keypad handleInput={handleInput}/>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
