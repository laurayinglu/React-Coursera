import * as ActionTypes from './ActionTypes';

// this is the dishes reducer: receives the current state and an action object, decides how to update the state
// if necessary, and returns the new state: (state, action) => newState
export const Dishes = (state = { isLoading: true, errMess: null, dishes:[] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []} // state itself not gonna mutate 

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, dishes: []};

        default:
            return state;
    }
};

//state2 = {...state, isLoading: false, errMess: null, dishes: action.payload};
// => overwrite the state with new values for isLoading, errMess and dishes