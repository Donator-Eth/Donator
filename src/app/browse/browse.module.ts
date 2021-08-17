import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { BrowseComponent } from './browse.component';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";



@NgModule({
  declarations: [
    CardComponent,
    BrowseComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    BrowseComponent
  ]
})
export class BrowseModule { }
