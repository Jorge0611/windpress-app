import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { useRouter } from "next/router";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";


type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const publicPages: string[] = ["/"];

function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  const getLayout = Component.getLayout ?? ((page) => page);
  const { pathname } = useRouter();
  const isPublicPage = publicPages.includes(pathname);
  return (
    <ClerkProvider>
      {isPublicPage ? (
        getLayout(<Component {...pageProps} />)
      ) : (
        <>
          <SignedIn>{getLayout(<Component {...pageProps} />)}</SignedIn>
          <SignedOut>{getLayout(<RedirectToSignIn />)}</SignedOut>
        </>
      )}
    </ClerkProvider>
  );
}

export default MyApp;
