import { AiOutlineSound } from "react-icons/ai";
import { FaInfo } from "react-icons/fa6";
import { FiAlertTriangle } from "react-icons/fi";
import { IoHelp } from "react-icons/io5";
import { MdOutlinePhoneInTalk, MdOutlinePrivacyTip } from "react-icons/md";

export const importantLink = [
  {
    text: "আমাদের সম্পর্কে",
    link: "/",
    icon: <FaInfo size={16} />,
  },
  {
    text: "যোগাযোগ করুন",
    link: "/",
    icon: <MdOutlinePhoneInTalk size={16} />,
  },
  {
    text: "ডিসক্লেমার",
    link: "/",
    icon: <FiAlertTriangle size={16} />,
  },
  {
    text: "প্রাইভেসি পলিসি",
    link: "/",
    icon: <MdOutlinePrivacyTip size={16} />,
  },
  {
    text: "পোষ্ট রিকোয়েস্ট",
    link: "/",
    icon: <IoHelp size={16} />,
  },
  {
    text: "বিজ্ঞপ্তি দিন",
    link: "/",
    icon: <AiOutlineSound size={16} />,
  },
];
