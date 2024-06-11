import { getAllCategoriesData } from "@/data/CategoryData";
import Container from "@/utils/Container";
import CategoriesCard from "./CategoriesCard";
import { TCategory } from "@/types/types.global";

const Categories = () => {
    const categories = getAllCategoriesData();
  
    return (
      <Container>
        <div className=" mt-12">
          <h1 className="text-3xl hind-siliguri-bold text-center">
            আলোচিত <span className="text-seconderyColor">বিষয়</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-6xl mt-8">
            {categories.map((category: TCategory) => (
              <CategoriesCard category={category} key={category.id} />
            ))}
          </div>
        </div>
      </Container>
    );
  };
  
  export default Categories;