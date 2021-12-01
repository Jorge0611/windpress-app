import { SignedIn, SignedOut, withUser } from "@clerk/nextjs";
import IndexNavbar from "./IndexNavbar";
import UserNavbar from "./UserNavbar";

const Navbar = () => {
  return (
    <>
      <SignedIn>
        <UserNavbar />
      </SignedIn>
      <SignedOut>
        <IndexNavbar />
      </SignedOut>
    </>
  );
};
