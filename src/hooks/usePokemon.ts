import { useState } from "react";
import { data } from "@/db/db"
import { DataType, eventType, PokemonType } from "@/types/types";

const initialState = {
  name: "",
  power: "",
  image: "",
};

export default function usePokemon() {
    const [pokemons, setPokemons] = useState<DataType>(data);


    const [newPokemon, setNewPokemon] = useState(initialState);
  
    const [showModal, setShowModal] = useState(false);
    const [updatePokemon, setUpdatePokemon] = useState<PokemonType>({
      id: "",
      name: "",
      power: "",
      image: "",
    });
  
    const createInputHandler = (e: eventType) => {
      const name = e.target.name;
      const value =
        e.target.type === "file"
          ? e.target.files && URL.createObjectURL(e.target.files[0])
          : e.target.value;
      setNewPokemon((prev) => ({ ...prev, [name]: value }));
    };
  
    const addNewPokemonHandler = () => {
      if (!newPokemon.name || !newPokemon.power || !newPokemon.image) return;
  
      setPokemons((prev) => [
        ...prev,
        {
          id: `${Date.now()}`,
          name: newPokemon.name,
          power: newPokemon.power,
          image: newPokemon.image,
        },
      ]);
  
      setNewPokemon(initialState);
    };
  
    const deleteHandler = (id: string) => {
      setPokemons((prev) => prev.filter((pokemon) => pokemon.id !== id));
    };
  
    const updateBtnHandler = (pokemon: PokemonType) => {
      setUpdatePokemon(pokemon);
      setShowModal(true);
    };
  
    const updatePokemonHandler = (e: eventType) => {
      const name = e.target.name;
      const value =
        e.target.type === "file"
          ? e.target.files && URL.createObjectURL(e.target.files[0])
          : e.target.value;
      setUpdatePokemon((prev) => ({ ...prev, [name]: value }));
    };
  
    const updateCurrentPokemon = () => {
      setPokemons((prev) =>
        prev.map((pokemon) =>
          pokemon.id === updatePokemon.id ? updatePokemon : pokemon
        )
      );
      setShowModal(false);
    };

    return  {pokemons, newPokemon, showModal, createInputHandler, addNewPokemonHandler, deleteHandler, updatePokemonHandler, updateCurrentPokemon, updateBtnHandler}
}