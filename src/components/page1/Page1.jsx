import React from "react";
import Nav from "./Nav";
import Page1content from "./Page1content";

function Page1(props) {
  return (
    <div className="h-screen w-full">
      <Nav />
      <Page1content user={props.user} />
    </div>
  );
}

export default Page1;
