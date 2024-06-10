import Container from "@/components/container";
import DailyGame from "@/components/layout/daily-game";

export default function Home() {
  return (
    <main className="w-full">
      <Container>
        <h1 className="mt-8 text-xl font-bold">
          Que tal começar uma nova aventura?
        </h1>
        <p className="mb-5 text-sm text-muted-foreground">
          Separamos um jogo exclusivamente para você
        </p>

        <DailyGame />
      </Container>
    </main>
  );
}
