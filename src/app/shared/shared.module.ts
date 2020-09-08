import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeIcons } from '../shared/font-awesome-icons/font-awesome-icons.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FontAwesomeIcons
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FontAwesomeIcons,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
