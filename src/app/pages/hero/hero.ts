import { Component, computed, signal } from "@angular/core";

import { UpperCasePipe } from "@angular/common";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  imports: [ UpperCasePipe ],
})
export class HeroComponent{

  name = signal('Ironman');
  age = signal(45);

  // Computed property to get the hero description
  heroDescription = computed(() => {
    return `${this.name()} - ${this.age()}`;
  });

  capitalizeName = computed(() => {
    return this.name().toUpperCase();
  });


  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge() {
    this.age.set(60);
  }

}
