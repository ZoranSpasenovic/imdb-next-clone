import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center mt-12">
      <Image
        width={100}
        height={100}
        className="h-52"
        src="loadingSpinner.svg"
        alt=""
      />
    </div>
  );
}