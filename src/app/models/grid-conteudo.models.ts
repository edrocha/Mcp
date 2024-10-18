export class gridConteudo{
  id?:number;
  conteudo?:string[]

  constructor(id: number, conteudo: string[]) {
    this.id = id;
    this.conteudo = conteudo;
  }
}
