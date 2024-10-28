import { StaticImageData } from "next/image";
import { ChangeEvent } from "react";


export type PokemonType =  {
    id: string;
    name: string;
    power: string;
    image: StaticImageData | string;
}




export type DataType = PokemonType[];

export type eventType = ChangeEvent<HTMLInputElement>


