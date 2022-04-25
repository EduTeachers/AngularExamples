import {Component} from '@angular/core';
import {PokemonService} from "./services/pokemon-service";
import {PokemonType} from "./models/pokemon-type";
import {Order} from "./models/order";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private readonly pokemonService: PokemonService = new PokemonService();
  public ascendingOrder: boolean = true;

  get type(): PokemonType[] {
    if(this.ascendingOrder)
      return this.pokemonService.getSortedPokemon(Order.ASCENDING);
    else
      return this.pokemonService.getSortedPokemon(Order.DESCENDING);
  }
}
