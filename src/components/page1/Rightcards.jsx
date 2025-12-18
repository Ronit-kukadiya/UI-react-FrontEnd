import React from "react";
import { MoveRight } from "lucide-react";
const Rightcards = (props) => {
  return (
    <div className="h-full w-64 overflow-hidden relative shrink-0 bg-gray-200 rounded-3xl">
      <img src={props.img} alt="" className="w-full h-full object-cover" />
      <div className="absolute bg-black/15 top-0 left-0 h-full w-full p-6 flex flex-col justify-between">
        <h2 className="bg-[#6600ff] text-white rounded-full h-12 w-12 flex justify-center items-center text-2xl font-semibold">
          {props.id + 1}
        </h2>
        <div>
          <p className="text-lg leading-loose text-white mb-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            {props.intro}
          </p>
          <div className="flex justify-between">
            <button className="bg-[#8739fd] text-white font-medium px-8 py-2 rounded-full ">
              {props.tag}
            </button>
            <a href={props.link} target="_blank">
              <button className="bg-[#8739fd] text-white font-medium px-5 py-2 rounded-full ">
                <MoveRight />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightcards;
