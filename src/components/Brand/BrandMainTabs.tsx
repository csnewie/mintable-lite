"use client";
import React, { useState } from "react";
import NftCard from "../Common/NftCard";
import OffersCard from "./OffersCard";

const BrandMainTabs = ({
  items,
  offers,
}: {
  items: number[];
  offers: number[];
}) => {
  let [selectedTab, setSelectedTab] = useState<string>("items");

  const handleSelectTab = (e: string) => {
    setSelectedTab(e);
  };
  return (
    <div className="items-start">
      <div className="tabs">
        <a
          className={`tab tab-lg tab-lifted ${
            selectedTab == "items" ? "tab-active" : ""
          }`}
          id="items"
          onClick={(e) => {
            handleSelectTab(e.currentTarget.id);
          }}
        >
          Items
        </a>
        <a
          className={`tab tab-lg tab-lifted ${
            selectedTab == "offers" ? "tab-active" : ""
          }`}
          id="offers"
          onClick={(e) => {
            handleSelectTab(e.currentTarget.id);
          }}
        >
          Offers
        </a>
      </div>
      <div className="flex flex-wrap justify-start mx-5 mt-10 w-fit">
        {selectedTab == "items" ? (
          <div className="flex flex-wrap justify-start mx-5 mt-10 w-fit">
            {items.map((item, key) => {
              return <NftCard key={item} />;
            })}
          </div>
        ) : (
          <div className="flex flex-wrap justify-start mx-5 mt-10 w-fit">
            {offers.map((offer, key) => {
              return <OffersCard key={offer} />;
            })}
          </div>
        )}
        {/* Display Nft cards if "all" or "sale" */}
        {/* Display Brand cards if Store */}
      </div>
    </div>
  );
};

export default BrandMainTabs;
