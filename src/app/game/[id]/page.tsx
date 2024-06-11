import Container from "@/components/container";
import { GameProps } from "@/utils/types/game";
import Image from "next/image";
import { redirect } from "next/navigation";
import Label from "./components/label";
import GameCard from "@/components/layout/game-card";

async function getData(id: string) {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${baseURL}/next-api/?api=game&id=${id}`);

    return response.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

async function getRandomGame(currentGameId: number) {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_URL;
    let sortedGame;

    do {
      const response = await fetch(`${baseURL}/next-api/?api=game_day`, {
        next: { revalidate: 320 },
      });

      sortedGame = await response.json();
    } while (sortedGame.id === currentGameId);
    return sortedGame;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

export default async function GamePage({
  params: { id },
}: {
  params: { id: string };
}) {
  const data: GameProps = await getData(id);
  const sortedGame = await getRandomGame(data.id);

  if (!data) {
    redirect("/");
  }

  return (
    <section className="w-full">
      <div className="relative h-80 w-full bg-black lg:h-96">
        <Image
          src={data.image_url}
          alt={data.title}
          className="h-80 w-full object-cover opacity-75 lg:h-96"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
          quality={100}
          priority
          fill
        />
      </div>
      <Container className="mb-8">
        <h1 className="my-4 text-xl font-bold lg:text-2xl">{data.title}</h1>
        <p className="text-muted-foreground">{data.description}</p>

        <h2 className="mb-2 mt-7 text-lg font-bold">Plataforma:</h2>
        <div className="flex flex-wrap gap-2">
          {data.platforms.map((item) => (
            <Label key={item} name={item} />
          ))}
        </div>

        <h2 className="mb-2 mt-7 text-lg font-bold">Gênero:</h2>
        <div className="flex flex-wrap gap-2">
          {data.categories.map((item) => (
            <Label key={item} name={item} />
          ))}
        </div>

        <p className="mb-2 mt-7 items-center text-base">
          Lançamento:{" "}
          <span className="font-normal text-muted-foreground">
            {data.release}
          </span>
        </p>

        <h2 className="mb-2 mt-7 text-lg font-bold">Jogo recomendado:</h2>

        <GameCard data={sortedGame} />
      </Container>
    </section>
  );
}
