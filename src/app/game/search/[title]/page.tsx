import Container from "@/components/container";
import GameCard from "@/components/layout/game-card";
import Search from "@/components/layout/search";
import { GameProps } from "@/utils/types/game";

const getData = async (title: string) => {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_URL;
    const response = await fetch(
      `${baseURL}/next-api/?api=game&title=${title}`,
    );

    return response.json();
  } catch (error) {
    return null;
  }
};

export default async function SearchPage({
  params: { title },
}: {
  params: { title: string };
}) {
  const decodedTitle = decodeURIComponent(title);
  const games: GameProps[] = await getData(decodedTitle);

  return (
    <Container>
      <Search />
      <section>
        <h2 className="mt-8 text-xl font-bold">
          Resultados para{" "}
          <span className="capitalize text-primary">{decodedTitle}</span>:
        </h2>

        {!games && (
          <p className="mb-5 text-sm text-muted-foreground">
            Nenhum resultado encontrado...
          </p>
        )}

        <div className="mt-5 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {games && games.map((item) => <GameCard key={item.id} data={item} />)}
        </div>
      </section>
    </Container>
  );
}
