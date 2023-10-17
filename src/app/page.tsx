import Navbar from "@/components/Common/Navbar";
import Image from "next/image";
import LoginModal from "@/components/Auth/LoginModal";

export default function Home() {
  //Main marketplace
  return (
    <main className="flex flex-col items-center">
      <Navbar />
      <div className="w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="hero min-h-screen bg-base-400">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there</h1>
              <p className="py-6">
                Welcome to MintableLite, login to get started and view your
                itemss
              </p>
              <LoginModal />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
