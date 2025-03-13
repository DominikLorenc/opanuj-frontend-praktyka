
export type CalculationResult = {
  result: number;
  error?: string | null;
};

type MathOperation = (a: number, b: number) => CalculationResult


export const add: MathOperation = (a, b) => {
  return {
    result: a + b,
  }
}

export const subtract: MathOperation = (a, b) => {
  return {
    result: a - b,
  }
}

export const multiply: MathOperation = (a, b) => {
  return {
    result: a * b,
  }
}

export const divide: MathOperation = (a, b) => {
  if (a === 0 || b === 0) {
    return {
      result: 0,
      error: 'Cannot divide by zero',
    }
  }

  return {
    result: a / b,
  }
}

