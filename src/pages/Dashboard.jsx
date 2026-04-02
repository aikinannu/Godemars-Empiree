// src/pages/Dashboard.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import SideDrawer from "../components/SideDrawer";
import FloatingButton from "../components/FloatingButton";
import CreatePostModal from "../components/CreatePostModal";
import HomeFeed from "./HomeFeed";
import Reels from "./Reels";
import Market from "./Market";
import Community from "./Community";
import Profile from "./Profile";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [createPostOpen, setCreatePostOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <HomeFeed />;
      case "reels":
        return <Reels />;
      case "market":
        return <Market />;
      case "community":
        return <Community />;
      case "profile":
        return <Profile />;
      default:
        return <HomeFeed />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-gray-100">
      <Navbar onMenuClick={() => setDrawerOpen(true)} />
      <SideDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <main className="flex-grow p-4">{renderContent()}</main>

      <FloatingButton onClick={() => setCreatePostOpen(true)} />
      <CreatePostModal isOpen={createPostOpen} onClose={() => setCreatePostOpen(false)} />

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default Dashboard;
