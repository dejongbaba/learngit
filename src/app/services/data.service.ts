import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: number;

  constructor() { }

  setData(data) {
    this.data = data;
  }

  getData(){
    return this.data;
  }

}
