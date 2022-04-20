import * as ActionTypes from './ActionTypes';

// this is the leaders reducer: receives the current state and an action object, decides how to update the state
// if necessary, and returns the new state: (state, action) => newState
export const Leaders = (state = { isLoading: true, errMess: null, leaders:[] }, action) => {
    switch (action.type) {
      case ActionTypes.ADD_LEADERS:
          return {...state, isLoading: false, errMess: null, leaders: action.payload};

      case ActionTypes.LEADERS_LOADING:
          return {...state, isLoading: true, errMess: null, leaders: []} // state itself not gonna mutate 

      case ActionTypes.LEADERS_FAILED:
          return {...state, isLoading: false, errMess: action.payload, leaders: []};

      default:
          return state;
    }
};