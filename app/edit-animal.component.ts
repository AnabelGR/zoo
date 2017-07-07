import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div>
        <div *ngIf="childSelectedAnimal">
          <h3>{{childSelectedAnimal.species}}: {{childSelectedAnimal.name}}</h3>
          <hr>
          <h3>Edit Animal</h3>
          <label>Enter Animal's Name:</label>
          <input [(ngModel)]="childSelectedAnimal.name">
          <label>Enter Animal's Age:</label>
          <input [(ngModel)]="childSelectedAnimal.age">
          <label>Enter Animal's Caretakers:</label>
          <input [(ngModel)]="childSelectedAnimal.caretakers">
          <button (click)="doneButtonClicked()">DONE</button>
        </div>
      </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
  this.doneButtonClickedSender.emit();
  }
}
