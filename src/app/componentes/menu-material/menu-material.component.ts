import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-material',
  templateUrl: './menu-material.component.html',
  styleUrls: ['./menu-material.component.css']
})
export class MenuMaterialComponent {
  listas = [
    {label:'Auto-complete',url:'/',logo:'home.png'},
    {label:'app-Input',url:'/frm-input',logo:'input.png'},
    {label:'app-Menu',url:'/frm-menu',logo:'menu.png'},
    {label:'app-Number',url:'/frm-number',logo:'input.png'},
    {label:'m3-title',url:'/frm-title',logo:'title.png'}

]
}
