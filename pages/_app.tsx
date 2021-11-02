import React, { FC } from "react";
import { UserProvider } from "@auth0/nextjs-auth0";

import { IAppProps } from "../types/pageInterfaces";
import Layout from "../components/Layout";

import "../styles/globals.scss";

/**
 * The main component for entire application.
 * @prop    {any}         Component - The component inherited for displaying pages.
 * @prop    {any}         pageProps - The props sent through components.
 * @return  {JSX.Element}           - The JSX code for displaying entire application.
 */
const App: FC<IAppProps> = ({ Component, pageProps }): JSX.Element => {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
};

export default App;
