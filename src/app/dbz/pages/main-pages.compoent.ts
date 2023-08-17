import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponents {

  constructor( private dbzService: DbzService ) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter ( id: string ):void {
    this.dbzService.deleteCharacterById( id );
  }

  onNewCaracter ( characer: Character):void{
    this.dbzService.addharacter( characer );
  }

}
