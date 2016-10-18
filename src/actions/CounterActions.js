/**
* @providesModule CounterActions
* @flow
*/

export const COUNTER_ADD = 'COUNTER_ADD';
export const COUNTER_SUBTRACT = 'COUNTER_SUBTRACT';

export function add(count = 1) {
  return {
    type: COUNTER_ADD, count,
  };
}

export function subtract(count = 1) {
  return {
    type: COUNTER_SUBTRACT, count,
  };
}
