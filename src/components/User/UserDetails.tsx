"use client";
import React from "react";
import { usePocketContext } from "@/context/pocketContext";

const UserDetails = () => {
  const { user, token } = usePocketContext();
  console.log(user, token);

  return (
    <div className="flex flex-row justify-center items-center">
      <div className="m-4">
        <div className="avatar">
          <div className="w-60 rounded">
            <img src="/tempavatar.jpg" />
          </div>
        </div>
      </div>
      <div className="m-4">
        <div className="card bg-base-100 shadow-xl mb-2 p-4 items-start justify-start">
          <h2 className="card-title">{user?.username}</h2>
          <p>Description</p>
        </div>
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
            <div className="stat-title">Brands</div>
            <div className="stat-value">2</div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-title">Views</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
