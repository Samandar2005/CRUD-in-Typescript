import { data } from "@/db/db";
import Image from "next/image";
//

export default function Home() {
  // const [name, setName] = useState("");
  // const [power, setPower] = useState("");
  // const [image, setImage] = useState("");

  return (
    <div className="space-y-6">
      <section className="flex flex-col gap-4 p-2">
        <input className="border-2" type="text" placeholder="Name of pokemon" />
        <input
          className="border-2"
          type="text"
          placeholder="Power of pokemon"
        />
        <input type="file" />
        <button className="border-2 self-center p-3 bg-green-800 text-white">
          + Create a new Pokemon
        </button>
      </section>
      <section className="flex gap-3 flex-wrap justify-center">
        {data.map((pokemon) => (
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
