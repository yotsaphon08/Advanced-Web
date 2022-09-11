import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();
  colorProperty: string = '';
  r: number = 255;
  g: number = 255;
  b: number = 255;
  constructor() { }

  ngOnInit(): void {
  }

  ngStyleMethod(){
    this.colorProperty = 'rgb('+this.r+','+this.g+','+this.b+')'
    this.messageEvent.emit(this.colorProperty);
  }

}
