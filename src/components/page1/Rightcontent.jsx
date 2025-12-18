import React from "react";
import Rightcards from "./Rightcards";

const Rightcontent = (props) => {
  return (
    <div
      id="right"
      className=" h-full p-6 w-2/3 flex flex-nowrap gap-6 overflow-x-auto bg-[#e0e2ff] shadow-2xl rounded-4xl "
    >
      {props.user.map(function (elem, index) {
        return (
          <Rightcards
            key={index}
            id={index}
            img={elem.img}
            intro={elem.intro}
            tag={elem.tag}
            link={elem.link}
            direction="left"
            speed="normal"
          />
        );
      })}
    </div>
  );
};

export default Rightcontent;
