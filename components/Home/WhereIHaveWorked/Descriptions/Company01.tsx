import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Company01() {
  const tasks = [
    {
      text: "Worked   with position the software engineer in the mobile application & web apllication with Wordpress,React-Native, Tailwind CSS, GraphQL,AWS, MongoDB,ect..",
      keywords: ["Wordpress","React-Native", "MObile", "Tailwind CSS", "GraphQL","AWS" ],
    },
    {
      text: "Conducted research user to develope website functionality.",
      keywords: ["functionality", "research user", "user base"],
    },
    {
      text: "Implemented website design and enhanced interactivity.",
      keywords: ["website design",""],
    },
    {
      text: "Work closely with the team to come up with ideas and feature updates",
      keywords: ["ideas", "feature updates"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer <span className="text-AAsecondary">@ mobile development</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Dec 2016 – May 2020</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://kyanon.digital/", "_blank")}
          >
            www.kyanon.digital
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
