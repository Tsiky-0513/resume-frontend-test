import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "@/app/interfaces/menu-interface"
import "./sider-style.css"


export interface SideMenuProps {
  menus: Menu[];
}

export default function SideMenu({ menus }: SideMenuProps) {
  return (
    <ul className="menu-container">
      {menus.map((menu, index) => (
        <li key={index} className={`${menu.className} menu-item`}>
          <Link
            href="#"
          >
            {menu.prefixIcon && (
              <FontAwesomeIcon width={16} icon={fas[menu.prefixIcon]} />
            )}
            {menu.prefixImage && (
              <Image
                width={16}
                height={16}
                alt="icon-menu"
                src={`/images/icons/${menu.prefixImage}.png`}
              />
            )}
            <span className={"ms-3 flex-1 " + menu.className}>
              {menu.label}
            </span>
            {menu.suffixIcon && (
              <FontAwesomeIcon
                width={16}
                icon={fas[menu.suffixIcon]}
                className="float-right"
              />
            )}
            {menu.suffixImage && (
              <Image
                width={16}
                height={16}
                alt="icon-menu"
                src={`/images/icons/${menu.suffixImage}.png`}
              />
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
