import { Link, useLocation, useNavigate } from "react-router-dom";
// import "../../Styles/Styles.css";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
// import { AuthContext } from "../../AuthProbider/AuthProvider";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

export default function Login() {
  const { signIn, logInWithGoogle, logInWithGithub } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    e.target.reset();
    signIn(email, password)
      .then((r) => {
        Swal.fire("Good job!", "You logged in your account", "success");
        navigate(from, { replace: true });
      })
      .catch((e) => {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${e.message}`,
        });
      });
  };
  const handleLogInGoogle = () => {
    logInWithGoogle()
      .then((r) => {
        Swal.fire("Good job!", "You logged in your account", "success");
        navigate(from, { replace: true });
      })
      .catch((e) => {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${e.message}`,
        });
      });
  };
  const handleLogInGithub = () => {
    logInWithGithub()
      .then((r) => {
        Swal.fire("Good job!", "You logged in your account", "success");
        navigate(from, { replace: true });
      })
      .catch((e) => {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${e.message}`,
        });
      });
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img
      className="mx-auto h-10 w-auto"
      src="https://i.ibb.co/yk2NQr5/528k217e-1.png"
      alt="Your Company"
    />
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
      Sign in to your account
    </h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form
      onSubmit={handleLogIn}
      className="space-y-6"
      action="#"
      method="POST"
    >
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#488b8f] sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Password
          </label>
          
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#488b8f] sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-[#488b8f] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#5ea3a3] hover:text-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#488b8f]"
        >
          Sign in
        </button>
      </div>
    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      New at Here?{" "}
      <Link
        to="/register"
        className="font-semibold leading-6 text-[#488b8f] hover:text-[#5ea3a3]"
      >
        Register
      </Link>
    </p>

    <div className="divider">OR</div>
          <button
            onClick={handleLogInGoogle}
            className="btn-second w-full bg-[#faf9f9] p-2 border hover:border-2 border-gray-500 rounded-sm flex gap-2 justify-center items-center"
          >
            <FaGoogle /> Login with Google
          </button>
          <br />
          <br />
          <button
            onClick={handleLogInGithub}
            className="btn-second w-full bg-[#faf9f9] border flex gap-2 p-2 hover:border-2 border-gray-500 rounded-sm justify-center items-center"
          >
            <FaGithub /> Login with Github
          </button>
        </div>
      </div>
    </>
  );
}
