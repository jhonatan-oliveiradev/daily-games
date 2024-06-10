import Image from "next/image";
import Link from "next/link";
import { GameProps } from "@/utils/types/game";
import { ArrowRightCircleIcon } from "lucide-react";

const getDailyGame = async () => {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${baseURL}/next-api/?api=game_day`, {
      next: { revalidate: 320 },
    });

    return response.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

const DailyGame = async () => {
  const dailyGame: GameProps = await getDailyGame();

  return (
    <Link href={`/game/${dailyGame.id}`}>
      <section className="w-full rounded-lg bg-black">
        <div className="group relative h-96 max-h-96 w-full rounded-lg">
          <div className="absolute bottom-0 z-20 flex flex-col items-start justify-center gap-2 p-3">
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold text-white">{dailyGame.title}</p>
              <ArrowRightCircleIcon
                size={24}
                className="text-white transition-all group-hover:translate-x-2"
              />
            </div>
            <span className="line-clamp-3 w-full max-w-2xl text-sm text-white lg:line-clamp-4">
              {dailyGame.description}
            </span>
          </div>
          <Image
            src={dailyGame.image_url}
            alt={dailyGame.title}
            fill
            className="max-h-96 rounded-lg object-cover opacity-50 transition-all group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
            quality={100}
            priority
          />
        </div>
      </section>
    </Link>
  );
};

export default DailyGame;
