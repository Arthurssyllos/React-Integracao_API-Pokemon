import exp from "constants";
import React, { useEffect, useState } from "react";
import PokemonService from "../../services/PokemonServices";
import { PokemonItemListInterface, PokemonListInterface } from "../../types/AppInterfaces";

const PokemonList: React.FC = () => {
    
    const [pagina, setPagin] = useState<number>(1);
    const [itensPorPagina, setItensPorPagina] = useState<number>(20);
    const [PokemonList, setPokemonList] = useState<PokemonItemListInterface[]>([]);

    const handleListarDados = async () => {
        const responseData: PokemonListInterface = await PokemonService.listarPokemons({
            itensPorPagina: itensPorPagina,
            pagina: pagina
        });
        if (responseData.results.length > 0){
            setPokemonList(responseData.results);
        }
    }

    useEffect( () => {
        handleListarDados()
    }, [handleListarDados]);

    return(
        <React.Fragment></React.Fragment>
    )
}

export default PokemonList;