import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent {

  @Input() cabecalho!:string;
  @Input() Id:string="";
  constructor(){}


  ngOnInit(){

  }
  FormatNumber(event:any){
    var valor = Number(event.target.value);
     event.target.value = valor.toFixed(2)
     var valor2 = valor.toLocaleString('pt-BR', {style: 'decimal', currency: 'BRL'});  //com R$
    // var valor2 = valor.toLocaleString('pt-BR',{style: 'decimal', minimumIntegerDigits: 2});  //sem R$
    
    console.log(valor2)



  }


}
