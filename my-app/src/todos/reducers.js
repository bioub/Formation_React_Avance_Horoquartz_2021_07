import { createReducer } from '@reduxjs/toolkit';
import { todoChange, todoAdd } from './actions';

// function inputReducer(previousState = '', { type, payload }) {
//   switch (type) {
//     case todoChange.type:
//       return payload;
//     default:
//       return previousState;
//   }
// }

// function itemsReducer(previousState = [], { type, payload }) {
//   switch (type) {
//     case todoAdd.type:
//       return [...previousState, payload];
//     default:
//       return previousState;
//   }
// }

// const todosReducer = combineReducers({
//   input: inputReducer,
//   items: itemsReducer,
// });


const initialState = {
  input: '',
  items: [],
};

const todosReducer = createReducer(initialState, {
  [todoChange]: (state, action) => ({...state, input: action.payload}),
  [todoAdd]: (state, action) =>  ({...state, items: [...state.items, action.payload]}),
});

export { todosReducer };
