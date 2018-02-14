import { Component } from '@angular/core';
import { DogService } from '../services/dog.service'

@Component({
  moduleId: module.id,
  selector: 'api',
  templateUrl: 'api.component.html',
  providers: [DogService]
})

export class ApiComponent  {

  dogs: string[];

  constructor(private dogService: DogService){
    //console.log('constructor ran');

    this.dogService.getDogs().subscribe(dogs =>
      {this.dogs = dogs;});

  }

}
