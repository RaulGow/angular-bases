import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalize():string {
    return this.name.toUpperCase()
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`
  }

  changeHero():void {
    this.name = 'Superman'
  }

  changeAge():void {
    this.age = 99
  }

  resetForm():void {
    this.name = 'ironman';
    this.age = 45;
  }

}
