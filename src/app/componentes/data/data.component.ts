import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-date',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class inputDataComponent {
  @Input() label!:string;

}
