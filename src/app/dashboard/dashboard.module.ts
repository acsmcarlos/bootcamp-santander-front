import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { StrockCardComponent } from './strock-card/strock-card.component';

@NgModule({
  declarations: [
    DashboardPageComponent,
    StrockCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class DashboardModule { }
