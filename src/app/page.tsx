"use client";
import CardContainer from "@/components/CardContainer";
import CreatePokemon from "@/components/CreatePokemon";
import Modal from "@/components/Modal";
import { data } from "@/db/db";
import usePokemon from "@/hooks/usePokemon";
import { DataType, eventType, PokemonType } from "@/types/types";
import { useState } from "react";

const initialState = {
  name: "",
  power: "",
  image: "",
};

export default function Home() {
  const {
    pokemons, 
    newPokemon, 
    showModal, 
    createInputHandler, 
    addNewPokemonHandler, 
    deleteHandler, 
    updatePokemonHandler,
    updateCurrentPokemon,
    updateBtnHandler,
  } = usePokemon();
  

  return (
    <div className="space-y-6">
      <CreatePokemon
        newPokemon={newPokemon}
        createInputHandler={createInputHandler}
        addNewPokemonHandler={addNewPokemonHandler}
      />
      <CardContainer
        pokemons={pokemons}
        updateBtnHandler={updateBtnHandler}
        deleteHandler={deleteHandler}
      />

      {showModal && (
        <Modal
          updatePokemon={updatePokemon}
          updatePokemonHandler={updatePokemonHandler}
          updateCurrentPokemon={updateCurrentPokemon}
        />
      )}
    </div>
  );
}
