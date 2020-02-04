import App from "next/app";
import React from "react";
import Page from "../components/Page";
import { UserProvider } from "../components/context/UserProvider";
import { AvailabilityProvider } from "../components/context/AvailabilityProvider";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <UserProvider>
        <AvailabilityProvider>
          <Page>
            <Component {...pageProps} />
          </Page>
        </AvailabilityProvider>
      </UserProvider>
    );
  }
}
