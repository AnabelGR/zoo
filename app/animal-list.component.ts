import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allAnimals">ALL ANIMALS</option>
    <option value="youngAnimals">YOUNG ANIMALS</option>
    <option value="matureAnimals">MATURE ANIMALS</option>
  </select>
  <div class="row">
    <div class="col-md-4" *ngFor="let currentAnimal of childAnimalList | sortingByAge:filterBySortingByAge"><h3 class="animal">{{currentAnimal.species}}: {{currentAnimal.name}}</h3><p><img src={{currentAnimal.photoLink}} class="photo"/></p><p>Age: {{currentAnimal.age}}</p><p>Gender: {{currentAnimal.gender}}</p><p>Diet: {{currentAnimal.diet}}</p><p>Location: {{currentAnimal.location}}</p><p>Caretakers needed: {{currentAnimal.caretakers}}</p><p>Likes: {{currentAnimal.likes}}</p><p>Dislikes: {{currentAnimal.dislikes}}</p><p>Tracks:<br><img src={{currentAnimal.imageUrl}} class="tracks"/></p>
      <button class="btn" (click)="editButtonHasBeenClicked(currentAnimal)">EDIT</button>
      <hr>
    </div>
  </div>
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
