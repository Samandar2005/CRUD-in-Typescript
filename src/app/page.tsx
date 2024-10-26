"use client";
import { data } from "@/db/db";
import Image, { StaticImageData } from "next/image";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [pokemons, setPokemons] = useState<
    {
      id: string;
      name: string;
      power: string;
      image: StaticImageData | string;
    }[]
  >(data);
  const [name, setName] = useState<string>("");
  const [power, setPower] = useState<string>("");
  const [image, setImage] = useState<string>("");

  // const [overlay, setOverlay] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [updatePokemon, setUpdatePokemon] = useState<{
    id: string;
    name: string;
    power: string;
    image: StaticImageData | string;
  }>({
    id: "",
    name: "",
    power: "",
    image: "",
  });

  const newImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    setImage(URL.createObjectURL(files[0]));
  };

  const addNewPokemonHandler = () => {
    if (!name || !power || !image) return;

    setPokemons((prev) => [
      ...prev,
      { id: `${Date.now()}`, name, power, image },
    ]);
    setName("");
    setPower("");
    setImage("");
  };

  const deleteHandler = (id: string) => {
    setPokemons((prev) => prev.filter((pokemon) => pokemon.id !== id));
  };

  const updateBtnHandler = (pokemon: {
    id: string;
    name: string;
    power: string;
    image: string | StaticImageData;
  }) => {
    setUpdatePokemon(pokemon);
    setShowModal(true);
    // setOverlay(true);
  };

  const updatePokemonHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name);

    setUpdatePokemon((prev) => ({ ...prev, [name]: value }));
  };

  const updatePokemonImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    setUpdatePokemon((prev) => ({
      ...prev,
      [e.target.name]: URL.createObjectURL(files[0]),
    }));
  };

  const updateCurrentPokemon = () => {
    setPokemons((prev) =>
      prev.map((pokemon) =>
        pokemon.id === updatePokemon.id ? updatePokemon : pokemon
      )
    );
    setShowModal(false);
  };

  return (
    <div className="space-y-6">
      <section className="flex flex-col gap-4 p-2">
        <input
          onChange={(e) => setName(e.target.value)}
          className="border-2"
          type="text"
          placeholder="Name of pokemon"
          value={name}
        />
        <input
          onChange={(e) => setPower(e.target.value)}
          className="border-2"
          type="text"
          placeholder="Power of pokemon"
          value={power}
        />
        <input type="file" onChange={newImageHandler} />

        <button
          onClick={addNewPokemonHandler}
          className="border-2 self-center p-3 bg-green-800 text-white"
        >
          + Create a new Pokemon
        </button>
      </section>
      <section className="flex gap-3 flex-wrap justify-center">
        {pokemons.map((pokemon) => (
          <div key={pokemon.id} className="border-2 border-black w-60">
            <Image
              src={pokemon.image}
              alt="pokemon image"
              width={100}
              height={100}
              className="w-full h-32"
            />
            <h2 className="text-xl font-extrabold text-center">
              {pokemon.name}
            </h2>
            <p>Power: {pokemon.power}</p>
            <div className="flex justify-center gap-5">
              <button
                onClick={() => updateBtnHandler(pokemon)}
                className="border-2"
              >
                Update
              </button>
              <button
                className="border-2"
                onClick={() => deleteHandler(pokemon.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </section>

      {showModal && (
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
          <input
            type="file"
            name="image"
            onChange={updatePokemonImageHandler}
          />
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
      )}
    </div>
  );
}
