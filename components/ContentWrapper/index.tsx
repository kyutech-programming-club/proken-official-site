import { NextComponentType } from "next";

const ContentWrapper: NextComponentType = ({ children }) => {
  return <div className="flex-1 max-w-6xl p-8 mx-auto">{children}</div>;
};

export default ContentWrapper;
