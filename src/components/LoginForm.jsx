import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
// import axios from "axios";

const LoginForm = () => {
  const { user, signUpWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (event) => {
    event.prevengDefalut();
  };
  return (
    <div className="px-10 space-y-5">
      <form onSubmit={handleLogin} className="space-y-6">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="email" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input type="" className="grow" />
        </label>
      </form>
      <button
        onClick={() => {
          signUpWithGoogle()
            .then((result) => {
              axios.post(
                "https://car-doctor-backend-umber.vercel.app/jwt",
                { email: result.user.email },
                {
                  withCredentials: true,
                }
              );
              navigate(location.state ? location.state : "/");
            })
            .catch((error) => {
              console.log(error);
            });
        }}
        className="flex items-center justify-center w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <img
          src="https://www.svgrepo.com/show/355037/google.svg"
          alt="Google logo"
          className="w-6 h-6 mr-2"
        />
        <span className="text-sm font-medium text-gray-700">
          Sign up with Google
        </span>
      </button>

      <p>
        New User? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
};

export default LoginForm;
