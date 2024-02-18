"use client";

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
    <UserProvider>
      <AvalancheMacApp>{children}</AvalancheMacApp>
    </UserProvider>
  );
};
