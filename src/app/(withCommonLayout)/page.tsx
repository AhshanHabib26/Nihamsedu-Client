import Banner from "@/components/Banner/Banner";
import Blogs from "@/components/Blogs/Blogs";
import Books from "@/components/Books/Books";
import Categories from "@/components/Category/Categories";
import OurPackage from "@/components/OurPackage/OurPackage";

export default function Home() {
  return (
    <main>
      <Banner />
      <Categories />
      <Books />
      <OurPackage />
      <Blogs/>
    </main>
  );
}
