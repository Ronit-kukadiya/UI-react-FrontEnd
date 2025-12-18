import React from "react";
import Leftcontent from "./Leftcontent";
import Rightcontent from "./Rightcontent";

const Page1content = (props) => {
  return (
    <>
      <div className="pb-16 bg-[#f2f3ff] pt-6 flex gap-10 items-center px-18 h-[90vh]">
        <Leftcontent />
        <Rightcontent user={props.user} />
      </div>
    </>
  );
};

export default Page1content;
