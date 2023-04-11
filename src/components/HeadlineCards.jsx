import React from "react";
import HeadlineCard from "./HeadlineCard";

const HeadlineCards = ({ text1, text2, image }) => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      <HeadlineCard />
    </div>
  );
};

export default HeadlineCards;
