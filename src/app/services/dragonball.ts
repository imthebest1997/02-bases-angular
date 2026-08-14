import { Injectable, effect, signal } from '@angular/core';

import { Character } from '../interfaces/character.interface';

function loadFromLocalStorage(): Character[] {
  const data = localStorage.getItem('characters');
  return data ? JSON.parse(data) : [];
}

@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  addCharacter(newChar: Character) {
    this.characters.update(chars => [...chars, newChar]);
  }
}
