import { Component } from '@angular/core';

@Component({
  selector: 'app-frm-grid',
  templateUrl: './frm-grid.component.html',
  styleUrls: ['./frm-grid.component.css']
})
export class FrmGridComponent {

  title: string = "Nome, Email, Telefone"
  json! : string
  linhas! : string
  conteudo : Array<string> = ["Marcos, marcos@gmail.com,","Pedro, pedro@gmail.com,11 3422-2028"];
  ngOnInit(){
      this.json = '[{"id":"1","Nome": "Eduardo Vasconcelos","Email":"edu@gmail.com", "Telefone":"11-3455-8888"},{"id":"2","Nome": "Ana Vasconcelos","Email":"Ana@gmail.com","Telefone":""},{"id":"3","Nome": "Pedro Vasconcelos","Email":"Ana@gmail.com","Telefone":"11 3455-2828"}]'
      this.linhas = JSON.parse(this.json)
      }
}
