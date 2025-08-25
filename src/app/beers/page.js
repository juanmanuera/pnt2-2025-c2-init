import {beers} from "../data/mocs";
import BeerList from "./components/BeerList";

export default function BeersPage(){
    return (
        <BeerList beers={beers} />
    )
}