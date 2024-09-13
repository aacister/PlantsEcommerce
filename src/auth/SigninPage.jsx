import AuthForm from "./AuthForm";
import RedirectToPlantsIfSignedIn from "sharedComponents/RedirectToPlantsIfSignedIn";
import FormContainer from "./FormContainer";
import { Link, useLocation } from "react-router-dom";
import apiFetch from "../services/apiFetch";
import * as userServices from "services/user";
import { useState, useContext } from "react";
import SessionContext from "context/sessionContext";

const SigninPage = () => {
  const [error, setError] = useState("");
  const location = useLocation();
  const sessionContext = useContext(SessionContext);

  return (
    <RedirectToPlantsIfSignedIn>
      <FormContainer>
        <div className="text-red-700">{error}</div>
        {location.state?.accountCreated && (
          <div className="bg-green-200 text-green-800 rounded-lg py-2 px-4 mt-2 text-sm">
            Account created. Pleased log in.
          </div>
        )}
        <AuthForm
          fields={[
            {
              label: "username",
              type: "text",
            },
            {
              label: "password",
              type: "password",
            },
          ]}
          submitButtonLabel="sign in"
          onSubmit={async (values) => {
            console.log(values);
            const resp = await userServices.createSession({
              username: values.username,
              password: values.password,
            });
            const data = await resp.json();
            if (resp.status == "201") {
              console.log("Sign in successfull!");
              console.log(data.capstone_session_token);
              sessionContext.signIn(data.capstone_session_token);

              setError("");
            } else {
              setError(data.error);
            }
          }}
        />
        <Link to="/sign-up" className="green-emerald-700 underline text-sm">
          create an account
        </Link>
      </FormContainer>
    </RedirectToPlantsIfSignedIn>
  );
};

export default SigninPage;
