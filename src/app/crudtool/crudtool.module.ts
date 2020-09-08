import { NgModule } from '@angular/core';
import { CrudtoolCreateComponent } from './crudtool-create.component';
import { CrudTool } from './crudtool.component';
import { TitleCasePipe } from '../shared/title-case.pipe';
import { RouterModule } from '@angular/router';
import { CrudtoolGuard } from '../crudtool/crudtool.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CrudtoolCreateComponent,
    CrudTool,
    TitleCasePipe
  ],
  imports: [
    RouterModule.forChild([
      {path: 'crudtool', component: CrudTool },
      {path: 'crudtool/:name',
        canActivate: [CrudtoolGuard],
        component: CrudtoolCreateComponent },
      {path: 'crudtool/create', component: CrudtoolCreateComponent },
    ]),
    SharedModule,
  ]
})
export class CrudtoolModule { }
