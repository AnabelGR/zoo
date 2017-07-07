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
    <li (click)="isAge(currentAnimal)" *ngFor="let currentAnimal of childAnimalList | sortingByAge:filterBySortingByAge"><h3 class="animal">{{currentAnimal.species}}: {{currentAnimal.name}}</h3><ol>Age: {{currentAnimal.age}}</ol><ol>Gender: {{currentAnimal.gender}}</ol><ol>Diet: {{currentAnimal.diet}}</ol><ol>Location: {{currentAnimal.location}}</ol><ol>Caretakers needed: {{currentAnimal.caretakers}}</ol><ol>Likes: {{currentAnimal.likes}}</ol><ol>Dislikes: {{currentAnimal.dislikes}}</ol><ol>Tracks: <img src={{currentAnimal.imageUrl}} class="tracks"/></ol>
      <button class="btn" (click)="editButtonHasBeenClicked(currentAnimal)">EDIT</button>
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
