"use client";

import { ArrowUp } from "lucide-react";
import { Button } from "../ui/button";
import Container from "../container";
import Link from "next/link";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mx-auto flex h-28 w-full items-center justify-between bg-muted-foreground/10 px-2 md:h-16">
      <Container className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm">
          © {new Date().getFullYear()} Copyright{" "}
          <span className="font-semibold">
            Daily<span className="text-primary">Games</span>
          </span>
          .
        </p>
        <div>
          <p className="group text-xs text-muted-foreground">
            Feito com 💜 por{" "}
            <Link
              className="transition-all group-hover:text-primary group-hover:underline"
              href="https://github.com/jhonatan-oliveiradev"
            >
              Jhonatan Oliveira
            </Link>
            .
          </p>
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={scrollToTop}
          className="hidden text-primary md:flex"
        >
          <ArrowUp />
        </Button>
      </Container>
    </footer>
  );
};

export default Footer;
