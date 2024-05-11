import React from "react";

const Typography: React.FC<headingProps> = ({ children }) => {
  return (
    <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
};

export const BadgeShine: React.FC<headingProps> = ({ children }) => {
  return (
    <span className="inline-flex h-full animate-background-shine cursor-pointer items-center justify-center rounded-full border border-gray-800 bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%] px-3 py-1 text-xs font-medium text-gray-300">
      {children}
    </span>
  );
};

type headingProps = {
  children: React.ReactNode;
  className?: string;
};

export const H1: React.FC<headingProps> = ({ children, className }) => {
  return (
    <h1
      className={
        "scroll-m-20 text-5xl font-bold tracking-tight lg:text-5xl" +
        " " +
        className
      }
    >
      {children}
    </h1>
  );
};

export const TextGradient: React.FC<headingProps> = ({ children }) => {
  return (
    <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-7xl font-bold text-center">
      {children}
    </h1>
  );
};

export const TextShineButton: React.FC<headingProps> = ({ children }) => {
  return (
    <button className="inline-flex h-12  animate-background-shine items-center justify-center rounded-md border border-blue-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2  focus:ring-offset-gray-50">
      {children}
    </button>
    // <span className='inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-xl text-transparent'>
    //   {}
    // </span>
  );
};

export const H2: React.FC<headingProps> = ({ children }) => {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-6 md:mt-6">
      {children}
    </h2>
  );
};
export const H4: React.FC<headingProps> = ({ children }) => {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-4">
      {children}
    </h4>
  );
};
export const H3: React.FC<headingProps> = ({ children, className }) => {
  return (
    <h4
      className={
        "scroll-m-15 text-2xl font-semibold tracking-tight mt-2" +
        " " +
        className
      }
    >
      {children}
    </h4>
  );
};

export const P: React.FC<headingProps> = ({ children }) => {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children} </p>;
};

export const Blockquote: React.FC<headingProps> = ({ children }) => {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  );
};
export const InlineCode: React.FC<headingProps> = ({ children }) => {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  );
};
export const LeadText: React.FC<headingProps> = ({ children }) => {
  return (
    <p className="text-xl text-muted-foreground mt-4 md:mt-6">{children}</p>
  );
};
export const MutedText: React.FC<headingProps> = ({ children }) => {
  return <p className="text-sm text-muted-foreground">{children}</p>;
};

export default Typography;
