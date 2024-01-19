import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Company02() {
  const tasks = [
    {
      text: "Design web layout & UX for customer of company with many different fields : Real Estate, Education, Travel,Ecommerce, ect..",
      keywords: [" Real Estate","Education","Travel","Ecommerce" ],
    },
    {
      text: "Re-design & maintain for  big customer as: NovaGroup, LG, Nestles ",
      keywords: ["Migration"],
    },
   //https://timeuniversal.vn/
  ];
  return (
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col spacey-y-2">
        {/* Title */}
        <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide"> 
          Web Design <span className="text-AAsecondary">@ designer</span>
        </span>
        {/* Date */}
        <span className="font-mono text-xs text-gray-500">Jun 2021 – Nov 2021</span>
        <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("/https://timeuniversal.vn", "_blank")}
          >
            www.timeuniversal.vn
          </span>
      </div>
      <div className="flex flex-col space-y-4 sm:text-sm text-xs">
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
  );
}
