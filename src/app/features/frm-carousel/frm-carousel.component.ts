import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frm-carousel',
  templateUrl: './frm-carousel.component.html',
  styleUrls: ['./frm-carousel.component.css']
})
export class FrmCarouselComponent implements OnInit{
  Arrayimagens!:any[]
  ArrayMessages!:any[]
  ngOnInit(): void {
    this.Arrayimagens = [
    {id:1, img:'https://culturavgp.com.br/assets/img/slide_1.jpg', label:'O conhecimento amplia suas escolhas'},
    {id:2, img:'https://culturavgp.com.br/assets/img/slide_2.jpg', label:'Aprender constantemente abre portas'},
    {id:3, img:'https://culturavgp.com.br/assets/img/slide_3.jpg', label:'O conhecimento transforma a vida individual'},
  ]
  }

}
