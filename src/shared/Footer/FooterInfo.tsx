import Image from "next/image";
import logoImg from "../../assets/icons/logo.png";
const FooterInfo = () => {
  return (
    <div>
      <div>
        <div className="flex items-center mb-2">
          <Image src={logoImg} alt="Logo image" />
          <h1 className="text-2xl hind-siliguri-regular ml-2">
            নিহাম&apos;স একেডেমি
          </h1>
        </div>
        <p className="text-lg hind-siliguri-light">
          সকল ধরনের নোটস এবং গাইড পাশাপাশি দক্ষ শিক্ষকদের পরিচর্যায় সফলতার এক
          ধাপ এগিয়ে যেতে এখনি শুরু করুন আপনার যাত্রা। আর আপনার এই সফলতার যাত্রায়
          আমরা আছি সব সময়।
        </p>
      </div>
    </div>
  );
};

export default FooterInfo;
