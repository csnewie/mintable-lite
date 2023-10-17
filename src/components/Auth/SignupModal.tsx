"use client";
import React, { useRef } from "react";

const SignupModal = () => {
  const modal = useRef<HTMLDialogElement>(null);

  return (
    <div>
      <dialog id="signupmodal" className="modal" ref={modal}>
        <div className="bg-slate-100 text-gray-800 modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Get Started</h3>
          <p className="py-4 flex-wrap">
            Start creating and selling NFTs with MintableLite
          </p>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-gray-800">Username</span>
            </label>
            <input
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
              type="text"
              placeholder="Type here"
              className="bg-slate-200 input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs pt-4">
            <button className="btn btn-primary">Sign up</button>
          </div>
        </div>
      </dialog>
      <button
        className="btn btn-primary"
        onClick={() => modal.current?.showModal()}
      >
        Sign up
      </button>
    </div>
  );
};

export default SignupModal;
