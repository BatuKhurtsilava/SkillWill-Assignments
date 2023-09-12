
export const addTodoAction = (payload) =>
({
  type: 'ADD-TODO',
  payload
})

export const deleteTodoAction = (payload) =>
({
  type: 'DELETE-TODO',
  payload
})

export const markDoneAction = (payload) =>
({
  type: 'MARK-DONE-TODO',
  payload
})

export const backToBacklog = (payload) =>
({
  type: 'BACK-TO-TODO',
  payload
})

export const deleteDoneAction = (payload) =>
({
  type: 'DELETE-DONE',
  payload
})