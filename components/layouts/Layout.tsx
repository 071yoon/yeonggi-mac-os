import React, { ReactNode } from "react";
import Image from "next/image";
import Navigation from "./navigation/Navigation";
import Dock from "./dock/Dock";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children }: Props) => (
  <div
    style={{ width: "100vw", height: "100vh", userSelect: "none" }}
    onDrag={(e) => e.preventDefault()}
  >
    <header>
      <Navigation />
    </header>
    {children}
    <Dock />
  </div>
);

export default Layout;
