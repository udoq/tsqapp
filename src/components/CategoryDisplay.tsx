import CourseDisplay from "./CourseDisplay";
import { Category } from "../types";

type Props = {
  category: Category;
};

function CategoryDisplay({ category }: Props) {
  return (
    <div className="flex gap-x-24 justify-center">
      <div className="rounded-sm flex justify-center items-center drop-shadow-md bg-neutral-700 w-48 h-20">
        <p className="text-xl text-gray-200 font-bold">{category.title}</p>
      </div>
      <div>
        {category.courses.map((course, i) => (
          <CourseDisplay key={i} index={i} course={course} />
        ))}
      </div>
    </div>
  );
}

export default CategoryDisplay;
