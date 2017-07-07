import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "sortingByAge",
  pure: false
})

export class SortingByAgePipe implements PipeTransform {
  transform(input: Animal[], desiredSortingByAge) {
    var output: Animal[] = [];
    if(desiredSortingByAge === "youngAnimals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age <= 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSortingByAge === "matureAnimals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age >= 3) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
