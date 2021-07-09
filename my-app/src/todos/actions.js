import { createAction, nanoid } from '@reduxjs/toolkit'

const todoChange = createAction('TODO_CHANGE');
const todoAdd = createAction('TODO_ADD', (text) => ({
  payload: {
    id: nanoid(),
    text,
    completed: false,
  },
}));

export { todoChange, todoAdd };
