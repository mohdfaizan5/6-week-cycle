"use client";
import React from "react";

interface roadmapSchema {
  title: string;
  isCompleted: boolean;
}

const roadmap: roadmapSchema[] = [
  {
    title: "Week",
    isCompleted: true,
  },
  {
    title: "Week",
    isCompleted: true,
  },
  {
    title: "Week",
    isCompleted: true,
  },
  {
    title: "Week",
    isCompleted: false,
  },
  {
    title: "Week",
    isCompleted: false,
  },
  {
    title: "Week",
    isCompleted: false,
  },
];

export default function StepsBar() {
  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <h1 className="text-3xl mb-3">Progress</h1>
      <div>
        {roadmap.map((path, i) => (
          <EachStep data={path} number={i + 1} key={i} />
        ))}
      </div>
    </div>
  );

  // return (
  //   <div>
  //     <div className="border-l-2 border-gray-500 my-4 mx-3">
  //       <div className="border-t-2 border-gray-500 mt-2" />
  //     </div>
  //     <div className="flex items-center">
  //       <UserIcon className="text-blue-500 h-6 w-6" />
  //       <div className="ml-4">
  //         <div className="font-semibold">Account Info</div>
  //         <div className="text-sm">Step details here</div>
  //       </div>
  //     </div>
  //     <div className="border-l-2 border-gray-500 my-4 mx-3">
  //       <div className="border-t-2 border-gray-500 mt-2" />
  //     </div>
  //     <div className="flex items-center">
  //       <TextIcon className="text-blue-500 h-6 w-6" />
  //       <div className="ml-4">
  //         <div className="font-semibold">Review</div>
  //         <div className="text-sm">Step details here</div>
  //       </div>
  //     </div>
  //     <div className="border-l-2 border-gray-500 my-4 mx-3">
  //       <div className="border-t-2 border-gray-500 mt-2" />
  //     </div>
  //     <div className="flex items-center">
  //       <CheckIcon className="text-blue-500 h-6 w-6" />
  //       <div className="ml-4">
  //         <div className="font-semibold">Confirmation</div>
  //         <div className="text-sm">Step details here</div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

interface EachStepCompPros {
  data: roadmapSchema;
  number: number;
}

const EachStep: React.FC<EachStepCompPros> = ({ data, number }) => {
  // console.log(data);
  return (
    <section>
      <div className="flex items-center">
        <div
          className={`flex items-center justify-center size-10 rounded-full  font-semibold ${
            data.isCompleted
              ? "bg-primary shadow-sm shadow-primary animate"
              : "border-2"
          }`}
        >
          {number}
        </div>
        <div className="ml-4">
          <h3 className="font-semibold">
            {data.title} {number}
          </h3>
        </div>
      </div>
      <div
        className={`h-8 w-[2px] ml-[18px] ${
          false ? "bg-primary" : "bg-slate-700"
        } md:h-8 my-1`}
      ></div>{" "}
    </section>
  );
};
