import IndexNavbar from "../components/Navbar/IndexNavbar";
import Head from "next/head";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Windpress</title>
        <meta name="description" content="Next.js web application" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <IndexNavbar />
      <main>
        <section>{children}</section>
      </main>
    </>
  );
};

export default AuthLayout;
