

type ValidatorFn = (value: string) => boolean;

const NOT_VALID_NUMBER = 'Invalid number';
const NOT_INTEGER = 'Invalid - empty or non integer';
const VALID = 'Valid';

export function validate(value: string, validators: Array<ValidatorFn>) {
    if (!isValidInteger(value)) {
        return NOT_INTEGER;
    }

    const isValidValue = validators.every(validator => validator(value))

    if (!isValidValue) {
        return NOT_VALID_NUMBER;
    }

    return VALID;

}

const isEven = (value: string) => Number(value) % 2 === 0;

const isGreaterThan = (boundary: number) => (value: string) => Number(value) > boundary;

const isLessThan = (boundary: number) => (value: string) => Number(value) < boundary;

const isValidInteger = (value: string) => value != '' && Number.isInteger(Number(value));

export const NUMBER_VALIDATORS: ValidatorFn[] = [
    isGreaterThan(0),
    isLessThan(100),
    isEven,
];