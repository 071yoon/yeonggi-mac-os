import React, { ReactNode } from "react";
import Image from "next/image";
import Navigation from "./navigation/Navigation";
import Dock from "./dock/Dock";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children }: Props) => (
  <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
    <Image
      src="/assets/images/monterey-wallpaper.jpg"
      alt="MontereyWallpaper"
      fill
      style={{ objectFit: "cover" }}
      loading="eager"
      priority={true}
    />
    <header>
      <Navigation />
    </header>
    {children}
    <Dock />
  </div>
);

export default Layout;
