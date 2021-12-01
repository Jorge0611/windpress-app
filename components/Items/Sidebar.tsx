import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const route = useRouter();

  const routes = {
    company: "/testing",
    dashboard: "/",
    progress: "/testing/test",
    tasks: "/testing/test",
    settings: "/testing/test",
    profile: "/testing/test",
  };

  return (
    <>
      <nav className="bg-content-100 md:justify-between md:items-center md:block md:top-0 md:bottom-0 md:w-64 md:min-h-screen md:shadow-inner fixed px-5 py-5 z-10 shadow-lg ">
        <div className="md:flex md:flex-col md:flex-wrap md:items-stretch md:overflow-hidden md:overflow-y-auto flex flex-wrap flex-1 justify-between  items-center w-full mx-auto">
          <ul className="md:block md:space-y-3 hidden">
            <li className="flex">
              <Link href={routes.dashboard}>
                <a
                  className={
                    "inline-flex flex-grow px-2 py-2 items-center text-xs uppercase font-bold text-accent " +
                    (route.pathname == "/testing/test"
                      ? "bg-content-50 rounded text-sm"
                      : "hover:border-accent border")
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-2 -1.5 24 24"
                    className="w-5 mr-2"
                    fill="currentColor"
                  >
                    <path d="M13 20.565v-5a3 3 0 0 0-6 0v5H2a2 2 0 0 1-2-2V7.697a2 2 0 0 1 .971-1.715l8-4.8a2 2 0 0 1 2.058 0l8 4.8A2 2 0 0 1 20 7.697v10.868a2 2 0 0 1-2 2h-5z" />
                  </svg>
                  Dashboard
                </a>
              </Link>
            </li>

            <li className="flex">
              <Link href={routes.progress}>
                <a
                  className={
                    "inline-flex flex-grow px-2 py-2 items-center text-xs uppercase font-bold text-accent " +
                    (route.pathname == "/testing/test"
                      ? "bg-content-50 rounded text-sm"
                      : "hover:border-accent border")
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-2 -2 24 24"
                    className="h-5 w-5 mr-2"
                    fill="currentColor"
                  >
                    <path d="M2 0h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm12 0h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 12h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zM2 12h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z" />
                  </svg>
                  Progress
                </a>
              </Link>
            </li>

            <li className="flex">
              <Link href={routes.tasks}>
                <a
                  className={
                    "inline-flex flex-grow px-2 py-2 items-center text-xs uppercase font-bold text-accent " +
                    (route.pathname == "/testing/test"
                      ? "bg-content-50 rounded text-sm"
                      : "hover:border-accent border")
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-2 -2 24 24"
                    className="h-5 w-5 mr-2"
                    fill="currentColor"
                  >
                    <path d="M6 0h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6zm6 9a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2h-3zm-2 4a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2h-5zm0-8a1 1 0 1 0 0 2h5a1 1 0 0 0 0-2h-5zm-4.172 5.243l-.707-.707a1 1 0 1 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.415 0l2.828-2.828A1 1 0 0 0 7.95 8.12l-2.122 2.122z" />
                  </svg>
                  Tasks
                </a>
              </Link>
            </li>
          </ul>

          <hr className="md:flex md:my-5 hidden border-1 border-accent" />

          <ul className="md:block md:space-y-3 hidden">
            <li className="flex">
              <Link href={routes.settings}>
                <a
                  className={
                    "inline-flex flex-grow px-2 py-2 items-center text-xs uppercase font-bold text-accent " +
                    (route.pathname == "/testing/test"
                      ? "bg-content-50 rounded text-sm"
                      : "hover:border-accent border")
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Settings
                </a>
              </Link>
            </li>

            <li className="flex">
              <Link href={routes.profile}>
                <a
                  className={
                    "inline-flex flex-grow px-2 py-2 items-center text-xs uppercase font-bold text-accent " +
                    (route.pathname == "/testing/test"
                      ? "bg-content-50 rounded text-sm"
                      : "hover:border-accent border")
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Profile
                </a>
              </Link>
            </li>
          </ul>

          <hr className="md:flex md:my-5 hidden" />

          <div className="md:block md:space-y-6 hidden">
            <Link href="/">
              <a className="inline-flex items-center text-xs uppercase font-bold text-accent hover:text-blue-gray-100 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clipRule="evenodd"
                  />
                </svg>
                Log out
              </a>
            </Link>
          </div>
        </div>
        {isMenuOpen && (
          <div className="bg-white m-3 py-3 px-6 shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded">
            <div className="flex flex-wrap items-center justify-between w-full mx-auto">
              <div>
                <Link href="/">
                  <a className="text-base uppercase font-bold text-blue-500">
                    Company
                  </a>
                </Link>
              </div>
              <div>
                <button
                  className="md:hidden bg-transparent border border-solid rounded"
                  onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <hr className="my-4" />
            <ul className="space-y-4">
              <li>
                <Link href={routes.dashboard}>
                  <a className="inline-flex items-center text-sm uppercase text-primary font-bold hover:text-blue-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z" />
                    </svg>
                    Dashboard
                  </a>
                </Link>
              </li>
              <li>
                <Link href={routes.progress}>
                  <a className="inline-flex items-center text-sm uppercase text-primary font-bold hover:text-blue-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                    </svg>
                    Progress
                  </a>
                </Link>
              </li>
              <li>
                <Link href={routes.tasks}>
                  <a className="inline-flex items-center text-sm uppercase text-primary font-bold hover:text-blue-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path
                        fillRule="evenodd"
                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Tasks
                  </a>
                </Link>
              </li>
            </ul>
            <hr className="my-4" />
            <ul className="space-y-4">
              <li>
                <Link href={routes.settings}>
                  <a className="inline-flex items-center text-sm uppercase text-primary font-bold hover:text-blue-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Settings
                  </a>
                </Link>
              </li>
              <li>
                <Link href={routes.profile}>
                  <a className="inline-flex items-center text-sm uppercase text-primary font-bold hover:text-blue-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Profile
                  </a>
                </Link>
              </li>
            </ul>
            <hr className="my-4" />
            <ul className="space-y-4">
              <li>
                <Link href="/">
                  <a className="inline-flex items-center text-sm uppercase text-primary font-bold hover:text-blue-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Log out
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Sidebar;
