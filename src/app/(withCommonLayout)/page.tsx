import Banner from "@/components/Banner/Banner";
import Books from "@/components/Books/Books";
import Categories from "@/components/Category/Categories";
import OurPackage from "@/components/OurPackage/OurPackage";
import Quiz from "@/components/Quiz/Quiz";

export default function Home() {
  return (
    <main>
      <Banner />
      <Categories />
      <Books />
      <OurPackage />
      <Quiz />
    </main>
  );
}
