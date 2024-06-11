import Container from "@/components/container";
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
  const games: GameProps[] = await getData(title);

  return (
    <Container>
      <section>
        <h2 className="mt-8 text-xl font-bold">Resultados para {title}:</h2>
      </section>
    </Container>
  );
}
