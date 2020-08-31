import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudtoolCreateComponent } from './crudtool-create.component';

describe('CrudtoolCreateComponent', () => {
  let component: CrudtoolCreateComponent;
  let fixture: ComponentFixture<CrudtoolCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudtoolCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudtoolCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
