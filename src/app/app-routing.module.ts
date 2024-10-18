import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrmInputComponent } from './features/frm-input/frm-input.component';
import { HomeComponent} from './features/home/home.component';
import { FrmMenuComponent} from './features/frm-menu/frm-menu.component';
import {FrmNumberComponent } from './features/frm-number/frm-number.component';
import { FrmTitleComponent} from './features/frm-title/frm-title.component';
import { FrmInputDataComponent } from './features/frm-input-data/frm-input-data.component';
import { FrmAccordionComponent } from './features/frm-accordion/frm-accordion.component';
import { FrmBadgeComponent } from './features/frm-badge/frm-badge.component';
import { FrmCarouselComponent } from './features/frm-carousel/frm-carousel.component';
import { FrmGridComponent } from './features/frm-grid/frm-grid.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'frm-input', component: FrmInputComponent},
    {path: 'frm-menu', component: FrmMenuComponent},
    {path: 'frm-number', component: FrmNumberComponent},
    {path: 'frm-title', component: FrmTitleComponent},
    {path: 'frm-input-data', component: FrmInputDataComponent},
    {path: 'frm-accordion', component: FrmAccordionComponent},
    {path: 'frm-bagde', component: FrmBadgeComponent},
    {path: 'frm-carousel', component: FrmCarouselComponent},
    {path: 'frm-grid', component: FrmGridComponent},





  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule {}

