"use client";
import React, { useRef } from "react";
import { usePocketContext } from "@/context/pocketContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
const LoginModal = () => {
  const modal = useRef<HTMLDialogElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { login } = usePocketContext();

  const handleSubmit = async () => {
    if (emailRef.current?.value! && passwordRef.current?.value!) {
      await login(emailRef.current?.value!, passwordRef.current?.value!);
      router.push("/user");
    }
  };

  return (
    <div>
      <dialog id="loginmodal" className="modal" ref={modal}>
        <div className="bg-slate-100 text-gray-800 modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Welcome Back</h3>
          <p className="py-4 flex-wrap">
            Start creating and selling NFTs with MintableLite
          </p>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-gray-800">Username</span>
            </label>
            <input
              ref={emailRef}
              type="text"
              placeholder="Type here"
              className="bg-slate-200 input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-gray-800">Password</span>
            </label>
            <input
              ref={passwordRef}
              type="text"
              placeholder="Type here"
              className="bg-slate-200 input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs pt-4">
            <button className="btn btn-primary" onClick={handleSubmit}>
              Login
            </button>
          </div>
        </div>
      </dialog>
      <button
        className="btn btn-outline"
        onClick={() => modal.current?.showModal()}
      >
        Login
      </button>
    </div>
  );
};

export default LoginModal;
