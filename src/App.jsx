import React from "react";
import { ShieldX } from "lucide-react";
import Page1 from "./components/page1/Page1";
// import Page2 from "./components/page2/Page2";
import "./App.css";
import "./data/user.json";
const App = () => {
  const user = [
    {
      img: "src/assets/wallhaven-gpjyvl_1920x1080.png",
      intro:
        "I am very satisfied with my job role and the supportive team culture here.",
      tag: "Satisfied",
      link: "https://github.com/Ronit-kukadiya",
    },
    {
      img: "src/assets/wallpaperflare.com_wallpaper (4).jpg",
      intro:
        "I am motivated by challenging projects and the chance to develop new skills.",
      tag: "Motivated",
      link: "https://www.linkedin.com/in/ronit-kukadiya/",
    },
    {
      img: "src/assets/ghost.jpg",
      intro:
        "I feel fulfilled in my work, contributing meaningfully to team goals and success.",
      tag: "Fulfilled",
      link: "https://leetcode.com/u/Ronit_RK/",
    },
    {
      img: "src/assets/Screenshot (348).png",
      intro:
        "I am fully engaged in my work and appreciate the collaborative team environment.",
      tag: "Engaged",
      link: "https://www.instagram.com/kukadiyaronit/",
    },
    {
      img: "src/assets/Screenshot (561).png",
      intro:
        "I feel appreciated for my hard work and valued by my team members they are like family.",
      tag: "Appreciated",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      img: "src/assets/Screenshot (702).png",
      intro:
        "I am content with my work-life balance and the variety of job responsibilities.",
      tag: "Content",
      link: "https://www.youtube.com/watch?v=fC7oUOUEEi4",
    },
    {
      img: "src/assets/Screenshot (1023).png",
      intro:
        "I enjoy the professional development programs and the opportunities to learn new skills.",
      tag: "Enjoying",
      link: "https://www.rockstargames.com/VI",
    },
    {
      img: "src/assets/Screenshot (164).png",
      intro:
        "I feel optimistic about my career growth and future opportunities within the company.",
      tag: "Optimistic",
      link: "https://www.wikipedia.org/",
    },
    {
      img: "src/assets/Screenshot (800).png",
      intro:
        "I feel well-supported by management and have access to all necessary resources.",
      tag: "Supported",
      link: "https://chatgpt.com/",
    },
    {
      img: "src/assets/Screenshot (267).png",
      intro:
        "I am proud of my contributions and how they align with the company's mission.",
      tag: "Proud",
      link: "https://www.myinstants.com/en/instant/bruh/",
    },
  ];
  // const user = require("./data/user.json");
  return (
    <>
      <Page1 user={user} />
      {/* <Page2 /> */}
    </>
  );
};

export default App;
