export default function CardContainer() {
  return (
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
          <h2 className="text-xl font-extrabold text-center">{pokemon.name}</h2>
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
  );
}
