import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'a-link',
  templateUrl: './a-link.component.html',
  styleUrls: ['./a-link.component.css']
})
export class ALnkComponent implements OnInit{
  @Input() label!:string;
  @Input() DivSize:string = "6em";
  @Input() rota:string="/home";
  objClass : any = "";

ngOnInit(): void {
  this.objClass = {'width':this.DivSize, 'font-size':'20px'}
}

}
