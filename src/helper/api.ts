const API_ROUTE = "http://localhost:8080";

export const fetchSignUp = (email: string, password: string) => {
  const data = {
    email: email,
    password: password,
  };

  return fetch(`${API_ROUTE}/users/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const fetchLogin = (email: string, password: string) => {
  const data = {
    email: email,
    password: password,
  };

  return fetch(`${API_ROUTE}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
