import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  onSearch?: (query: string) => void;
  allDataFetched?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, onSearch, allDataFetched }) => {
  return (
    <div className="layout-container min-h-screen flex flex-col">
      <Header onSearch={onSearch} inputDisabled={!allDataFetched}></Header>

      <div className="flex-grow">
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

      <Footer />
    </div>
  );
};

export default Layout;