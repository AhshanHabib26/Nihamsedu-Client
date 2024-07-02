"use client";

import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "sweetalert2/src/sweetalert2.scss";
const CustomProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <MantineProvider>{children}</MantineProvider>
    </div>
  );
};

export default CustomProvider;
