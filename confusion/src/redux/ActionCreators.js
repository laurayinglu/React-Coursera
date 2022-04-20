import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';

// the followings are action objects

export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment
  }
});

// a thunk, it returns a function
export const fetchDishes = () => (dispatch) => {

  dispatch(dishesLoading(true));

  // add delay
  setTimeout(() => {
    dispatch(addDishes(DISHES));
  }, 2000);
}

// return a action 
export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING
});

// take an error message
export const dishesFailed = (errmess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess
});

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes
});
