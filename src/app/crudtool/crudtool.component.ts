import { Component, OnInit } from '@angular/core';
import { CrudService } from "./crudtool.service";
import { ICrudDataModel } from "./ICrudDataModel";

@Component({
    // selector: 'crudtool-home',
    templateUrl: './crudtool.component.html'
})
export class CrudTool implements OnInit {
    pageTitle: string = 'CRUD Development Tool';
    showRows: boolean = true;
    filteredDemos: ICrudDataModel[];
    demos: ICrudDataModel[] = [];
    errMessage: string;

    constructor(private crudService: CrudService) {
        this.rowFilter = ''
    }

    onIconClicked(message: string): void {
        console.log('Duuude')
        console.log(message)
        this.pageTitle = 'CRUD Tools' + ' - ' + message
    }

    private _rowFilter: string;
    get rowFilter(): string {
        return this._rowFilter;
    }

    set rowFilter(value: string) {
        this._rowFilter = value;

        this.filteredDemos = this.performFilter();
    }

    private performFilter(): ICrudDataModel[] {
        if (this._rowFilter.length === 0) {
            return this.demos;
        } else {
            return this.filteredDemos.filter((row) => {
                    let filterStr = this._rowFilter.toLocaleLowerCase();
                    return row.name.toLocaleLowerCase().includes(filterStr);
                });
        }
    }


    toggleRows(): void {
        this.showRows = !this.showRows;
    }

    ngOnInit(): void {
        console.log('Initializing ...');
        this.crudService.getCrudServices().subscribe({
            next: crudtools => {
                this.demos = crudtools;
                this.filteredDemos = this.demos;
            },
            error: err => this.errMessage = err
        })
    }
}