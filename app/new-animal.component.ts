import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div class="container" id="newForm">
    <h1>New Animal</h1>
      <div class="row">
        <div class="col-md-3">
        <label>Enter Animal Name:</label>
        </div>
        <div class="col-md-9">
        <input #newName type="text">
        </div>
      </div>
      <div class="row">
      <div class="col-md-3">
      <label>Enter Animal Species:</label>
      </div>
      <div class="col-md-9">
      <input #newSpecies type="text">
      </div>
      </div>
      <div class="row">
        <div class="col-md-3">
        <label>Enter Animal Age:</label>
        </div>
         <div class="col-md-9">
        <input #newAge type="number">
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
        <label>Enter Animal Diet:</label>
        </div>
         <div class="col-md-9">
        <input #newDiet type="text">
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
        <label>Enter Animal Location:</label>
        </div>
         <div class="col-md-9">
        <input #newLocation type="text">
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
        <label>Enter Animal Caretakers:</label>
        </div>
         <div class="col-md-9">
        <input #newCaretakers type="number">
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
        <label>Enter Animal Gender:</label>
        </div>
        <div class="col-md-9">
        <input #newGender type="text">
        </div>
        </div>
      <div class="row">
        <div class="col-md-3">
        <label>Enter Animal Likes:</label>
        </div>
         <div class="col-md-9">
        <input #newLikes type="text">
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
        <label>Enter Animal Dislikes:</label>
        </div>
         <div class="col-md-9">
        <input #newDislikes type="text">
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
        <label>Enter Link of Tracks:</label>
        </div>
         <div class="col-md-9">
        <input #newImageUrl type="text">
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
        <label>Enter Animal Photo Link:</label>
        </div>
         <div class="col-md-9">
        <input #newPhotoLink type="text">
        </div>
      </div>
       <button (click)="submitForm(newPhotoLink.value, newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newGender.value, newLikes.value, newDislikes.value, newImageUrl.value, newSpecies.value='', newName.value='', newAge.value='', newDiet.value='', newLocation.value='', newCaretakers.value='', newGender.value='', newLikes.value='', newDislikes.value='', newImageUrl.value='', newPhotoLink.value='');">ADD</button>
     </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(photoLink: string, species: string, name: string, age: number, diet: string, location: string, caretakers: number, gender: string, likes: string, dislikes: string, imageUrl: string) {
    var newAnimalToAdd: Animal = new Animal(photoLink, species, name, age, diet, location, caretakers, gender, likes, dislikes, imageUrl);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
