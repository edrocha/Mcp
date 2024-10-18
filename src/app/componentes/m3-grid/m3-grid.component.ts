import { Component, Input } from '@angular/core';
import { gridConteudo } from 'src/app/models/grid-conteudo.models';

@Component({
  selector: 'm3-grid',
  templateUrl: './m3-grid.component.html',
  styleUrls: ['./m3-grid.component.css']
})
export class M3GridComponent {

    @Input() public titulo!: string
    @Input() public conteudo!: string
    @Input() public totalCampos: string = "3"

    cabecalho:any
    obj:any
    campo: string[]=[]

    rowObj:string="";
    rowsObj!: string[];
    rows!: gridConteudo[][]
    registros: any[] = [
         ];

    getKeys(obj: any): string[] {
      return Object.keys(obj);
    }


    processa(titulo:string) {
      this.cabecalho = titulo.split(",")
    }
    RenderObj(rowcontent:any){
      this.campo = []
        for ( let key in rowcontent) {
          this.campo.push(rowcontent[key])
       }
       this.registros.push(this.campo)
      console.log(this.rows)
    }


    ngOnInit(){
      this.processa(this.titulo)
      let data = this.conteudo
//      let objnovo = this.conteudo as gridConteudo
        this.obj = JSON.parse(this.conteudo);
        //console.log(this.obj);
        for (let index in this.obj) {
          let rowsobj = {index,conteudo: this.obj[index]}
          this.RenderObj(rowsobj.conteudo)
          //break
        }
        //console.log(this.campo)
        //this.RenderObjEnd(this.campo)

}





    constructor() {

    }







}
