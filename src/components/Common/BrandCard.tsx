import React from "react";
import { useRouter } from "next/navigation";

const BrandCard = () => {
  const router = useRouter();

  const handleViewBrand = () => {
    router.push("/brand/Test");
  };

  return (
    <div
      className="card w-64 bg-base-100 shadow-xl cursor-pointer"
      onClick={handleViewBrand}
    >
      <figure>
        <img src="/tempavatar.jpg" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Test</h2>
        <p>Brand description</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Game</div>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
