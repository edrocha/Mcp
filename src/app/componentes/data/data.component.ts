import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  @Input() cabecalho!:string;

}
