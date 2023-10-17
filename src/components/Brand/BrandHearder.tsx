import React from "react";

const BrandHearder = ({ name, desc }: { name: string; desc: string }) => {
  return (
    <div className="indicator">
      <div className="indicator-item indicator-bottom indicator-start sm:translate-x-6s md:!right-0 md:translate-x-6 m-4">
        <div className="avatar">
          <div className="w-36 rounded">
            <img src="/tempavatar.jpg" />
          </div>
        </div>
      </div>
      <div className="indicator-item indicator-bottom indicator-start sm:translate-c md:!right-0 md:translate-x-44 m-4">
        <div className="m-4">
          <div className="stats shadow">
            <div className="stat place-items-center">
              <div className="stat-title">Items</div>
              <div className="stat-value">31</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title">Items On Sale</div>
              <div className="stat-value text-secondary">20</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title">Views</div>
              <div className="stat-value">1,200</div>
              <div className="stat-desc"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-base-300 h-80">
        <div
          className="hero w-screen h-full"
          style={{
            backgroundImage:
              "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{name}</h1>
              <p className="mb-5">{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandHearder;
