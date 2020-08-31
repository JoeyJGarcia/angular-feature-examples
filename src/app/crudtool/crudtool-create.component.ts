import { Component, OnInit } from '@angular/core';

import { ICrudDataModel } from './ICrudDataModel';

@Component({
  selector: 'app-crudtool-create',  templateUrl: './crudtool-create.component.html',
  styleUrls: ['./crudtool-create.component.css']
})
export class CrudtoolCreateComponent implements OnInit {
  pageTitle: string = 'CRUD - Create Demo';
  crudData: ICrudDataModel;

  constructor() { }

  ngOnInit(): void {
  }

}
