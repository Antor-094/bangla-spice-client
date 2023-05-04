import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
// import "../../Styles/Styles.css";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
// import { AuthContext } from "../../AuthProbider/AuthProvider";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block hover:text-[#add2c9] h-6 w-6 text-[#488b8f]"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block hover:text-[#add2c9] h-6 w-6 text-[#488b8f]"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex  lg:ms-0 flex-shrink-0 items-center">
                  <p className="hidden h-8 w-auto lg:block text-[#488b8f] font-bold text-xl">
                    <Link to="/">Bangla Table</Link>
                  </p>
                  <p className="block h-8 w-auto lg:hidden text-[#488b8f] font-bold text-xl">
                    <Link to="/">Bangla Table</Link>
                  </p>
                </div>
                <div className="hidden ms-60 sm:ml-[40%] sm:block">
                  <div className="flex items-center space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) =>
                          isActive
                            ? "text-[#488b8f] text-lg font-medium"
                            : "text-black hover:bg-[#488b8f] hover:text-white rounded-md px-3 py-2 text-lg font-medium"
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu
                  as="div"
                  className="relative ml-3 flex items-center gap-3"
                >
                  {user ? (
                    <>
                      <button
                        onClick={handleLogOut}
                        className="btn-main hidden lg:block bg-[#488b8f] p-2 text-white rounded font-bold"
                      >
                        Log out
                      </button>
                    </>
                  ) : (
                    <Link to="/login">
                      <button className="btn-main bg-[#488b8f] p-2 rounded font-bold text-white">Login</button>
                    </Link>
                  )}
                  {user ? (
                    <>
                      <div
                        className="tooltip tooltip-left lg:tooltip-top"
                        data-tip={user?.displayName}
                      >
                        <Menu.Button className="flex rounded-full bg-gray-800 text-sm   focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={user?.photoURL}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  className={classNames(
                    "text-black hover:bg-[#488b8f] hover:text-white block  rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#488b8f] text-lg font-medium hover:bg-[#488b8f] hover:text-white"
                        : "w-full flex justify-start"
                    }
                    to={item.href}
                  >
                    {item.name}
                  </NavLink>
                </Disclosure.Button>
              ))}
              {user ? (
                <>
                  <button
                    onClick={handleLogOut}
                    className="text-black hover:bg-[#488b8f] hover:text-white  block rounded-md px-3 py-2 text-base font-medium  text-start"
                  >
                    Log out
                  </button>
                </>
              ) : (
                <></>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
