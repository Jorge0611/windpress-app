import Link from "next/link";
import {SignedIn, SignedOut} from "@clerk/nextjs";

const IndexNavbar = () => {
  return (
    <>
      <nav className="flex lg:flex flex-wrap items-center justify-between w-full py-3 px-5 bg-gray-50 shadow-xl">
        <div>
          <span className="tracking-widest text-xl font-semibold text-blue-500">
            Wind
          </span>
          <span className="tracking-widest text-xl font-semibold text-blue-gray-600">
            press
          </span>
        </div>
        <SignedOut>
          <div className="flex flex-row items-center space-x-3">
            <div>
              <Link href={"/auth/signin"}>
                <a className="text-lg text-blue-500 hover:text-blue-gray-600">
                  Log In
                </a>
              </Link>
            </div>
            <div>
              <Link href={"/auth/signup"}>
                <a className="text-lg text-white bg-blue-500 px-4 py-1 rounded-md transition duration-500 hover:bg-blue-700">
                  Sign Up
                </a>
              </Link>
            </div>
          </div>
        </SignedOut>

      </nav>
    </>
  );
};

export default IndexNavbar;
