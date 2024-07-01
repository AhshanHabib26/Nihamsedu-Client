import Footer from "@/shared/Footer/Footer";
import RootNavbar from "@/shared/Navbar/Navbar";
import React from "react";

const CommonLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <RootNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default CommonLayout;
