import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h2>Animal Log Update: {{month}}.{{day}}.{{year}}</h2>
    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
    <hr>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedAnimal: null;

  masterAnimalList: Animal[] = [
      new Animal('./resources/images/giraffe.jpg', 'Giraffe', 'Rose', 3, 'Herbivore', 'Elephant Corral', 5, 'Female', 'pumpkins', 'running', './resources/images/giraffe.png'),
      new Animal('./resources/images/zebra.jpg', 'Zebra', 'Mo', 1, 'Carnivore', 'Africa Safari', 2, 'Male', 'beach balls', 'loud noises', './resources/images/zebra.png'),
      new Animal('./resources/images/lion.jpg','Lion', 'Inra', 8, 'Carnivore', 'Africa Safari', 3, 'Male', 'running', 'water', './resources/images/lion.png'),
      new Animal('./resources/images/penguin.jpg', 'Penguin', 'Zar', 1, 'Carnivore', 'Tundra', 1, 'Male', 'seals', 'people', './resources/images/penguin.png'),
      new Animal('./resources/images/hippo.jpg', 'Hippo', 'Bertha', 2, 'Herbivore', 'Africa Safari', 3, 'Female', 'strawberries', 'loud noises', './resources/images/hippo.png')
    ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
