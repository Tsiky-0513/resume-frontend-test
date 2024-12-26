import Banner from "./components/banner/banner";
import "./style/page.css";
import PersonalInfo from "./components/personal-info/personal-info";
import { ShowProfile } from "./components/show-profile/show-profile";
import SupportTeam from "./components/support-team/support-team";

export default function Home() {
  return (
    <>
      <main>
        <div className="banner">
          <Banner />
        </div>
        <div className="personal-info">
          <PersonalInfo />
        </div>
        <div className="show-profile">
          <ShowProfile />
        </div>
        <div className="support-team">
          <SupportTeam />
        </div>
      </main>
    </>
  );
}
