import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LiaGamepadSolid } from "react-icons/lia";
import Link from "next/link";
import Logo from "./logo";
import { ModeToggle } from "../mode-toggle";

const Header = () => {
  return (
    <header className="flex h-20 w-full bg-muted-foreground/10 px-2 shadow">
      <div className="mx-auto flex h-20 w-full max-w-screen-xl items-center justify-between gap-4">
        <nav className="flex items-center justify-center gap-4">
          <Logo />
          <Link
            href="/"
            className="text-sm font-bold transition-all hover:text-primary"
          >
            Jogos
          </Link>
          <Link
            href="/about"
            className="text-sm font-bold transition-all hover:text-primary"
          >
            Perfil
          </Link>
        </nav>

        <div className="flex items-center justify-center gap-4">
          <Link href="/">
            <Avatar className="h-8 w-8 rounded-full border-2 border-primary">
              <AvatarImage src="https://github.com/jhonatan-oliveiradev.png" />
              <AvatarFallback>
                <LiaGamepadSolid className="text-primary" />
              </AvatarFallback>
            </Avatar>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
