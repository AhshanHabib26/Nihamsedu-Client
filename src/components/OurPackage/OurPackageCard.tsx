import { TPackageProps } from "@/types/types.global";
import { packageIconGeneretor } from "./PackageIconGeneretor";
import Link from "next/link";
import Styles from "../../styles/OurPackageCard.module.css"

const OurPackageCard: React.FC<TPackageProps> = ({ service }) => {
  return (
    <div className={`${Styles.OurPackageCardContainer} shadow-md cursor-pointer`}>
      <h1
        className={`${
          service?.altTitle === "Basic"
            ? "bg-orange-500"
            : service.altTitle === "Plus"
            ? "bg-[#FF3158]"
            : "bg-green-500"
        } text-center p-2 text-xl hind-siliguri-regular text-white `}
      >
        {service.title}
      </h1>
      <div className="flex items-center justify-center my-2">
        <p className="text-lg hind-siliguri-light mr-2">প্যাকেজ মূল্য : </p>
        <div className="flex items-center">
          <p className="text-lg hind-siliguri-light mr-2">টাকা</p>
          <h1 className="text-2xl hind-siliguri-light line-through text-red-500">
            {service?.price}
          </h1>
        </div>
        <div className="flex items-center">
          <h1
            className={`text-3xl ml-2 hind-siliguri-bold ${
              service?.altTitle === "Basic"
                ? "text-orange-500"
                : service.altTitle === "Plus"
                ? "text-[#FF3158]"
                : "text-green-500"
            }`}
          >
            {service?.offerPrice}
          </h1>
          <p className="text-lg hind-siliguri-regular ml-1"> / মাস</p>
        </div>
      </div>
      <hr className="border border-gray-100 border-dashed" />
      <div className="p-2">
        {service?.service?.map((item, index) => (
          <div key={index} className="flex items-center">
            {packageIconGeneretor(service?.altTitle, index)}
            <p className="text-lg hind-siliguri-light ml-2 mb-1">{item}</p>
          </div>
        ))}
      </div>
      <div className="mt-2">
        {service?.altTitle === "Basic" ? (
          <Link
            className="bg-orange-500 inline-block w-full text-center text-xl hind-siliguri-regular text-white p-2"
            href="/"
          >
            এনরোল বেসিক
          </Link>
        ) : service?.altTitle === "Plus" ? (
          <Link
            className="bg-[#FF3158] inline-block w-full text-center text-xl hind-siliguri-regular text-white p-2"
            href="/"
          >
            এনরোল প্লাস
          </Link>
        ) : (
          <Link
            className="bg-green-500 inline-block w-full text-center text-xl hind-siliguri-regular text-white p-2"
            href="/"
          >
            এনরোল প্রিমিয়াম
          </Link>
        )}
      </div>
    </div>
  );
};

export default OurPackageCard;
