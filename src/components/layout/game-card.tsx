import Link from "next/link";
import Image from "next/image";
import { GameProps } from "@/utils/types/game";
import { Card, CardFooter, CardHeader } from "../ui/card";
import { ArrowRightCircleIcon } from "lucide-react";

interface GameCardProps {
  data: GameProps;
}

const GameCard = ({ data }: GameCardProps) => {
  return (
    <Link href={`/game/${data.id}`}>
      <Card className="mb-5 w-full rounded-lg bg-secondary p-4">
        <CardHeader className="relative mb-5 h-56 w-full transition-all duration-300 hover:scale-105">
          <Image
            src={data.image_url}
            alt={data.title}
            className="rounded-lg object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
            quality={100}
            priority
            fill
          />
        </CardHeader>
        <CardFooter className="flex w-full items-center justify-between p-0">
          <h3 className="overflow-hidden truncate text-ellipsis whitespace-nowrap text-sm font-semibold">
            {data.title}
          </h3>
          <ArrowRightCircleIcon size={16} />
        </CardFooter>
      </Card>
    </Link>
  );
};

export default GameCard;
