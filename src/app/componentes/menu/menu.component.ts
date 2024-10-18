import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
listas = [
     {label:'Home',url:'/',logo:'home.png'},
     {label:'Input',url:'/frm-input',logo:'input.png'},
     {label:'Menu',url:'/frm-menu',logo:'menu.png'},
     {label:'Number',url:'/frm-number',logo:'input.png'},
     {label:'Title',url:'/frm-title',logo:'title.png'},
     {label:'Input Data',url:'/frm-input-data',logo:'title.png'},
     {label:'Accordion',url:'/frm-accordion',logo:'title.png'},
     {label:'Bagde',url:'/frm-bagde',logo:'title.png'},
     {label:'Carousel',url:'/frm-carousel',logo:'title.png'},
     {label:'Grid',url:'/frm-grid',logo:'title.png'},

     

]
}




