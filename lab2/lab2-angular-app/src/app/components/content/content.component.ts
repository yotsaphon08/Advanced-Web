import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  comment!: string;

  ngOnInit(): void {
  }


  onUserClick($e?:any){
    alert("You "+$e.type+" the button at ("+$e.clientX+","+$e.clientY+")");

  }

  onUserDBclick($e?:any){
    alert("You "+$e.type+" the button");
  }
}
