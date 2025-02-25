import React from "react";
import NavBar from "../../components/NavBar";
import Search from "../../components/Search";
import PillList from "../../components/CollectionList";
import MushroomList1 from "../../components/MushroomList1";
import CollectionList from "../../components/CollectionList";

export default function DashboardPage() {
  return (
    <div className="dashboard-container">
      {/* Background Icons */}
      <img src="/icons/mush2.png" alt="Mushroom" className="background-mushroom" />
      <img src="/icons/overlay-icon.png" alt="Overlay Icon" className="overlay-icon" />

      {/* Status Bar */}
      <img src="/icons/status_bar.png" alt="Status Bar" className="status-bar" />

      {/* Gray Content Box */}
      <div className="content-box">
        <Search />
        <CollectionList />
        <MushroomList1 />
      </div>

      {/* Bottom Nav */}
      <div className="bottom-nav">
        <NavBar />
      </div>
    </div>
  );
}
