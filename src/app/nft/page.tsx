import Navbar from "@/components/Common/Navbar";
import NftDisplay from "@/components/Nft/NftDisplay";
import NftDisplayDetails from "@/components/Nft/NftDisplayDetails";
import NftMetadata from "@/components/Nft/NftMetadata";
import React from "react";

const NftPage = () => {
  //Image
  //Display Data:
  //Seller information
  //Pricing
  //Metadata:
  //
  return (
    <main className="flex flex-col items-center">
      <Navbar />
      <div className="p-16 h-screen font-mono text-sm">
        <div className="flex flex-col">
          <div className="flex flex-wrap items-stretch">
            <div className="w-50 sm:h-75 md:w-50 lg:w-50 md:h-75 lg:h-75 bg-base-500">
              <NftDisplay />
            </div>
            <div className="w-50 md:w-50 lg:w-50 bg-base-500 place-items-center">
              <NftDisplayDetails />
            </div>
          </div>
          <div className="w-100 md:w-100 lg:w-100 place-items-center">
            <NftMetadata />
          </div>
        </div>
      </div>
    </main>
  );
};

export default NftPage;
