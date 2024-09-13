const Field = (props) => {
  const { label, type, value, onChange } = props;
  return (
    <div className="flex flex-col py-2">
      <label className="pl-1 text-slate-500" htmlFor={label}>
        {label}
      </label>
      <input
        id={label}
        value={value}
        onChange={onChange}
        type={type}
        className="bg-slate-50 border border-slate-300 rounded-lg px-2 py-1 w-64 focus:outline-emerald-600"
      />
    </div>
  );
};

export default Field;
