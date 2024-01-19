import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function FeverTokens() {
  const tasks = [
    {
      text: "Research & design UX/UI, for product Web 3 of company & customers",
      keywords: ["Web 3","Research","design UX/UI"],
    },
    {
      text: " Design Product for apps blockchain, DApp & Game-Fi , ect...",
      keywords: ["blockchain","DApp","Game-Fi"],
    },
    {
      text: "Support write document, guiline & BA documemt product for team development",
      keywords: ["document","guiline","BA documemt "],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          UX/UI Designer, Product Design <span className="text-AAsecondary">@ designer, ba</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Jan/2022 – Present</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https://luckytech.io/", "_blank")}
          >
            www.luckytech.io
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
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
