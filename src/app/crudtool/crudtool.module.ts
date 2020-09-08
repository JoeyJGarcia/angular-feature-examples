import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudtoolCreateComponent } from './crudtool-create.component';
import { CrudTool } from './crudtool.component';
import { FontAwesomeIcons } from '../../shared/font-awesome-icons/font-awesome-icons.component';
import { TitleCasePipe } from '../../shared/title-case.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CrudtoolGuard } from '../crudtool/crudtool.guard';

@NgModule({
  declarations: [
    CrudtoolCreateComponent,
    CrudTool,
    FontAwesomeIcons,
    TitleCasePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'crudtool', component: CrudTool },
      {path: 'crudtool/:name',
        canActivate: [CrudtoolGuard],
        component: CrudtoolCreateComponent },
      {path: 'crudtool/create', component: CrudtoolCreateComponent },
    ]),
  ]
})
export class CrudtoolModule { }
