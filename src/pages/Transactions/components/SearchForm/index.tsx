import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";

export function SearchForms() {
    return (
        <SearchFormContainer>
            <input type="text" placeholder="Busque uma transação"/>

            <button type="submit">
                <MagnifyingGlass size={20}/>
                Buscar
            </button>
        </SearchFormContainer>
    )

}