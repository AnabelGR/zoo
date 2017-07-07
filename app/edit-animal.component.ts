import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div class="container" id="editForm">
      <div *ngIf="childSelectedAnimal">
        <h3>{{childSelectedAnimal.species}}: {{childSelectedAnimal.name}}</h3>
        <h1>Edit Animal</h1>
        <div class="row">
          <div class="col-md-3">
          <label>Enter Animal Name:</label>
          </div>
          <div class="col-md-9">
          <input [(ngModel)]="childSelectedAnimal.name">
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
          <label>Enter Animal Age:</label>
          </div>
           <div class="col-md-9">
           <input [(ngModel)]="childSelectedAnimal.age">
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
          <label>Enter Animal Caretakers:</label>
          </div>
           <div class="col-md-9">
           <input [(ngModel)]="childSelectedAnimal.caretakers">
          </div>
          </div>
        <button (click)="doneButtonClicked()">DONE</button>
      </div>
      <hr>
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
