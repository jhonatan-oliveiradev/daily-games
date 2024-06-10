import Container from "@/components/container";
import DailyGame from "@/components/layout/daily-game";
import Games from "@/components/layout/games";
import Search from "@/components/layout/search";

export default function Home() {
  return (
    <main className="w-full">
      <Container>
        <h1 className="mt-8 text-xl font-bold">
          Que tal começar uma nova aventura?
        </h1>
        <p className="mb-5 text-sm text-muted-foreground">
          Separamos um novo jogo exclusivamente para você
        </p>

        <DailyGame />
        <Search />
        <Games />
      </Container>
    </main>
  );
}
