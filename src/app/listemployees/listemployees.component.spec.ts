import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListemployeesComponent } from './listemployees.component';

describe('ListemployeesComponent', () => {
  let component: ListemployeesComponent;
  let fixture: ComponentFixture<ListemployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListemployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListemployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
