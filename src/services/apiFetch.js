import * as userService from 'services/user';

const { VITE_API_BASE_URL, VITE_API_KEY } = import.meta.env;

const apiFetch = (method, path, body = null) => {
  const options = {
    method,
    credentials: "include",
    headers: {
      Authorization: "Bearer " + "react_formula_capstone_api_abda516b2b47410d85e4217d74649b77",
      "Content-Type": "application/json",
    },
  };

  const sessionToken = userService.getSessionTokenStorage();
  if(sessionToken){
    options.headers['Capstone-Session'] = sessionToken;
  }

  if (body) {
    options.body = JSON.stringify(body);
  }
  return fetch('https://api.react-formula.com/learning-api/demos/capstone' + path, options);
 // return fetch(VITE_API_BASE_URL + path, options);
};

export default apiFetch;