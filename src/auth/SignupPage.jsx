import AuthForm from "./AuthForm";
import RedirectToPlantsIfSignedIn from "sharedComponents/RedirectToPlantsIfSignedIn";
import { Link, useNavigate } from "react-router-dom";
import FormContainer from "./FormContainer";
import { useState } from "react";
import * as userServices from "services/user";
import apiFetch from "services/apiFetch";

const SignupPage = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <RedirectToPlantsIfSignedIn>
        <FormContainer>
          <div className="text-red-700">{error}</div>
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
              {
                label: "confirm password",
                type: "password",
              },
            ]}
            submitButtonLabel="create account"
            onSubmit={async (values) => {
              if (values.username < 4) {
                setError("Username is too short");
                return;
              }
              if (values.password < 4) {
                setError("Password is too short");
                return;
              }
              if (values.password !== values["confirm password"]) {
                setError("Passwords do not match");
                return;
              }

              const resp = await userServices.createUser({
                username: values.username,
                password: values.password,
              });

              if (resp.status == "201") {
                setError("");
                navigate("/", {
                  state: {
                    accountCreated: true,
                  },
                });
              } else {
                const data = await resp.json();
                setError(data.error);
              }
            }}
          />
          <Link to="/" className="green-emerald-700 underline text-sm">
            sign in
          </Link>
        </FormContainer>
      </RedirectToPlantsIfSignedIn>
    </>
  );
};

export default SignupPage;
