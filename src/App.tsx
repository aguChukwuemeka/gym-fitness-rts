import { useEffect, useState } from "react";
import Navbar from "@/scenes/navbar";
import { SelectedPage } from "@/shared/types";
import { Home } from "@/scenes/home";

function App() {
  const [isOnTopPage, setIsOnTopPage] = useState<boolean>(true);
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsOnTopPage(true);
        setSelectedPage(SelectedPage.Home);
      } else if (window.scrollY !== 0) {
        setIsOnTopPage(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="app bg-gray-20">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isOnTopPage={isOnTopPage}
      />
      <Home setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
