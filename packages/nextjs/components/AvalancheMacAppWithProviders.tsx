"use client";

import { Avalanche } from "@particle-network/chains";
import { ModalProvider } from "@particle-network/connectkit";
import "@particle-network/connectkit/dist/index.css";
import { evmWallets } from "@particle-network/connectors";
import { Toaster } from "react-hot-toast";
import { Footer } from "~~/components/Footer";
import { Header } from "~~/components/Header";
import { UserProvider } from "~~/context/globalState";

const AvalancheMacApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="relative flex flex-col flex-1">{children}</main>
        <Footer />
      </div>
      <Toaster />
    </>
  );
};

export const AvalancheMacAppWithProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ModalProvider
      options={{
        projectId: process.env.NEXT_PUBLIC_PARTICLE_PROJECT_ID as string,
        clientKey: process.env.NEXT_PUBLIC_PARTICLE_CLIENT_KEY as string,
        appId: process.env.NEXT_PUBLIC_PARTICLE_APP_ID as string,
        chains: [Avalanche],
      }}
    >
      <UserProvider>
        <AvalancheMacApp>{children}</AvalancheMacApp>
      </UserProvider>
    </ModalProvider>
  );
};
