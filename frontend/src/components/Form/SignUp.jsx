import { Link } from "react-router-dom";

const SignUp = () => {
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
            Create An Account
          </h1>
          <form>
            <input
              type="text"
              placeholder="Email address or phone number"
              className="w-full p-3 mb-3 border border-gray-300 rounded outline-none"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-3 border border-gray-300 rounded outline-none"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 mb-3 border border-gray-300 rounded outline-none"
              required
            />
            <button
              type="submit"
              className="w-full p-3 bg-blue-400 text-white rounded hover:bg-blue-500 duration-300"
            >
              Sign Up
            </button>
            <Link to="/login" className="block mt-3 text-center">
              Already have an account?{" "}
              <span className="text-blue-500">Log in</span>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
