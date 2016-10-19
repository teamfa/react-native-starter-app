/**
 * @providesModule CounterActions
 * @flow
 */

import type { Action } from '../types';

export const COUNTER_ADD: string = 'COUNTER_ADD';
export const COUNTER_SUBTRACT: string = 'COUNTER_SUBTRACT';

export function add(count: number = 1): Action {
  return {
    type: COUNTER_ADD, count,
  };
}

export function subtract(count: number = 1): Object {
  return {
    type: COUNTER_SUBTRACT, count,
  };
}
