import Image from "next/image";
import "./banner-style.css"

export default function Banner() {
  return (
    <div className="banner-container">
      <Image
        src="/images/banner-image.png"
        alt="/images/banner-image.png"
        width={72}
        height={72}
        priority={true}
      />
      <div className="text-white">
        <h1 className="title">Premium Account</h1>
        <p className="decription">
          You have a premium account, granting you access to all the remarkable
          features offered by ResumeDone. With this privilege, you can indulge
          in the freedom of downloading an unlimited number of resumes and cover
          letters in both PDF and Word formats.
        </p>
      </div>
    </div>
  );
}
