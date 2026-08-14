import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  powerLevel: number;
}

@Component({
  selector: 'app-dragonball',
  templateUrl: './dragonball.html',
})
export class DragonballComponent {

  newCharacter = signal<Character>({ id: 0, name: '', powerLevel: 0 });

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', powerLevel: 9001 },
    // { id: 2, name: 'Vegeta', powerLevel: 8500 },
    // { id: 3, name: 'Gohan', powerLevel: 7000 },
    // { id: 4, name: 'Piccolo', powerLevel: 6500 },
    // { id: 5, name: 'Krillin', powerLevel: 5000 },
    // { id: 6, name: 'Yamcha', powerLevel: 400 },
  ]);

  powerClasses = computed(() => {
    return this.characters().map(character => {
      if (character.powerLevel > 8000) {
        return 'high-power';
      }

      if (character.powerLevel > 6000) {
        return 'medium-power';
      }

      return 'low-power';
    });
  });

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
      id: this.characters().length + 1,
      name,
      powerLevel,
    };

    this.characters.update(chars => [...chars, newChar ]);
    this.newCharacter.set({ id: 0, name: '', powerLevel: 0 });
  }
}
