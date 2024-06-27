import Image from "next/image";
import React from "react";

const galleryPage = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {["3.jpg", "2.jpg", "1.jpg", "4.png"].map((i) => (
        <Image key={i} src={`/${i}`} alt="codings" width={1365} height={720} />
      ))}
    </div>
  );
};

export default galleryPage;
