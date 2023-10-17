"use client";
import React, { useState } from "react";
import NftCard from "../Common/NftCard";
import BrandCard from "../Common/BrandCard";

const UserMainTabs = () => {
  let [selectedTab, setSelectedTab] = useState<string>("all");

  const handleSelectTab = (e: string) => {
    setSelectedTab(e);
  };

  return (
    <div className="items-start">
      <div className="tabs">
        <a
          className={`tab tab-lg tab-lifted ${
            selectedTab == "all" ? "tab-active" : ""
          }`}
          id="all"
          onClick={(e) => {
            handleSelectTab(e.currentTarget.id);
          }}
        >
          All Nfts
        </a>
        <a
          className={`tab tab-lg tab-lifted ${
            selectedTab == "sale" ? "tab-active" : ""
          }`}
          id="sale"
          onClick={(e) => {
            handleSelectTab(e.currentTarget.id);
          }}
        >
          Nfts for sale
        </a>
        <a
          className={`tab tab-lg tab-lifted ${
            selectedTab == "brands" ? "tab-active" : ""
          }`}
          id="brands"
          onClick={(e) => {
            handleSelectTab(e.currentTarget.id);
          }}
        >
          Brands
        </a>
      </div>
      <div className="flex flex-wrap justify-start mx-5 mt-10 w-fit">
        {selectedTab == "brands" ? (
          <div>
            <BrandCard />
          </div>
        ) : (
          <div>
            <NftCard />
          </div>
        )}
        {/* Display Nft cards if "all" or "sale" */}
        {/* Display Brand cards if Store */}
      </div>
    </div>
  );
};

export default UserMainTabs;
