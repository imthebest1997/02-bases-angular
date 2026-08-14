import { Component, computed, inject, signal } from '@angular/core';

import { CharacterAdd } from '../../components/dragonball/character-add/character-add';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { DragonballService } from '../../services/dragonball';

@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterList, CharacterAdd],
  templateUrl: './dragonball-super.html',
})
export class DragonballSuperComponent {

  public dragonBallService = inject(DragonballService);

}
