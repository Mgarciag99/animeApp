import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component'; 
import { PanelComponent } from './panel/panel.component';
import { SharedCategoriesComponent } from './components/shared-categories/shared-categories.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { MainFirstComponent } from './main-first/main-first.component';
import { MainSecondComponent } from './main-second/main-second.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    NavbarComponent,
    PanelComponent,
    SharedCategoriesComponent,
    CarrouselComponent,
    MainFirstComponent,
    MainSecondComponent,
    FooterComponent
  ],
  exports: [
    NavbarComponent, 
    PanelComponent,
    SharedCategoriesComponent,
    CarrouselComponent,
    MainFirstComponent,
    MainSecondComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
