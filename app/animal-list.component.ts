import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allAnimals" selected="selected">ALL ANIMALS</option>
    <option value="youngAnimals">YOUNG ANIMALS</option>
    <option value="matureAnimals">MATURE ANIMALS</option>
  </select>
  <ul>
    <li (click)="isAge(currentAnimal)" *ngFor="let currentAnimal of childAnimalList | sortingByAge:filterBySortingByAge">{{currentAnimal.species}}: {{currentAnimal.name}}<p>Age: {{currentAnimal.age}}</p><p>Gender: {{currentAnimal.gender}}</p><p>Diet: {{currentAnimal.diet}}</p><p>Location: {{currentAnimal.location}}</p><p>Caretakers needed: {{currentAnimal.caretakers}}</p><p>Likes: {{currentAnimal.likes}}</p><p>Dislikes: {{currentAnimal.dislikes}}</p>
      <button class="btn" (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
    </li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterBySortingByAge: string = "youngAnimals";

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu) {
    this.filterBySortingByAge = optionFromMenu;
  }
  toggleAge(clickedAnimal: Animal, setSortingByAge: number) {
     clickedAnimal.age = setSortingByAge;
   }
}
