import { GameProps } from "@/utils/types/game";
import Container from "../container";
import GameCard from "./game-card";

async function getGamesData() {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(`${baseURL}/next-api/?api=games`, {
      next: { revalidate: 320 },
    });

    return response.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

const Games = async () => {
  const data: GameProps[] = await getGamesData();

  return (
    <Container>
      <h2 className="mt-8 text-xl font-bold">Jogos para conhecer</h2>
      <p className="mb-5 text-sm text-muted-foreground">
        Explore novos mundos com os jogos abaixo.
      </p>
      <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item) => (
          <GameCard key={item.id} data={item} />
        ))}
      </section>
    </Container>
  );
};

export default Games;
