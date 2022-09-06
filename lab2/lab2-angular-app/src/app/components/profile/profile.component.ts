import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  id!: string;
  name!: string;
  years!: number;

  constructor() { }

  ngOnInit(): void {
    this.id = "B6215576";
    this.name = "Butsakorn Kharom";
    this.years = 2001;
  }

  getName(){
    return this.name;
  }

}
