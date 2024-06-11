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
    </div>
  );
};

export default CommonLayout;
