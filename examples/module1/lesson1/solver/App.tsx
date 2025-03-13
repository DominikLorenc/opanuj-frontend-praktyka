import { useState } from 'react';
import {
  add,
  divide,
  multiply,
  subtract,
  type CalculationResult,
} from './functions';
import { Button } from './components/Button';
import { Input } from './components/Input';

const App = () => {
  const [fistNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);
  const [error, setError] = useState<string | null>(null);

  const calculate = (func: (a: number, b: number) => CalculationResult) => {
    const calcResult = func(fistNumber, secondNumber);
    setResult(calcResult.error ? 0 : calcResult.result);
    setError(calcResult.error || '');
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <Input value={fistNumber} onChange={setFirstNumber} />
        <Input value={secondNumber} onChange={setSecondNumber} />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <Button onClick={() => calculate(add)}>+</Button>
        <Button onClick={() => calculate(subtract)}>-</Button>
        <Button onClick={() => calculate(multiply)}>*</Button>
        <Button onClick={() => calculate(divide)}>/</Button>
      </div>
      <div>Result: {result}</div>
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
};

export default App;
