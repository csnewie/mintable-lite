import React from "react";
import Image from "next/image";

const NftDisplay = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl m-1 place-items-center">
      <figure className="relative">
        <Image
          className="rounded-xl"
          src="https://images.pexels.com/photos/12809204/pexels-photo-12809204.jpeg"
          alt="Shoes"
          width={500}
          height={500}
        />
      </figure>
    </div>
  );
};

export default NftDisplay;
