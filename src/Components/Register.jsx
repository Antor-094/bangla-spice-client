import { Link, useNavigate } from "react-router-dom";
// import "../../Styles/Styles.css";
import { useContext, useState } from "react";

import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
// import { AuthContext } from "../../AuthProbider/AuthProvider";

export default function Register() {
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();
  const { createUser, updateProf } = useContext(AuthContext);
  const handleCreateUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please add at least 6 characters in your password!",
      });
    }
   else if (!/(?=.*[A-Z])/.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please add at least one uppercase!",
      });
    } else if (!/(?=.*[0-9])/.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please add at least one numbers!",
      });
    } else if (password.length < 6) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please add at least 6 characters in your password!",
      });
    }
    createUser(email, password)
      .then((r) => {
        updateProf(name, photo);
        Swal.fire("Good job!", "You created an account", "success");

        navigate("/");
      })
      .catch((e) => {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please add a special character!",
        });
      });
  };

  const handleTerms = (e) => {
    setAccepted(e.target.checked);
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
            Create A new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleCreateUser}
            className="space-y-6"
            action="#"
            method="POST"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Your Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#488b8f] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* photo url */}
            <div>
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Photo Url
              </label>
              <div className="mt-2">
                <input
                  id="photo"
                  name="photo"
                  type="text"
                  autoComplete="photo"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#488b8f] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
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

            <div className="font-thin text-xs flex gap-3">
              <input
                onClick={handleTerms}
                type="checkbox"
                name="accept"
                id=""
              />{" "}
              Accept The {/* The button to open modal */}
              <label
                htmlFor="my-modal-6"
                className="link  hover:text-[#488b8f]"
              >
                Term and Conditions
              </label>
            </div>

            <div>
            <button
                type="submit"
                className={`btn bg-[#D74C22] hover:bg-[#E29F28] w-full ${
                  accepted ? "" : "btn-disabled"
                }`}
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Have already an account?{" "}
            <Link
              to="/login"
              className="font-semibold leading-6 text-[#488b8f] hover:text-[#5ea3a3]"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">General terms and conditions!</h3>
          <div className="p-4">
            <ol className="list-decimal">
              <li>
                Content: All recipes and content on this website are provided
                for informational purposes only. The website owners do not
                guarantee the accuracy or completeness of any information
                provided on the website.
              </li>
              <li>
                Intellectual Property: All content, including recipes, images,
                and other materials on this website, are owned by the website
                owners and are protected by copyright and other intellectual
                property laws. No content may be copied, reproduced,
                distributed, or transmitted without the prior written consent of
                the website owners.
              </li>
              <li>
                Intellectual Property: All content, including recipes, images,
                and other materials on this website, are owned by the website
                owners and are protected by copyright and other intellectual
                property laws. No content may be copied, reproduced,
                distributed, or transmitted without the prior written consent of
                the website owners.
              </li>
              <li>
                User Submissions: Users may submit recipes or other content to
                the website owners for publication on the website. By submitting
                content, users grant the website owners a non-exclusive,
                worldwide, royalty-free, perpetual, irrevocable, and fully
                sublicensable right to use, reproduce, modify, adapt, publish,
                translate, create derivative works from, distribute, and display
                such content throughout the world in any media.
              </li>
              <li>
                User Conduct: Users of this website must comply with all
                applicable laws and regulations and must not use the website for
                any unlawful purpose. Users must not post any content that is
                defamatory, obscene, pornographic, or otherwise offensive.
              </li>
              <li>
                Liability: The website owners are not liable for any damages
                arising from the use of this website or any content, including
                recipes, on the website. The website owners are not responsible
                for any loss or damage caused by viruses, hacking, or other
                security breaches.
              </li>
              <li>
                Changes to Terms: The website owners may modify these terms and
                conditions at any time without notice. Users are responsible for
                regularly reviewing these terms and conditions.
              </li>
              <li>
                Governing Law: These terms and conditions are governed by the
                laws of the jurisdiction in which the website owners are
                located.
              </li>
            </ol>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn-main">
              Ok
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
