import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import "./user-style.css";
export default function User() {
  return (
    <div className="user-container">
      <div className="user-info-container">
        <Image
          width={32}
          height={32}
          src="/images/user.png"
          alt="Customer Photo"
          className="object-cover w-full h-full "
        />
        <p className="username">Carla</p>
      </div>

      <FontAwesomeIcon width={16} icon={fas.faGear} className="ml-auto" />
    </div>
  );
}
