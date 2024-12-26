'use client'
import { Geist, Geist_Mono } from "next/font/google";
import "./style/globals.css";
import Sider from "./components/sider/sider";
import Footer from "./components/footer/footer";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [openMenu,setOpenMenu] = useState(false);

  const openMenuHandler = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <html lang="en">
      
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={`left-container ${openMenu ? 'open-menu': ''}`}>
          <Sider/>
          <FontAwesomeIcon
                onClick={openMenuHandler}
                width={16}
                icon={fas[!openMenu ? "faBars" : "faCircleXmark"]}
                className="menu-mobile"
              />
        </div>
        <div className="right-container">
          {children}
          <Footer />
        </div>
      </body>
     
    </html>
  );
}
