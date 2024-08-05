import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <>
      <div
        className="flex items-center pl-24 pt-8 min-h-screen bg-cover bg-center mt-14"
        style={{
          backgroundImage: `url(https://images.inc.com/uploaded_files/image/1920x1080/getty_690358116_411213.jpg)`,
        }}
      >
        <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md w-full max-w-sm mx-4">
          <h1 className="text-2xl font-bold text-center mb-6">
            Login To FutureBooks
          </h1>
          <form>
            <input
              type="text"
              placeholder="Email Address"
              className="w-full p-3 mb-3 border border-gray-300 rounded outline-none"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-3 border border-gray-300 rounded outline-none"
              required
            />
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-700 duration-300"
            >
              Log in
            </button>
            <a href="#" className="block mt-3 text-center">
              Forgotten password?
            </a>
            <div className="bg-slate-400 mt-2 h-[1px]"></div>
            <button
              type="button"
              onClick={handleSignUpClick}
              className="w-full p-3 mt-4 bg-green-600 text-white rounded hover:bg-green-700 duration-300"
            >
              SignUp
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
