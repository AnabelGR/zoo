import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div class="container">
    <h1>New Animal</h1>
      <div class="row">
        <div class="col-md-4">
        <label>Enter Animal Species:</label>
        </div>
        <div class="col-md-8">
        <input #newSpecies type="text">
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
        <label>Enter Animal Name:</label>
        </div>
        <div class="col-md-8">
        <input #newName type="text">
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
        <label>Enter Animal Age:</label>
        </div>
         <div class="col-md-8">
        <input #newAge type="text">
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
        <label>Enter Animal Diet:</label>
        </div>
         <div class="col-md-8">
        <input #newDiet type="text">
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
        <label>Enter Animal Location:</label>
        </div>
         <div class="col-md-8">
        <input #newLocation type="text">
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
        <label>Enter Animal Caretakers:</label>
        </div>
         <div class="col-md-8">
        <input #newCaretakers type="text">
        </div>
        </div>
      <div class="row">
        <div class="col-md-4">
        <label>Enter Animal Gender:</label>
        </div>
        <div class="col-md-8">
        <input #newGender type="text">
        </div>
        </div>
      <div class="row">
        <div class="col-md-4">
        <label>Enter Animal Likes:</label>
        </div>
         <div class="col-md-8">
        <input #newLikes type="text">
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
        <label>Enter Animal Dislikes:</label>
        </div>
         <div class="col-md-8">
        <input #newDislikes type="text">
        </div>
      </div>
       <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newGender.value, newLikes.value, newDislikes.value);">ADD</button>
     </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, gender: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, gender, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
