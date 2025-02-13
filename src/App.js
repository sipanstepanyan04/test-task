import { Header } from "./components/header/Header";
import { BannerTop } from "./components/banner-top/BannerTop";
import { AboutOurApp } from "./components/about-our-app/AboutOurApp";
import { DownloadApp } from "./components/download-app-now/DownloadApp";
import { HowToUse } from "./components/how-to-use/HowToUse";
import { OurTeam } from "./components/our-team/OurTeam";
import { OurCustomers } from "./components/our-customers/OurCustomers";
import { RecentBlog } from "./components/recent-blog/RecentBlog";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <BannerTop />
        <AboutOurApp />
        <DownloadApp />
        <HowToUse />
        <OurTeam />
        <OurCustomers />
        <RecentBlog />
      </main>
      <Footer />
    </>
  );
}

export default App;
