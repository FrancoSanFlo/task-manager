"use client";

import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";
import Dashboard from "@/components/Dashboard";

const Home = () => {
  return (
    <>
      <Header handleButtonClick={() => console.log("Button is clicked!")} />
      <div className="w-full flex flex-col pt-2 md:flex-row h-full">
        <SideMenu />
        <Dashboard />
      </div>
    </>
  );
};

export default Home;
