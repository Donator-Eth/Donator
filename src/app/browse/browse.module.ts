import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { BrowseComponent } from './browse.component';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { FilterComponent } from './filter/filter.component';
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatChipsModule } from "@angular/material/chips";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { CardCommentsComponent } from './card/card-comments/card-comments.component';
import { MatIconModule } from "@angular/material/icon";



@NgModule({
  declarations: [
    BrowseComponent,
    CardComponent,
    FilterComponent,
    CardCommentsComponent
  ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatChipsModule,
        MatFormFieldModule,
        MatDatepickerModule,
        ReactiveFormsModule,
        MatInputModule,
        MatIconModule
    ],
  exports: [
    BrowseComponent
  ]
})
export class BrowseModule { }
