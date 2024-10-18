import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  texto : string = "Ola pessoal ";
  valor:number=100;

  mostra:boolean = false;


  salvar(){
     this.mostra = true;
  }
}
