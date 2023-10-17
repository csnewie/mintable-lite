import Navbar from "@/components/Common/Navbar";
import UserDetails from "@/components/User/UserDetails";
import UserMainTabs from "@/components/User/UserMainTabs";
import React from "react";

const UserPage = () => {
  //User Header
  //Avatar
  //Item

  //Tabs
  //Items to sell
  //Items in total
  //Brands
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="justify-between font-mono text-sm">
        <UserDetails />
      </div>
      <div className="w-f items-start">
        <UserMainTabs />
      </div>
    </main>
  );
};

export default UserPage;
