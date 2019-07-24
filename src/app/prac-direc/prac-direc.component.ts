import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prac-direc',
  templateUrl: './prac-direc.component.html',
  styleUrls: ['./prac-direc.component.css']
})
export class PracDirecComponent implements OnInit {

  bandera: boolean;
  people: any[];

  constructor() { 
    this.bandera = false;
    this.people = [
      {
        "name": "Douglas  Pace",
        "age": 35,
        "country": 'BO'
      },
      {
        "name": "Mcleod  Mueller",
        "age": 32,
        "country": 'USA'
      },
      {
        "name": "Day  Meyers",
        "age": 21,
        "country": 'BO'
      },
      {
        "name": "Aguirre  Ellis",
        "age": 34,
        "country": 'USA'
      },
      {
        "name": "Cook  Tyson",
        "age": 32,
        "country": 'PE'
      }
    ]
  }

  callBandera() {
    this.bandera = !this.bandera;
  }

  ngOnInit() {
  }


}
