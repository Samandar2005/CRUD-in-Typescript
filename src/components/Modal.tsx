import { eventType, PokemonType } from "@/types/types";
import Image from "next/image";

type ModalPropsType = {
  updatePokemon: PokemonType,
  updatePokemonHandler: (e: eventType) => void,
  updateCurrentPokemon: () => void, 
}

export default function Modal({
  updatePokemon,
  updatePokemonHandler,
  updateCurrentPokemon,
}: ModalPropsType) {
  return (
    <div className="p-4 absolute top-2  border-2 w-full h-full bg-slate-400 shadow-xl flex flex-col gap-8">
      <input
        className="p-1"
        value={updatePokemon.name}
        type="text"
        placeholder="name"
        onChange={updatePokemonHandler}
        name="name"
      />
      <input
        className="p-1"
        value={updatePokemon.power}
        type="text"
        placeholder="image"
        name="power"
        onChange={updatePokemonHandler}
      />
      <input type="file" name="image" onChange={updatePokemonHandler} />
      <Image
        src={updatePokemon.image}
        alt="pokemon image"
        width={100}
        height={100}
      />
      <button
        onClick={updateCurrentPokemon}
        className=" self-center p-2 bg-red-500 text-white"
      >
        Update Current pokemon
      </button>
    </div>
  );
}
