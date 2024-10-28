import { eventType, PokemonType } from "@/types/types";

type CreatePokemonType = {
  createInputHandler: (e: eventType) => void;
  addNewPokemonHandler: () => void;
  newPokemon: Omit<PokemonType, "id">;
};

export default function CreatePokemon({
  createInputHandler,
  addNewPokemonHandler,
  newPokemon,
}: CreatePokemonType) {
  return (
    <section className="flex flex-col gap-4 p-2">
      <input
        onChange={createInputHandler}
        className="border-2"
        type="text"
        placeholder="Name of pokemon"
        value={newPokemon.name}
        name="name"
      />
      <input
        onChange={createInputHandler}
        className="border-2"
        type="text"
        placeholder="Power of pokemon"
        value={newPokemon.power}
        name="power"
      />
      <input type="file" name="image" onChange={createInputHandler} />

      <button
        onClick={addNewPokemonHandler}
        className="border-2 self-center p-3 bg-green-800 text-white"
      >
        + Create a new Pokemon
      </button>
    </section>
  );
}
