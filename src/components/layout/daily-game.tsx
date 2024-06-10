import Image from "next/image";
import { GameProps } from "@/utils/types/game";
import Link from "next/link";

const getDailyGame = async () => {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${baseURL}/next-api/?api=game_day`);

    return response.json();
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
};

const DailyGame = async () => {
  const dailyGame: GameProps = await getDailyGame();

  return (
    <Link href={`/game/${dailyGame.id}`}>
      <section className="w-full rounded-lg">
        <div className="relative h-96 max-h-96 w-full">
          <Image
            src={dailyGame.image_url}
            alt={dailyGame.title}
            fill
            className="max-h-96 rounded-lg object-cover"
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
