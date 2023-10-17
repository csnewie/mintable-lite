import React, { FC } from "react";
import Navbar from "@/components/Common/Navbar";
import BrandHearder from "@/components/Brand/BrandHearder";
import BrandMainTabs from "@/components/Brand/BrandMainTabs";

const BrandList = async () => {
  //Call to get list of brands
  let brands = {
    Starbucks: {
      id: 1,
      name: "Starbucks",
      desc: "Drinks related items, get a free drink once every week for April when you show this at the counter.",
      offerid: [1, 2],
      nftid: [1, 2, 3, 4],
    },
    Test: {
      id: 2,
      name: "Test",
      desc: "Test description",
      offerid: [1],
      nftid: [1, 2, 3],
    },
  };
  return brands;
};

interface brandItem {
  name: string;
  id: number;
  desc: string;
  offerid: number[];
  nftid: number[];
}

interface propsPage {
  params: {
    id: string;
  };
}

const BrandPage: FC<propsPage> = async ({ params }) => {
  console.log(params);
  const brands: Record<string, brandItem> = await BrandList();

  console.log(brands[params.id]);

  //Store Header
  //Display
  //Image

  //Tabs
  //Items to sell
  //Offers
  return (
    <main className="flex flex-col items-center">
      <Navbar />
      <div className="h-screen font-mono text-sm">
        <div className="flex flex-col">
          <div className="w-full">
            <BrandHearder
              name={brands[params.id].name}
              desc={brands[params.id].desc}
            />
          </div>
          <div className="pt-20">
            <BrandMainTabs
              items={brands[params.id].nftid}
              offers={brands[params.id].offerid}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default BrandPage;
