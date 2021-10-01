import { NextComponentType } from "next";

const ContentWrapper: NextComponentType = ({ children }) => {
  return <div className="flex-1 py-8 mx-auto max-w-7xl">{children}</div>;
};

export default ContentWrapper;
