import Banner from "./components/banner/banner";
import  "./style/page.css";
import PersonalInfo from "./components/personal-info/personal-info";

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
      </main>
    </> 
  );
}
