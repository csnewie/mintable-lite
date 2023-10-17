import React from "react";

const NftMetadata = () => {
  return (
    <div className="card w-98 bg-base-100 mt-8">
      <div className="card-body">
        <h1 className="card-title">Metadata</h1>
        <div className="flex flex-wrap justify-evenly m-3">
          <div>
            <h1 className="card-title">Contract Address</h1>
            <p>Blockchain</p>
          </div>
          <div className="divider divider-horizontal" />
          <div>
            <h1 className="card-title">Token ID</h1>
            <p>Blockchain</p>
          </div>
          <div className="divider divider-horizontal" />
          <div>
            <h1 className="card-title">Token Name</h1>
            <p>Blockchain</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftMetadata;
