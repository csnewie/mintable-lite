import React from "react";

const NftDisplayDetails = () => {
  return (
    <div className="flex flex-col h-96 place-items-center">
      <div className="card w-96 bg-base-100 shadow-xl m-1">
        <div className="card-body">
          <h2 className="card-title">ETH</h2>
          <p>Blockchain</p>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl m-1">
        <div className="card-body">
          <h2 className="card-title">Nft Title</h2>
          <p>Nft Description</p>
          <div className="divider" />
          <div className="badge badge-lg">Seller</div>
          Seller Details
          <div className="divider" />
          <div className="badge badge-lg">Store</div>
          Store Details
          <div className="divider" />
          <button className="btn btn-primary">Offer</button>
          {/* <button className="btn btn-primary">Sell</button> */}
        </div>
      </div>
    </div>
  );
};

export default NftDisplayDetails;
