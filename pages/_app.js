import App from "next/app";
import React from "react";
import Page from "../components/Page";
import { UserProvider } from "../components/context/UserProvider";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <UserProvider>
        <Page>
          <Component {...pageProps} />
        </Page>
      </UserProvider>
    );
  }
}
