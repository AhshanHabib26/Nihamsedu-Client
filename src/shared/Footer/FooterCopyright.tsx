import { FaRegCopyright } from "react-icons/fa6";

const FooterCopyright = () => {
  const date = new Date();
  const fullYear: number = date.getFullYear();

  function convertToBengaliNumerals(number: number): string {
    const bengaliDigits: string[] = [
      "০",
      "১",
      "২",
      "৩",
      "৪",
      "৫",
      "৬",
      "৭",
      "৮",
      "৯",
    ];
    return number
      .toString()
      .split("")
      .map((digit) => bengaliDigits[parseInt(digit)])
      .join("");
  }

  const fullYearInBengaliNumerals: string = convertToBengaliNumerals(fullYear);


  return (
    <div className="text-white flex items-center justify-center">
      <FaRegCopyright size={16} />
      <p className="text-md lg:text-lg hind-siliguri-light ml-1">
        {fullYearInBengaliNumerals} নিহাম&apos;স একাডেমি কর্তৃক সর্বস্বত্ব
        সংরক্ষিত{" "}
        <a
          target="_blank"
          className="text-seconderyColor"
          href="https://www.linkedin.com/in/ahshanhabib26/"
        >
          এহছান হাবিব
        </a>
      </p>
    </div>
  );
};

export default FooterCopyright;
