const API_ROUTE = 'http://localhost:8080'

// LOGIN
export const fetchSignUp = (email: string, password: string) => {
  const data = {
    email: email,
    password: password,
  }

  return fetch(`${API_ROUTE}/users/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}

export const fetchLogin = (email: string, password: string) => {
  const data = {
    email: email,
    password: password,
  }

  return fetch(`${API_ROUTE}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}

// TODOS
export const getTodos = (token: string) => {
  return fetch(`${API_ROUTE}/todos`, {
    headers: {
      Authorization: token,
    },
  })
}

export const getTodoById = (id: string, token: string) => {
  return fetch(`${API_ROUTE}/todos/${id}`, {
    headers: {
      Authorization: token,
    },
  })
}

export const createTodo = (title: string, content: string, token: string) => {
  const data = {
    title: title,
    content: content,
  }
  return fetch(`${API_ROUTE}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(data),
  })
}

export const updateTodo = (
  id: string,
  title: string,
  content: string,
  token: string
) => {
  const data = {
    title: title,
    content: content,
  }

  return fetch(`${API_ROUTE}/todos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',

      Authorization: token,
    },
    body: JSON.stringify(data),
  })
}

export const deleteTodo = (id: string, token: string) => {
  return fetch(`${API_ROUTE}/todos/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  })
}
