import { CardType } from "@/type/entities";
import Link from "next/link";

const Card = ({ data }: {data : CardType}) => {
  return (
    <Link href={data.link} className="card bg-red-100 hover:bg-red-500">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{data.title}</h2>
      </div>
    </Link>
  );
};

export default Card;
