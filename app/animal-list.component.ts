import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allAnimals">All Animals</option>
    <option value="youngAnimals">Young Animals</option>
    <option value="matureAnimals" selected="selected">Mature Animals</option>
  </select>
  <ul>
    <li (click)="isDone(currentAnimal)" *ngFor="let currentAnimal of childAnimalList | sortingByAge:filterBySortingByAge">{{currentAnimal.species}}: {{currentAnimal.name}}, Age {{currentAnimal.age}}
      <input *ngIf="currentAnimal.done === true" type="checkbox" checked (click)="toggleDone(currentAnimal, false)"/>
      <input *ngIf="currentAnimal.done === false" type="checkbox" (click)="toggleDone(currentAnimal, true)"/>
      <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
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

  isDone(clickedAnimal: Animal) {
    if(clickedAnimal.done === true) {
      alert("This animal is cared for!");
    } else {
      alert("This animal is not cared for. Better get to work!");
    }
  }

  priorityColor(currentAnimal){
    if (currentAnimal.age <=3){
      return "bg-danger";
    } else if (currentAnimal.age > 3) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }

  onChange(optionFromMenu) {
    this.filterBySortingByAge = optionFromMenu;
  }
  toggleDone(clickedAnimal: Animal, setSortingByAge: boolean) {
     clickedAnimal.done = setSortingByAge;
   }
}
