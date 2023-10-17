import React from "react";
import { useRouter } from "next/navigation";

const NftCard = () => {
  const router = useRouter();

  const handleViewNft = () => {
    router.push("/nft");
  };
  return (
    <div
      className="card w-64 bg-base-100 m-2 shadow-xl cursor-pointer"
      onClick={handleViewNft}
    >
      <figure>
        <img src="/tempavatar.jpg" alt="Shoes" />
      </figure>
      <div className="card-body justify-items-end">
        <div className="flex flex-row justify-between">
          <h2 className="card-title">Shoes!</h2>
          <div className="items-end">
            <div className="badge badge-primary">0.1 ETH</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
