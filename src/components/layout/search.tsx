"use client";

import { FormEvent, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [search, setSearch] = useState("");

  const router = useRouter();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();

    if (search === "") return;

    router.push(`/game/search/${search}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="mt-8 flex w-full items-center justify-center gap-2"
    >
      <Input
        className="bg-secondary"
        type="text"
        placeholder="Procure por um jogo específico"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button size="icon" type="submit">
        <SearchIcon size={18} className="" />
      </Button>
    </form>
  );
};

export default Search;
