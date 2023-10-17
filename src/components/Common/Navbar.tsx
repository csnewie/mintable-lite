"use client";
import React from "react";
import LoginModal from "../Auth/LoginModal";
import SignupModal from "../Auth/SignupModal";
import { usePocketContext } from "@/context/pocketContext";
import { useWalletContext } from "@/context/walletContext";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const { user, logout } = usePocketContext();
  const { wallet, connect } = useWalletContext();
  const router = useRouter();

  console.log(wallet);

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  const handleDashboard = async () => {
    router.push("/user");
  };

  const handleConnect = async () => {
    await connect();
  };

  const handleHomepage = async () => {
    if (user) {
      router.push("/user");
    } else {
      await logout();
      router.push("/");
    }
  };

  return (
    <div className="border-b border-gray-700 navbar bg-base-400 py-5 px-10">
      <div className="flex-1">
        <a
          className="btn btn-ghost normal-case text-xl"
          onClick={handleHomepage}
        >
          MintableLite
        </a>
      </div>
      {wallet ? (
        <div className="w-46 mx-1">
          <p className="truncate hover:text-clip">{wallet.address}</p>
        </div>
      ) : (
        <button className="btn btn-primary mr-4" onClick={handleConnect}>
          Connect Wallet
        </button>
      )}
      {user !== null ? (
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded">
              <img src="/tempavatar.jpg" alt="avatar" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-lg dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={handleDashboard} className="justify-between">
                Dashboard
              </a>
            </li>
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      ) : (
        <div className="flex-none gap-2 justify-between">
          <LoginModal />
          <SignupModal />
        </div>
      )}
    </div>
  );
};

export default Navbar;
