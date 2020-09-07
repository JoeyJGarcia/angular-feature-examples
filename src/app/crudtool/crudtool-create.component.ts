import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ICrudDataModel } from './ICrudDataModel';

@Component({
  templateUrl: './crudtool-create.component.html'
})
export class CrudtoolCreateComponent implements OnInit {
  pageTitle: string = 'Action Name ';
  crudData: ICrudDataModel;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let name = this.route.snapshot.paramMap.get('name');
    this.pageTitle += `: ${name}`;
    this.crudData = {
      "name": "Create",
      "demoLink": "create",
      "method": "post",
      "exNum": "1000000.32",
      "exFA": 5
    };
  };

  onBack(): void {
    this.router.navigate(['/crudtool'])
  }
}
