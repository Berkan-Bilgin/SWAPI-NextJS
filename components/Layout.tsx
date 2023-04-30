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
      <Header onSearch={onSearch}></Header>

      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/5 p-4">
          <Sidebar></Sidebar>
        </div>

        <div className="w-full md:w-3/5 p-4">{children}</div>

        <div className="w-full md:w-1/5 md:p-4 hidden md:block">
          {/* Sağ taraftaki boş alan */}
        </div>
      </div>
    </div>
  );
};

export default Layout;