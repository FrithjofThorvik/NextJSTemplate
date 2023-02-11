import { useState } from "react";
import Router from "next/router";

import Layout from "@/components/layout/Layout";

import "@/styles/globals.scss";

interface IAppProps {
  Component: any;
  pageProps: any;
}

const App: React.FC<IAppProps> = ({ Component, pageProps }): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Activate loading when route is changed
  Router.events.on("routeChangeStart", () => {
    setIsLoading(true);
  });

  // Deactivate loader when route change is completed
  Router.events.on("routeChangeComplete", () => {
    setIsLoading(false);
  });

  return (
    <Layout>
      {isLoading ? <p>Loading...</p> : <Component {...pageProps} />}
    </Layout>
  );
};

export default App;
