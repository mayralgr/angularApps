import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas/listas.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ListasComponent
  ],
  exports: [
    ListasComponent
  ],
})
export class ComponentsModule { }
