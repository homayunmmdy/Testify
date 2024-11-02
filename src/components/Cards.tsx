import { CardsData } from "@/data/staticData";
import Card from "./Card";

const Cards = ({}) => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
      {CardsData.map((card) => (
        <Card data={card} />
      ))}
    </div>
  );
};

export default Cards;
