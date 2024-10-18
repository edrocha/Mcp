import { Component, Input } from '@angular/core';

@Component({
  selector: 'm3-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  @Input() title:string="";
}
