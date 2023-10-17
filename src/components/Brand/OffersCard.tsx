import React from "react";

const OffersCard = () => {
  return (
    <div className="card w-64 bg-base-100 shadow-xl cursor-pointer m-2">
      <div className="card-body">
        <h2 className="card-title">Offer title</h2>
        <p>Offer descriptions</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Offer tag</div>
        </div>
      </div>
    </div>
  );
};

export default OffersCard;
