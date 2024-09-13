import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigninPage from "./auth/SigninPage";
import SignupPage from "./auth/SignupPage";
import PlantListPage from "pages/PlantListPage";
import PlantShowPage from "pages/PlantShowPage";
import { useState } from "react";
import * as userService from "services/user";
import SessionContext from "context/sessionContext";
import { jwtDecode } from "jwt-decode";

const App = () => {
  const [sessionToken, setSessionToken] = useState(
    userService.getSessionTokenStorage()
  );

  return (
    <SessionContext.Provider value={
      {
        username: sessionToken ? jwtDecode(sessionToken).username : null,
        signIn: (token) => {
          setSessionToken(token);
          userService.setSessionTokenStorage(token);
        },
        signOut: () => {
          setSessionToken(null);
          userService.removeSessionTokenStorage();
        }
      }
    }>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SigninPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route path="/plants" element={<PlantListPage />} />
          <Route path="/plants/:plantId" element={<PlantShowPage />} />
        </Routes>
      </BrowserRouter>
    </SessionContext.Provider>
  );
};

export default App;
