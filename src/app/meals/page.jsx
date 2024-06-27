import Meals from "@/components/Meals";
import styles from "./style.module.css";

export const metadata = {
  title: "Meals ",
  description: "Meals Pages",
};

const page = () => {
  return (
    <div className="mt-10">
      <Meals />
    </div>
  );
};

export default page;
