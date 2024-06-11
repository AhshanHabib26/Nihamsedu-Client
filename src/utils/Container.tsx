import { TContainerProps } from "@/types/types.global";

const Container = ({ children }: TContainerProps) => {
  return <div className="w-full max-w-[1280px] px-3 mx-auto">{children}</div>;
};

export default Container;
