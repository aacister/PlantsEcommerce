import apiFetch from "./apiFetch";

export const createUser = ({ username, password }) => {
   return apiFetch("POST", "/users", { username, password });
};

export const createSession = ({ username, password }) => {
    return apiFetch("POST", "/users/session", { username, password });
};

const CAPSTONE_SESSION_TOKEN_KEY = 'capstone_session_token';
export const setSessionTokenStorage = (capstoneSessionToke) => {
    localStorage.setItem(CAPSTONE_SESSION_TOKEN_KEY, capstoneSessionToke);
};

export const getSessionTokenStorage = () => {
    return localStorage.getItem(CAPSTONE_SESSION_TOKEN_KEY);
};

export const removeSessionTokenStorage = () => {
    return localStorage.removeItem(CAPSTONE_SESSION_TOKEN_KEY);
};