import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { TitleComponent } from './componentes/title/title.component';
import { InputComponent } from './componentes/input/input.component';
import { NumberComponent } from './componentes/number/number.component';
import { DataComponent } from './componentes/data/data.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FrmInputComponent } from './features/frm-input/frm-input.component';
import { HomeComponent } from './features/home/home.component';
import { HeaderComponent } from './features/header/header.component';
import { FrmMenuComponent } from './features/frm-menu/frm-menu.component';
import { FrmNumberComponent } from './features/frm-number/frm-number.component';
import { FrmTitleComponent } from './features/frm-title/frm-title.component';
import { TemplatePrincipalComponent } from './templates/template-principal/template-principal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuMaterialComponent } from './componentes/menu-material/menu-material.component';
import { AccordionComponent } from './componentes/accordion/accordion.component';
import { FrmAccordionComponent } from './features/frm-accordion/frm-accordion.component';
import { FrmBadgeComponent } from './features/frm-badge/frm-badge.component';
import { BadgeComponent } from './componentes/badge/badge.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { FrmCarouselComponent } from './features/frm-carousel/frm-carousel.component';
import { FrmGridComponent } from './features/frm-grid/frm-grid.component';
import { M3GridComponent } from './componentes/m3-grid/m3-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    InputComponent,
    NumberComponent,
    DataComponent,
    MenuComponent,
    FrmInputComponent,
    HomeComponent,
    HeaderComponent,
    FrmMenuComponent,
    FrmNumberComponent,
    FrmTitleComponent,
    TemplatePrincipalComponent,
    MenuMaterialComponent,
    AccordionComponent,
    FrmAccordionComponent,
    FrmBadgeComponent,
    BadgeComponent,
    CarouselComponent,
    FrmCarouselComponent,
    FrmGridComponent,
    M3GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
