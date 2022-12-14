import React, { ReactNode } from "react";
import Image from "next/image";
import Navigation from "./navigation/Navigation";
import Dock from "./dock/Dock";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children }: Props) => (
  <div>
    <Image
      src="/assets/images/monterey-wallpaper.jpg"
      alt="Monterey"
      fill
      style={{ objectFit: "cover" }}
      quality={100}
    />
    <header>
      <Navigation />
    </header>
    {children}
    <Dock />
  </div>
);

export default Layout;
