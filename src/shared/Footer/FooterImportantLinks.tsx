import Link from "next/link";


const FooterImportantLinks = () => {
  return (
    <div>
      <h1 className="text-2xl hind-siliguri-regular mb-2">গুরুত্বপূর্ণ লিংক</h1>
      <div>
        <Link
          className="block text-lg hind-siliguri-light hover:text-seconderyColor"
          href="/"
        >
          শিক্ষক হিসাবে যোগ দিন
        </Link>
        <Link
          className="block text-lg hind-siliguri-light hover:text-seconderyColor"
          href="/"
        >
          এ্যাফিলিয়েট হিসাবে যোগ দিন
        </Link>
        <Link
          className="block text-lg hind-siliguri-light hover:text-seconderyColor"
          href="/"
        >
          ক্যারিয়ার
        </Link>
        <Link
          className="block text-lg hind-siliguri-light hover:text-seconderyColor"
          href="/"
        >
          প্রাইভেসি পলিসি
        </Link>
        <Link
          className="block text-lg hind-siliguri-light hover:text-seconderyColor"
          href="/"
        >
          রিফান্ড পলিসি
        </Link>
        <Link
          className="block text-lg hind-siliguri-light hover:text-seconderyColor"
          href="/"
        >
          ডিসক্লেমার
        </Link>
      </div>
    </div>
  );
};

export default FooterImportantLinks;
