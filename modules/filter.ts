export const filteredTodosTimezone = (todos: Todos[]) => {
  const morning = todos.filter(todo => {
    return todo.timezone === 'morning'
  })
  const afternoon = todos.filter(todo => {
    return todo.timezone === 'afternoon'
  })
  const evening = todos.filter(todo => {
    return todo.timezone === 'evening'
  })
  return { morning, afternoon, evening }
}
