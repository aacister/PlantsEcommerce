import { useState } from "react";
import Field from "./Field";
const AuthForm = (props) => {
  const { fields, submitButtonLabel, onSubmit } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState(() => {
    const initVals = {};
    for (let field of fields) {
      initVals[field.label] = "";
    }
    return initVals;
  });

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await onSubmit(values);
        setIsLoading(false);
      }}
      className="font-lato bg-white border border-slate-300 rounded-lg m-4 p-4"
    >
      {fields.map((field, idx) => (
        <Field
          key={idx}
          label={field.label}
          type={field.type}
          value={values[field.label]}
          onChange={(e) => {
            setValues({ ...values, [field.label]: e.target.value });
          }}
        />
      ))}
      <button className="bg-emerald-600 text-white rounded-lg py-2 mt-4 w-full relative">
        {submitButtonLabel}
        {
          isLoading &&
        <div className="flex items-center h-full absolute top-0 right-4 ">
          <i class="fa-solid fa-spinner text-green-300 animate-spin text-xl"></i>

        </div>
}
      </button>
    </form>
  );
};

export default AuthForm;
