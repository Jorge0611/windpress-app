import { SignIn } from "@clerk/clerk-react";
const SignInPage = () => {
  return <SignIn afterSignInUrl={"/user/"} />;
};

export default SignInPage;
