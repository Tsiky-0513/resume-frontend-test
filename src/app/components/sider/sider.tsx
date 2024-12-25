import Image from "next/image";
import User from "../user/user";
import SideMenu from "./side-menu";
import { MENUS } from "@/app/data/menu-data";
import "./sider-style.css";

export default function Sider() {
  return (
    <>
      <aside
        className="sidebar-container"
        aria-label="Sidebar"
      >
        <div className="logo-container">
          <Image alt="logo" src="/images/logo.svg" width={114.47} height={24} />
        </div>

        <div className="h-[calc(100%_-_115px)] px-3 py-4 overflow-y-auto bg-white dark:bg-white">
          <SideMenu menus={MENUS} />
        </div>
        <User /> 
      </aside>
    </>
  );
}
