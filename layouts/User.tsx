import UserNavbar from "../components/Navbar/UserNavbar";
import Head from "next/head";
import { ReactNode } from "react";

type Props = {
  title?: string;
  description?: string;
  children?: ReactNode;
};

const UserLayout = ({
  title = "Windpress",
  description = "Next.js web application",
  children,
}: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <UserNavbar />
      <main>
        <section className="">{children}</section>
      </main>
    </>
  );
};

export default UserLayout;
