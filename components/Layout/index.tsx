import { NextComponentType } from "next";
import Header from "../Header";
import ContentWrapper from "../ContentWrapper";

const Layout: NextComponentType = ({ children }) => {
  return (
    <div className="flex flex-col bg-white font-ja">
      <div className="sticky top-0">
        <Header />
      </div>
      <ContentWrapper>{children}</ContentWrapper>
    </div>
  );
};

export default Layout;
