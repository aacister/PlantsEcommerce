const FormContainer = (props) => {
  const { children } = props;
  return (
    <div className="flex bg-green-50">
      <div className="relative hidden md:flex">
        <img
          src="https://static-task-assets.react-formula.com/capstone_sign_in_scene.png"
          className="h-screen object-cover"
        ></img>
        <div className="absolute top-0 left-0 w-full h-full bg-green-700/40"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
        
      </div>
      <div className="flex flex-col items-center justify-center h-screen mx-2 my-8 flex-1">
        <img
          src="https://static-task-assets.react-formula.com/capstone_logo_dark.png"
          className="w-16 mb-2"
        />
        <div className="text-3xl text-emerald-700 font-playfair">
          Rica's Plants
        </div>
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
