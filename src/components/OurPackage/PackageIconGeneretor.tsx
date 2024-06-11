import { FaRegCircleCheck } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";

export const packageIconGeneretor = (altTitle: string, index: number) => {
  if (altTitle === "Basic") {
    return index <= 5 ? (
      <FaRegCircleCheck color="green" size={18} />
    ) : (
      <RxCrossCircled color="red" size={18} />
    );
  } else if (altTitle === "Plus") {
    return index <= 6 ? (
      <FaRegCircleCheck color="green" size={18} />
    ) : (
      <RxCrossCircled color="red" size={18} />
    );
  } else if (altTitle === "Premium") {
    return <FaRegCircleCheck color="green" size={18} />;
  }
};




