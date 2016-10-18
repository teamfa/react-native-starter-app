import * as types from 'CounterActions';

const initialState = {
  count: 0,
};

function counter(state = initialState, action) {
  if (action.type === types.COUNTER_ADD) {
    return {
      count: state.count + action.count,
    };
  }

  if (action.type === types.COUNTER_SUBTRACT) {
    return {
      count: state.count - action.count,
    };
  }

  return state;
}

export default counter;
