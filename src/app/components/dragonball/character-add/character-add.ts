import { Component, output, signal } from '@angular/core';

import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.html',
})
export class CharacterAdd {

  newCharacter = signal<Character>({ id: 0, name: '', powerLevel: 0 });

  // Output event to emit the new character when added
  newChar = output<Character>();

  updateNewCharacterName(name: string) {
    this.newCharacter.update(character => ({ ...character, name }));
  }

  updateNewCharacterPowerLevel(powerLevel: number) {
    this.newCharacter.update(character => ({ ...character, powerLevel }));
  }

  addCharacter() {
    const { name, powerLevel } = this.newCharacter();

    if (!name || !powerLevel || powerLevel <= 0) {
      return;
    }

    const newChar = {
      id: Math.floor(Math.random() * 1000) + 1,
      name,
      powerLevel,
    };

    // this.characters.update(chars => [...chars, newChar]);
    // Emit the new character to the parent component
    this.newChar.emit(newChar);
    this.resetNewCharacter();
  }

  resetNewCharacter() {
    this.newCharacter.set({ id: 0, name: '', powerLevel: 0 });
  }


}
