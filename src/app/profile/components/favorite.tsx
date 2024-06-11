"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Edit2Icon, XIcon } from "lucide-react";

const Favorite = () => {
  const [input, setInput] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [gameName, setGameName] = useState("");

  const handleEditCard = () => {
    setShowInput(!showInput);

    if (input !== "") {
      setGameName(input);
    }

    setInput("");
  };

  return (
    <div className="flex h-44 w-full flex-col justify-between rounded-lg bg-secondary p-4 text-muted-foreground shadow">
      {showInput ? (
        <div className="flex items-center justify-center gap-3">
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite o nome do jogo"
            className="w-full bg-background"
          />
          <Button size="icon">
            <XIcon size={14} onClick={handleEditCard} />
          </Button>
        </div>
      ) : (
        <Button
          onClick={handleEditCard}
          size="icon"
          className="self-start transition-all duration-200 hover:scale-110"
        >
          <Edit2Icon size={18} />
        </Button>
      )}

      {gameName && (
        <div>
          <span className="text-sm text-muted-foreground">Jogo favorito:</span>
          <p className="font-bold capitalize text-primary">{gameName}</p>
        </div>
      )}
      {!gameName && <p className="font-bold">Adicionar jogo</p>}
    </div>
  );
};

export default Favorite;
