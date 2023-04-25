import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
  onSearch?: (query: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onSearch }) => {
  return (
    <div className="layout-container">
      <Header search={onSearch}></Header>

      <div className="flex">
        <div>
          <Sidebar></Sidebar>
        </div>

        <div className="flex-grow">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
