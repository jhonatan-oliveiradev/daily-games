import Link from "next/link";
import Image from "next/image";
import { GameProps } from "@/utils/types/game";
import { Card, CardFooter } from "../ui/card";
import { ArrowRightCircleIcon } from "lucide-react";

interface GameCardProps {
  data: GameProps;
}

const GameCard = ({ data }: GameCardProps) => {
  return (
    <Link href={`/game/${data.id}`}>
      <Card className="group mb-5 w-full overflow-hidden rounded-lg bg-secondary p-0 shadow">
        <div className="relative mb-5 h-56 overflow-hidden">
          <Image
            src={data.image_url}
            alt={data.title}
            className="rounded-t-lg object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
            quality={100}
            priority
            fill
          />
        </div>
        <CardFooter className="flex w-full flex-col items-center bg-secondary p-2 pb-4">
          <div className="mb-4 flex w-full items-center justify-between">
            <h3 className="overflow-hidden truncate text-ellipsis whitespace-nowrap text-sm font-semibold">
              {data.title}
            </h3>
            <ArrowRightCircleIcon size={16} />
          </div>
          <div className="flex w-full items-center justify-between text-xs text-muted-foreground">
            <p>Lançamento: {data.release}</p>
            <p>Gênero: {data.categories[0]}</p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default GameCard;
