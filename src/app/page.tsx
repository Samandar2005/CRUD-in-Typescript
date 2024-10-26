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
              <button className="border-2">Update</button>
              <button className="border-2">Delete</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
