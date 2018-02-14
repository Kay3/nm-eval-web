import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DogService{
  constructor(private http: Http){
    console.log('Dogservice Initialized ... ')
  }

  getDogs(){
    return this.http.get('http://localhost:7000/terrier')
      .map(res => res.json());
  }
}
