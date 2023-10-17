"use client";
import React, { useContext, useState } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

interface WalletContextType {
  wallet: any;
  connect: () => void;
}

type Props = {
  children: React.ReactNode;
};

export const WalletContext = React.createContext<WalletContextType | null>(
  null
);

export const WalletProvider = ({ children }: Props) => {
  const [wallet, setWallet] = useState<any>("");
  async function getWeb3Modal() {
    const web3Modal = new Web3Modal({
      cacheProvider: false,
      providerOptions: {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            infuraId: "your-infura-id",
          },
        },
      },
    });
    return web3Modal;
  }

  /* the connect function uses web3 modal to connect to the user's wallet */
  async function connect() {
    try {
      const web3Modal = await getWeb3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.BrowserProvider(connection, "any");
      const accounts = await provider.listAccounts();
      setWallet(accounts[0]);
      localStorage.setItem("isWalletConnected", "true");
    } catch (err) {
      console.log("error:", err);
    }
  }

  //   useEffect(() => {
  //   }, []);

  return (
    <WalletContext.Provider value={{ wallet, connect }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWalletContext = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("Use within WalletProvider");
  }
  return context;
};
