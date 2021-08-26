import React from "react";
import Head from "next/head";

const index: React.FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Welcome to devR todo app!</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta name="author" content="DevR (Ratul-devR)" />
        <meta name="description" content="A simple todo application" />
        <meta name="keywords" content="todo app, devR, website" />
      </Head>
      <div>{children}</div>
    </div>
  );
};

export default index;
