import type { NextPage } from 'next'
import UserLayout from "../layouts/User";
import AuthLayout from "../layouts/Auth";
import { SignedIn} from "@clerk/nextjs";
import { router } from "next/client";
import { useRouter } from "next/router";


const Home = () => {
  const router = useRouter();

  return (
    <>
    <div className="flex justify-center landing-background min-h-screen">
      <div className="block w-full">
        <div className="px-5 py-32">
          <div className="space-y-4 w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <h1 className="text-5xl tracking-wide font-bold text-primary" >React project manager</h1>
            <p className="text-xl font-medium text-primary" >
              A project manager created using React + Tailwind + Express. <br />
              This project implements these three technologies to build a  <br />
              very efficient and easy-to-use project manager.
            </p>
            <div className="flex flex-grow justify-center space-x-3">
              <a href="https://github.com/Jorge0611/express-react-app" className="text-white bg-blue-500 px-4 py-2 hover:bg-blue-700 text-lg font-semibold px-4 py-2 rounded">
                GitHub Repository
              </a>
              <button className="text-white bg-blue-500 px-4 py-2 hover:bg-blue-700   text-white text-lg font-semibold px-4 py-2 rounded">
                Landing Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home;

Home.getLayout = function getLayout(page: JSX.Element) {
  return (
    <AuthLayout>
      {page}
    </AuthLayout>
  );
};
