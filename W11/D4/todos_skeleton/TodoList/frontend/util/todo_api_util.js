export const fetchTodos = () => {
  console.log()
  return $.ajax({
    method: "get",
    url: "/api/todos"
  })
}

