import Link from "next/link";


const FooterOtherLinks = () => {
  return (
    <div>
      <h1 className="text-2xl hind-siliguri-regular mb-2">অন্যান্য লিংক</h1>
      <div>
        <Link
          className="block text-lg hind-siliguri-light hover:text-[#FC4F4F]"
          href="/"
        >
          ব্লগ
        </Link>
        <Link
          className="block text-lg hind-siliguri-light hover:text-[#FC4F4F]"
          href="/"
        >
          বই হাব
        </Link>
        <Link
          className="block text-lg hind-siliguri-light hover:text-[#FC4F4F]"
          href="/"
        >
          ফ্রি নোটস এবং গাইড
        </Link>
        <Link
          className="block text-lg hind-siliguri-light hover:text-[#FC4F4F]"
          href="/"
        >
          ইবুক ডাউনলোড
        </Link>
        <Link
          className="block text-lg hind-siliguri-light hover:text-[#FC4F4F]"
          href="/"
        >
          ভেরিফাই সার্টিফিকেট
        </Link>
        <Link
          className="block text-lg hind-siliguri-light hover:text-[#FC4F4F]"
          href="/"
        >
          কুইজ খেলুন
        </Link>
      </div>
    </div>
  );
};

export default FooterOtherLinks;
