import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { BoltIcon, Share2Icon } from "lucide-react";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <section className="w-full">
      <Container>
        <div>
          <div className="mb-6 mt-8 flex flex-col items-center justify-between sm:flex-row">
            <div className="flex flex-col items-center gap-4 sm:flex-row md:gap-8">
              <Image
                src="https://github.com/jhonatan-oliveiradev.png"
                alt="jhonatan-oliveiradev"
                className="h-40 w-40 rounded-full border-4 border-primary object-cover md:h-52 md:w-52"
                quality={100}
                width={0}
                height={0}
                sizes="100vw"
              />
              <div className="flex flex-col items-center justify-center gap-2 sm:items-start">
                <div className="text-center sm:text-left">
                  <h2 className="mb-1 text-xl font-bold text-primary">p3ves</h2>
                  <p className="text-xs italic text-muted-foreground">
                    Jhonatan Oliveira
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Jaboticabal, SP - Brasil
                </p>
                <p className="text-sm">
                  Jogo LoL, Valorant, e jogos singleplayer.
                </p>
              </div>
            </div>

            <div className="my-4 flex items-center justify-center gap-2 sm:flex-col sm:self-start">
              <Button size="icon">
                <BoltIcon size={16} />
              </Button>
              <Button size="icon">
                <Share2Icon size={16} />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
